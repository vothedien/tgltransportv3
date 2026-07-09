import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { Calendar, User, ChevronRight, Search } from 'lucide-react';
import { getAllNewsPosts } from '../../lib/api-blog';

export function CompanyNewsPage() {
  const { state } = useCMS();
  const { language } = state;
  const [searchQuery, setSearchQuery] = useState('');

  const allArticles = getAllNewsPosts();
  let filteredArticles = allArticles;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredArticles = filteredArticles.filter(a => 
      a.title.toLowerCase().includes(q) || 
      a.shortDescription.toLowerCase().includes(q)
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[var(--color-secondary)] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Company News
          </h1>
          <p className="text-xl text-gray-300">
            Official announcements, press releases, and updates from TGL Transport.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {filteredArticles.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-sm border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No news found</h2>
              <p className="text-gray-500">Check back later for more updates.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredArticles.map((article, index) => {
                return (
                  <motion.article 
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden group flex flex-col md:flex-row"
                  >
                    <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                      <Link to={`/company-news/${article.slug}`}>
                        <img 
                          src={article.imageUrl} 
                          alt={article.title} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      </Link>
                      <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-8 md:w-3/5 flex flex-col">
                      <div className="flex items-center text-xs text-gray-500 font-medium mb-4 space-x-4">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {new Date(article.publishedAt).toLocaleDateString()}</span>
                        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {article.author}</span>
                      </div>
                      <Link to={`/company-news/${article.slug}`}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--color-primary)] transition leading-tight">
                          {article.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                        {article.shortDescription}
                      </p>
                      <Link to={`/company-news/${article.slug}`} className="flex items-center text-[var(--color-primary)] font-bold uppercase text-sm tracking-wider hover:text-black transition mt-auto">
                        Read Announcement <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Search News</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-sm focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
