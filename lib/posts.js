import fs from 'fs';
import path from 'path';

// Every blog post is its own .json file inside lib/posts-data/.
// To add a post, just add a new file there. Nothing else needs to change.
const dir = path.join(process.cwd(), 'lib', 'posts-data');

function loadPosts() {
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
  } catch (e) {
    return [];
  }

  const posts = [];
  for (const file of files) {
    try {
      const post = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
      if (post && post.slug && post.title && Array.isArray(post.content)) {
        posts.push(post);
      }
    } catch (e) {
      // skip a file that is not valid JSON, so one mistake cannot break the site
    }
  }

  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export const POSTS = loadPosts();

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
