'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function randomSlug() {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

export default function Home() {
  const [url, setUrl] = useState('');
  const [short, setShort] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setError('');
    setShort('');
    if (!/^https?:\/\/.+\..+/.test(url.trim())) {
      setError('Please enter a valid link starting with http:// or https://');
      return;
    }
    setLoading(true);
    const slug = randomSlug();
    const { error } = await supabase
      .from('links')
      .insert({ slug, original_url: url.trim() });
    setLoading(false);
    if (error) {
      setError('Something went wrong: ' + error.message);
      return;
    }
    setShort(window.location.origin + '/' + slug);
  }

  return (
    <>
      <h1>Free URL Shortener - Shorten Long Links Instantly</h1>
      <p>
        Paste a long link below and get a short, clean link you can share
        anywhere.
      </p>

      <div className="card">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/very-long-link"
          aria-label="Long URL"
        />
        <p>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Please wait...' : 'Shorten'}
          </button>
        </p>
        {error && <p className="error">{error}</p>}
        {short && (
          <div className="ok">
            Your short link: <a href={short}>{short}</a>
          </div>
        )}
      </div>

      <section>
        <h2>How Linkking works</h2>
        <p>
          WRITE HERE: 3 to 4 sentences explaining how to use Linkking
          (paste link, click Shorten, copy and share).
        </p>

        <h2>Why use a short link</h2>
        <p>
          WRITE HERE: benefits of short links (easy to share, clean look,
          fits in messages and social posts).
        </p>

        <h2>Frequently Asked Questions</h2>
        <p>
          WRITE HERE: 4 to 5 questions and answers (is it free, do links
          expire, is it safe, what links are not allowed).
        </p>
      </section>
    </>
  );
  }
