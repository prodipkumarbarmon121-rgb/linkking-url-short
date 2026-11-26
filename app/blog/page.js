import Link from 'next/link';
import { POSTS } from '../../lib/posts';

export const metadata = {
  title: 'Blog',
  description: 'Guides and tips about short links, sharing and online safety.',
  alternates: { canonical: '/blog' },
};

function isDraft(post) {
  if (!Array.isArray(post?.content)) return false;
  return post.content.some((item) => {
    const text = typeof item === 'string' ? item : item?.text;
    return typeof text === 'string' && text.includes('WRITE HERE');
  });
}

export default function Blog() {
  const posts = Array.isArray(POSTS)
    ? POSTS.filter((post) => post && !isDraft(post))
    : [];

  return (
    <>
      <h1>Blog</h1>

      {posts.length === 0 && <p>Articles coming soon.</p>}

      {posts.map((post) => (
        <div className="card" key={post.slug}>
          <h2 style={{ marginTop: 0 }}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          <p className="small">{post.date}</p>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  );
    }
        
