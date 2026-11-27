import { notFound } from 'next/navigation';
import { SITE } from '../../../lib/site';
import { POSTS, getPost } from '../../../lib/posts';

const authorName = 'Prodip Kumar Barmon';

function isDraft(post) {
  return post.content.some((item) => {
    const text = typeof item === 'string' ? item : item.text;
    return text?.includes('WRITE HERE');
  });
}

function formatDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function generateStaticParams() {
  return POSTS.filter((p) => !isDraft(p)).map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);

  if (!post || isDraft(post)) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: authorName }],
    creator: authorName,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      siteName: SITE.name,
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [authorName],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function Post({ params }) {
  const post = getPost(params.slug);

  if (!post || isDraft(post)) notFound();

  const formattedDate = formatDate(post.date);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: `${SITE.url}/`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <p className="small">
        <a href="/blog">&larr; Back to Blog</a>
      </p>

      <h1>{post.title}</h1>

      <p className="small">
        Author: <span>{authorName}</span> · {formattedDate}
      </p>

      {post.content.map((item, i) => {
        if (typeof item === 'string') return <p key={i}>{item}</p>;

        if (item.type === 'heading') return <h2 key={i}>{item.text}</h2>;

        if (item.type === 'link') {
          return (
            <p key={i}>
              <a href={item.href}>{item.text}</a>
            </p>
          );
        }

        return <p key={i}>{item.text}</p>;
      })}
    </article>
  );
      }
