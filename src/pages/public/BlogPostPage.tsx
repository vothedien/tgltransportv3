import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { getBlogPostBySlug, getRelatedBlogPosts } from '../../lib/api-blog';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <link rel="canonical" href={`https://tgltransport.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero */}
      <div className="bg-[var(--color-secondary)] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center text-sm text-gray-300 font-medium gap-6">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {new Date(post.publishedAt).toLocaleDateString()}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readingTime} min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
        <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-8 md:p-12">
          
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <Link to="/" className="hover:text-[var(--color-primary)]">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/blog" className="hover:text-[var(--color-primary)]">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-[var(--color-primary)]">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Logistics Support?</h3>
            <p className="text-gray-600 mb-6">Our experts are ready to optimize your supply chain with tailored solutions.</p>
            <Link to="/contact" className="inline-block bg-[var(--color-primary)] text-white font-bold py-3 px-8 rounded hover:bg-blue-700 transition">
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map(rp => (
              <div key={rp.id} className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden group">
                <Link to={`/blog/${rp.slug}`}>
                  <div className="h-48 overflow-hidden relative">
                    <img src={rp.imageUrl} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition line-clamp-2">{rp.title}</h3>
                    <p className="text-gray-600 line-clamp-3 text-sm">{rp.shortDescription}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
