import { redirect, notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function SlugPage({ params }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data } = await supabase
    .from('links')
    .select('original_url, disabled')
    .eq('slug', params.slug)
    .maybeSingle();

  if (!data || data.disabled) notFound();

  let target;
  try {
    target = new URL(data.original_url);
  } catch (e) {
    notFound();
  }
  if (!['http:', 'https:'].includes(target.protocol)) notFound();

  redirect(target.href);
}
