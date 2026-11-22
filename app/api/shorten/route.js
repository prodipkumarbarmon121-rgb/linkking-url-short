import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

const BLOCKED_DOMAINS = [
  'localhost',
  'cutly.bd',
  'linkking-url-short.vercel.app',
  'bit.ly',
  'tinyurl.com',
  't.co',
  'goo.gl',
  'is.gd',
  'cutt.ly',
  'rebrand.ly',
  'pornhub.com',
  'xvideos.com',
  'xnxx.com',
  'xhamster.com',
  'redtube.com',
  'youporn.com',
  'brazzers.com',
  'chaturbate.com',
  'stripchat.com',
];

const BLOCKED_KEYWORDS = [
  'porn',
  'xxx',
  'hentai',
  'nsfw',
  'xvideos',
  'xnxx',
  'xhamster',
  'camgirl',
  'escort',
];

const MAX_PER_HOUR = 20;
const MAX_PER_DAY = 100;

function getIp(req) {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

function hashIp(ip) {
  return crypto
    .createHash('sha256')
    .update(ip + (process.env.IP_SALT || 'salt'))
    .digest('hex');
}

function randomSlug() {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789';
  const bytes = crypto.randomBytes(7);
  let s = '';
  for (let i = 0; i < 7; i++) s += chars[bytes[i] % chars.length];
  return s;
}

function isBlocked(hostname) {
  const h = hostname.toLowerCase();
  if (BLOCKED_DOMAINS.some((d) => h === d || h.endsWith('.' + d))) return true;
  return BLOCKED_KEYWORDS.some((k) => h.includes(k));
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const raw = typeof body.url === 'string' ? body.url.trim() : '';
  if (!raw || raw.length > 2048) {
    return NextResponse.json({ error: 'Please enter a valid link.' }, { status: 400 });
  }

  let parsed;
  try {
    parsed = new URL(raw);
  } catch (e) {
    return NextResponse.json({ error: 'Please enter a valid link.' }, { status: 400 });
  }

  if (!['http:', 'https:'].includes(parsed.protocol)) {
    return NextResponse.json({ error: 'Only http and https links are allowed.' }, { status: 400 });
  }
  if (!parsed.hostname.includes('.') || parsed.username || parsed.password) {
    return NextResponse.json({ error: 'This link is not allowed.' }, { status: 400 });
  }
  if (/^\d+\.\d+\.\d+\.\d+$/.test(parsed.hostname)) {
    return NextResponse.json({ error: 'Links to IP addresses are not allowed.' }, { status: 400 });
  }
  if (isBlocked(parsed.hostname)) {
    return NextResponse.json({ error: 'This domain is not allowed.' }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY,
    { auth: { persistSession: false } }
  );

  const ipHash = hashIp(getIp(req));
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const [hour, day] = await Promise.all([
    supabase.from('links').select('id', { count: 'exact', head: true }).eq('ip_hash', ipHash).gte('created_at', hourAgo),
    supabase.from('links').select('id', { count: 'exact', head: true }).eq('ip_hash', ipHash).gte('created_at', dayAgo),
  ]);

  if ((hour.count || 0) >= MAX_PER_HOUR || (day.count || 0) >= MAX_PER_DAY) {
    return NextResponse.json(
      { error: 'Too many links created. Please try again later.' },
      { status: 429 }
    );
  }

  for (let attempt = 0; attempt < 3; attempt++) {
    const slug = randomSlug();
    const { error } = await supabase
      .from('links')
      .insert({ slug, original_url: parsed.href, ip_hash: ipHash });
    if (!error) {
      return NextResponse.json({ slug });
    }
    if (error.code !== '23505') {
      return NextResponse.json({ error: 'Could not create the link. Please try again.' }, { status: 500 });
    }
  }
  return NextResponse.json({ error: 'Could not create the link. Please try again.' }, { status: 500 });
                                                                      }
