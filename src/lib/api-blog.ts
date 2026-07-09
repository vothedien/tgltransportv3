import { BlogPost, NewsPost } from '../types/blog';

// Use import.meta.glob to dynamically import all json files
const blogModules = import.meta.glob('../data/content/blog/*.json', { eager: true });
const newsModules = import.meta.glob('../data/content/news/*.json', { eager: true });

export function getAllBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];
  for (const path in blogModules) {
    const module = blogModules[path] as any;
    posts.push(module.default || module);
  }
  // Sort by date descending
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getAllNewsPosts(): NewsPost[] {
  const posts: NewsPost[] = [];
  for (const path in newsModules) {
    const module = newsModules[path] as any;
    posts.push(module.default || module);
  }
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.slug === slug);
}

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  const posts = getAllNewsPosts();
  return posts.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const all = getAllBlogPosts();
  return all
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
