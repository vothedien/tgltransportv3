import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { faqData } from '../../data/faq';

interface FAQSectionProps {
  limit?: number;
}

export function FAQSection({ limit }: FAQSectionProps) {
  const { state } = useCMS();
  const { language } = state;
  const [openId, setOpenId] = useState<number | null>(null);

  const t = (obj: { en: string; vi: string }) => obj[language];

  const displayData = limit ? faqData.slice(0, limit) : faqData;

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            {language === 'en' ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto"
          >
            {language === 'en' 
              ? 'Find answers to common questions about our logistics and supply chain services.' 
              : 'Tìm hiểu các câu trả lời cho những thắc mắc thường gặp về dịch vụ logistics và chuỗi cung ứng của chúng tôi.'}
          </motion.p>
        </div>

        <div className="space-y-4">
          {displayData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                className={cn(
                  "bg-white rounded-3xl overflow-hidden transition-all duration-300 border border-slate-100",
                  isOpen ? "shadow-xl shadow-blue-900/5 ring-1 ring-blue-100" : "shadow-sm hover:shadow-md hover:border-blue-100/50"
                )}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full px-6 py-6 md:px-8 md:py-7 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className={cn(
                    "font-bold text-lg md:text-xl pr-8 transition-colors duration-300",
                    isOpen ? "text-[var(--color-primary)]" : "text-slate-800 group-hover:text-[var(--color-primary)]"
                  )}>
                    {t(item.question)}
                  </span>
                  <div className={cn(
                    "flex-shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-[var(--color-primary)] text-white shadow-md shadow-blue-500/20" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[var(--color-primary)]"
                  )}>
                    {isOpen ? (
                      <Minus className="h-6 w-6" />
                    ) : (
                      <Plus className="h-6 w-6" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed text-base md:text-lg border-t border-slate-50/50 pt-4">
                        {t(item.answer)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {limit && faqData.length > limit && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link 
              to="/faq"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-full font-bold shadow-sm hover:shadow-md hover:border-slate-300 hover:text-[var(--color-primary)] transition-all duration-300 group"
            >
              {language === 'en' ? 'View All FAQs' : 'Xem tất cả câu hỏi'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
