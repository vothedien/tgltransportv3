import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NewsSection() {
  const { state } = useCMS();
  const { language, news } = state;
  if (!news.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              {t(news.title)}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500"
            >
              {t(news.subtitle)}
            </motion.p>
          </div>
          <Link 
            to="/blog"
            className="text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {language === 'en' ? 'View All News' : 'Xem Tất cả Tin tức'}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.imageUrl} 
                    alt={t(item.title)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-[12px] text-xs font-bold text-slate-900 flex items-center shadow-md z-20">
                    <Calendar className="w-3 h-3 mr-2 text-[var(--color-primary)]" />
                    {item.date}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {t(item.title)}
                  </h3>
                  <p className="text-slate-600 mb-8 flex-grow line-clamp-3">
                    {t(item.excerpt)}
                  </p>
                  <div className="text-[var(--color-primary)] font-bold flex items-center text-sm group-hover:text-blue-700 transition-colors">
                    {language === 'en' ? 'Read Article' : 'Đọc Bài viết'} 
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
