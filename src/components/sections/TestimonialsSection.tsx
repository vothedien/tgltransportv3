import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { state } = useCMS();
  const { language, testimonials } = state;
  if (!testimonials.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <section className="py-24 md:py-32 bg-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            {t(testimonials.title)}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto"
          >
            {t(testimonials.subtitle)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border border-slate-100 relative group"
            >
              <Quote className="absolute top-8 right-8 h-16 w-16 text-slate-100 group-hover:text-blue-50 transition-colors duration-300" />
              <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed mb-10 relative z-10 italic">
                "{t(item.quote)}"
              </p>
              <div className="flex items-center">
                <img src={item.avatarUrl} alt={item.name} className="w-14 h-14 rounded-full object-cover mr-5 shadow-sm" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">{item.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{t(item.position)}, <span className="text-[var(--color-primary)] font-bold">{item.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
