
import { SITE } from '../lib/site';
import { POSTS } from '../lib/posts';

function isDraft(post) {
  return post.content.some((item) => {
    const text = typeof item === 'string' ? item : item?.text;
    return typeof text === 'string' && text.includes('WRITE HERE');
  });
}

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

  const posts = POSTS.filter((p) => !isDraft(p)).map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...pages, ...posts];
}
