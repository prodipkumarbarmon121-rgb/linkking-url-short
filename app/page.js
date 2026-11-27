import HomeClient from './HomeClient';
import { SITE } from '../lib/site';

const description = `Shorten long links for free with ${SITE.name}. Paste your link, complete a quick check and get a short, clean URL in seconds. No signup needed.`;

export const metadata = {
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} - Free URL Shortener`,
    description,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - Free URL Shortener`,
    description,
  },
};

export default function Page() {
  return <HomeClient />;
    }
