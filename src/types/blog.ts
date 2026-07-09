export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  shortDescription: string;
  content: string; // Markdown format
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  readingTime: number;
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  category: 'Company News';
  author: string;
  publishedAt: string;
  imageUrl: string;
  shortDescription: string;
  content: string; // Markdown format
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  readingTime: number;
}
