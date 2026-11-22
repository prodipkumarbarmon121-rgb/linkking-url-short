import { SITE } from '../lib/site';
import { POSTS } from '../lib/posts';

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
  ].map((p) => ({
    url: SITE.url + p,
    lastModified: new Date(),
  }));

  const posts = POSTS.filter(
    (p) => !p.content.some((c) => c.includes('WRITE HERE'))
  ).map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...pages, ...posts];
}
