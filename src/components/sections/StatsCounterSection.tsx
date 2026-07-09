import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';

export function StatsCounterSection() {
  const { state } = useCMS();
  const { language, statsCounter } = state;
  if (!statsCounter.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <section className="py-20 bg-gradient-to-r from-[#172554] to-[#1e3a8a] text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-white/10">
          {statsCounter.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4"
            >
              <div className="text-4xl md:text-6xl font-bold mb-3 tracking-tighter text-[#3b82f6]">
                {item.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-widest">
                {t(item.label)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
