import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { ChevronRight, Calendar, Clock, User, Tag as TagIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function DynamicPage() {
  const params = useParams();
  const slug = params["*"];
  const { state } = useCMS();
  const { language, pages, articles, categories, tags, settings } = state;
  const t = (obj: any) => obj ? obj[language] : '';

  const processContent = (content: string) => {
    if (!content) return '';
    return content
      .replace(/{{email}}/g, settings.email)
      .replace(/{{phone}}/g, settings.phone.startsWith('0') ? '+84 ' + settings.phone.slice(1) : settings.phone)
      .replace(/{{address}}/g, settings.address[language] || settings.address as any);
  };

  const page = pages.find(p => p.slug === slug);
  const article = articles.find(a => a.slug === slug);

  if (page) {
    return (
      <div className="min-h-screen bg-gray-50 pt-10 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm">
          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[var(--color-primary)] transition">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">{t(page.title)}</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">{t(page.title)}</h1>
          
          <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown>{processContent(t(page.content))}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }

  if (article) {
    const category = categories.find(c => c.id === article.categoryId);
    const articleTags = tags.filter(t => article.tags.includes(t.id));
    
    // Formatting date
    const date = new Date(article.publishedDate).toLocaleDateString(language === 'en' ? 'en-US' : 'vi-VN', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    const relatedArticles = articles
      .filter(a => a.id !== article.id && a.categoryId === article.categoryId && a.status === 'published')
      .slice(0, 3);

    return (
      <div className="min-h-screen bg-white pb-24">
        {/* Article Hero */}
        <div className="relative h-[60vh] min-h-[400px] w-full">
          <img src={article.imageUrl} alt={t(article.title)} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
              <nav className="flex text-sm text-gray-300 mb-6 font-medium uppercase tracking-wider">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link to="/blog" className="hover:text-white transition">Blog</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                {category && <span className="text-[var(--color-primary)]">{t(category.name)}</span>}
              </nav>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">{t(article.title)}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300">
                <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {article.author}</div>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {date}</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {article.readingTime} min read</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content & Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg prose-gray max-w-none">
              <ReactMarkdown>{processContent(t(article.content))}</ReactMarkdown>
            </div>
            
            {/* Tags */}
            {articleTags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center flex-wrap gap-3">
                <TagIcon className="w-5 h-5 text-gray-400" />
                {articleTags.map(tag => (
                  <span key={tag.id} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-sm text-sm font-medium hover:bg-[var(--color-primary)] hover:text-white transition cursor-pointer">
                    {t(tag.name)}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-12">
            {/* Categories */}
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">{language === 'en' ? 'Categories' : 'Danh mục'}</h3>
              <ul className="space-y-3">
                {categories.map(c => (
                  <li key={c.id}>
                    <Link to={`/blog?category=${c.slug}`} className="text-gray-600 hover:text-[var(--color-primary)] transition font-medium flex justify-between items-center">
                      <span>{t(c.name)}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Posts */}
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-6 uppercase tracking-wider border-b border-gray-200 pb-2">{language === 'en' ? 'Related Articles' : 'Bài viết liên quan'}</h3>
                <div className="space-y-6">
                  {relatedArticles.map(rel => (
                    <Link key={rel.id} to={`/${rel.slug}`} className="flex gap-4 group">
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm">
                        <img src={rel.imageUrl} alt={t(rel.title)} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition text-sm leading-snug line-clamp-2 mb-2">{t(rel.title)}</h4>
                        <p className="text-xs text-gray-500 flex items-center"><Calendar className="w-3 h-3 mr-1" /> {new Date(rel.publishedDate).toLocaleDateString()}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Contact CTA */}
            <div className="bg-[var(--color-secondary)] text-white p-8 rounded-sm">
              <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Need Logistics Help?' : 'Cần hỗ trợ Logistics?'}</h3>
              <p className="text-sm text-gray-400 mb-6">{language === 'en' ? 'Contact our experts for customized supply chain solutions.' : 'Liên hệ chuyên gia để có giải pháp chuỗi cung ứng.'}</p>
              <a href="/#contact" className="block text-center w-full bg-[var(--color-primary)] text-white py-3 font-bold rounded-sm hover:brightness-110 transition shadow-sm">
                {language === 'en' ? 'Contact Us' : 'Liên Hệ'}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not found
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-sm font-bold">
        Return Home
      </Link>
    </div>
  );
}
