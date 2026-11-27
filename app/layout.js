import './globals.css';
import Link from 'next/link';
import { SITE } from '../lib/site';

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
const gscCode = process.env.NEXT_PUBLIC_GSC_CODE;

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: 'Prodip Kumar Barmon' }],
  creator: 'Prodip Kumar Barmon',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
  },
  verification: gscCode ? { google: gscCode } : undefined,
  other: adsenseId ? { 'google-adsense-account': adsenseId } : undefined,
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
    },
    {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      founder: { '@type': 'Person', name: 'Prodip Kumar Barmon' },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <header className="site">
          <div className="wrap">
            <Link href="/" className="logo">{SITE.name}</Link>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="content wrap">{children}</main>

        <footer className="site">
          <div className="wrap">
            <p>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/report-abuse">Report Abuse</Link>
            </p>
            <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
