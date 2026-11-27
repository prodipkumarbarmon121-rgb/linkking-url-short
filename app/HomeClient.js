'use client';
import { useState, useEffect, useRef } from 'react';
import { SITE } from '../lib/site';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function HomeClient() {
  const [url, setUrl] = useState('');
  const [short, setShort] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [token, setToken] = useState('');
  const widgetRef = useRef(null);
  const widgetId = useRef(null);

  useEffect(() => {
    if (!SITE_KEY) return;
    function renderWidget() {
      if (!window.turnstile || !widgetRef.current || widgetId.current !== null) return;
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: SITE_KEY,
        callback: (t) => setToken(t),
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken(''),
      });
    }
    if (window.turnstile) {
      renderWidget();
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.defer = true;
    s.onload = renderWidget;
    document.head.appendChild(s);
  }, []);

  async function handleSubmit() {
    setError('');
    setShort('');
    setCopied(false);
    if (!/^https?:\/\/.+\..+/.test(url.trim())) {
      setError('Please enter a valid link starting with http:// or https://');
      return;
    }
    if (SITE_KEY && !token) {
      setError('Please complete the verification check below.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim(), token }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
      } else {
        setShort(window.location.origin + '/' + data.slug);
      }
    } catch (e) {
      setError('Network error. Please try again.');
    }
    if (window.turnstile && widgetId.current !== null) {
      window.turnstile.reset(widgetId.current);
    }
    setToken('');
    setLoading(false);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(short);
      setCopied(true);
    } catch (e) {
      setCopied(false);
    }
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
        <div ref={widgetRef} style={{ marginTop: 12, minHeight: 65 }} />
        <p>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Please wait...' : 'Shorten'}
          </button>
        </p>
        {error && <p className="error">{error}</p>}
        {short && (
          <div className="ok">
            Your short link: <a href={short}>{short}</a>
            <p>
              <button onClick={copyLink}>{copied ? 'Copied!' : 'Copy link'}</button>
            </p>
          </div>
        )}
      </div>

      <section>
        <h2>How {SITE.name} works</h2>
        <p>
          Using {SITE.name} takes just a few seconds. Paste your long web
          address into the box above, complete the quick verification check
          and press the Shorten button. You will instantly get a short link.
          Copy it and share it anywhere you like, in a message, an email or a
          social media post. No signup is needed.
        </p>

        <h2>Why use a short link</h2>
        <p>
          Long links are hard to read and often break when sent in messages.
          A short link looks clean, fits easily in social media posts and is
          simple to type or remember. It is especially useful when you share
          links in chat apps, printed material or anywhere space is limited.
        </p>

        <h2>Frequently Asked Questions</h2>

        <h3>Is {SITE.name} free to use?</h3>
        <p>Yes. You can create short links for free without making an account.</p>

        <h3>Do the short links expire?</h3>
        <p>
          Links stay active until they are removed. We may disable a link if it
          breaks our Terms of Service.
        </p>

        <h3>Is it safe?</h3>
        <p>
          We do not allow malware, phishing or illegal content. You can report
          a harmful link on our <a href="/report-abuse">Report Abuse</a> page.
        </p>

        <h3>Which links are not allowed?</h3>
        <p>
          Links to adult content, scams, malware, spam or anything illegal are
          not allowed. Known adult websites are blocked automatically, and
          other harmful links are removed when they are reported. See our{' '}
          <a href="/terms">Terms of Service</a> for the full list.
        </p>
      </section>
    </>
  );
}
