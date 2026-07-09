import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function GlobalNetworkSection() {
  const { state } = useCMS();
  const { language, globalNetwork } = state;
  if (!globalNetwork.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            {t(globalNetwork.title)}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto"
          >
            {t(globalNetwork.subtitle)}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[24px] overflow-hidden shadow-2xl bg-white aspect-[21/9] border border-slate-100"
        >
          {/* Using a placeholder map image, in a real app this might be an SVG or interactive Mapbox */}
          <img 
            src={globalNetwork.imageUrl} 
            alt="Global Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-transparent to-slate-50/80 pointer-events-none" />

          {/* Interactive Pins */}
          {globalNetwork.locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (index * 0.1), type: 'spring' }}
              className="absolute group cursor-pointer"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-[var(--color-primary)] rounded-full animate-ping opacity-20" />
                <MapPin className="h-8 w-8 text-[var(--color-primary)] drop-shadow-md" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                {t(loc.city)}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
