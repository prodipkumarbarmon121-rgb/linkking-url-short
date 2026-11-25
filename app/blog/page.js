
import Link from 'next/link';
import { POSTS } from '../../lib/posts';

export const metadata = {
  title: 'Blog',
  description: 'Guides and tips about short links, sharing and online safety.',
  alternates: { canonical: '/blog' },
};

function isDraft(post) {
  return post.content.some((item) => {
    const text = typeof item === 'string' ? item : item.text;
    return text?.includes('WRITE HERE');
  });
}

export default function Blog() {
  const posts = POSTS.filter((p) => !isDraft(p));

  return (
    <>
      <h1>Blog</h1>
      {posts.length === 0 && <p>Articles coming soon.</p>}
      {posts.map((p) => (
        <div className="card" key={p.slug}>
          <h2 style={{ marginTop: 0 }}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </h2>
          <p className="small">{p.date}</p>
          <p>{p.description}</p>
        </div>
      ))}
    </>
  );
        }
        
