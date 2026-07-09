import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';

export function PartnersSection() {
  const { state } = useCMS();
  const { language, partners } = state;
  if (!partners.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  // Debugging output for Developer Console
  console.log("PartnersSection rendering. Logos count:", partners?.logos?.length);

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-slate-900 tracking-tight"
          >
            {t(partners.title)}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-500 mt-3 font-medium"
          >
            {t(partners.subtitle)}
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden flex items-center h-32 mt-8">
          <div 
            className="flex shrink-0 gap-16 md:gap-24 items-center group-hover:[animation-play-state:paused]"
            style={{ width: 'max-content', animation: 'marquee 30s linear infinite' }}
          >
            {partners.logos && partners.logos.length > 0 ? (
              [...partners.logos, ...partners.logos, ...partners.logos, ...partners.logos, ...partners.logos, ...partners.logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="transition-all duration-300 hover:scale-110 drop-shadow-sm px-4 shrink-0 flex items-center justify-center w-32 md:w-40"
                >
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="h-12 md:h-16 w-full object-contain block"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      console.error(`Failed to load image: ${logo.url}`);
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-400">No logos configured.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
