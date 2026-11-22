export const POSTS = [
  {
    slug: 'what-is-a-url-shortener',
    title: 'What Is a URL Shortener and How Does It Work?',
    description:
      'Learn what a URL shortener is, how it turns long links into short ones, and when you should use one.',
    date: '2026-11-22',
    content: [
      'WRITE HERE: opening paragraph explaining what a URL shortener is.',
      'WRITE HERE: second paragraph explaining how it works.',
      'WRITE HERE: third paragraph about when to use short links.',
      'WRITE HERE: fourth paragraph about safety and good practice.',
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
