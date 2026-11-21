import { SITE } from '../lib/site';

export default function sitemap() {
  const pages = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/report-abuse',
    '/blog',
  ];
  return pages.map((p) => ({
    url: SITE.url + p,
    lastModified: new Date(),
  }));
}
