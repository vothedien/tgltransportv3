import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function NewsletterSection() {
  const { state } = useCMS();
  const { language, newsletter } = state;
  if (!newsletter.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <section className="py-24 bg-gradient-to-r from-[#172554] to-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            >
              {t(newsletter.title)}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-blue-200 opacity-90"
            >
              {t(newsletter.subtitle)}
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full max-w-md md:max-w-none"
          >
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder={t(newsletter.placeholderText)}
                className="flex-grow px-5 py-4 rounded-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
              <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold transition-colors whitespace-nowrap shadow-sm flex items-center justify-center"
              >
                {t(newsletter.buttonText)}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
