import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Headphones, Box, Truck, BarChart, Clock } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-8 w-8" />,
  Leaf: <Leaf className="h-8 w-8" />,
  Headphones: <Headphones className="h-8 w-8" />,
  Box: <Box className="h-8 w-8" />,
  Truck: <Truck className="h-8 w-8" />,
  BarChart: <BarChart className="h-8 w-8" />,
  Clock: <Clock className="h-8 w-8" />
};

export function WhyChooseUsSection() {
  const { state } = useCMS();
  const { language, whyChooseUs } = state;
  if (!whyChooseUs.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <section className="py-24 bg-[#1e3a8a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#172554] to-[#1e3a8a] opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[140%] bg-blue-500 rounded-full blur-3xl transform rotate-12 mix-blend-screen opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            {t(whyChooseUs.title)}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-200"
          >
            {t(whyChooseUs.subtitle)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {whyChooseUs.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="h-24 w-24 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 text-blue-500 group-hover:text-white border border-white/10 group-hover:border-blue-500 shadow-xl shadow-blue-900/20">
                <div className="scale-110 opacity-80 group-hover:opacity-100 transition-opacity">
                  {iconMap[item.icon] || <ShieldCheck className="h-8 w-8" />}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-wide">{t(item.title)}</h3>
              <p className="text-blue-200/80 leading-relaxed max-w-xs mx-auto">
                {t(item.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
