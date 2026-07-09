import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const { state } = useCMS();
  const { language, contact, settings } = state;
  if (!contact.visible) return null;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            {t(contact.title)}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto"
          >
            {t(contact.subtitle)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white px-4 py-8 md:px-6 md:py-10 rounded-[24px] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border border-slate-100 flex flex-col items-center text-center h-full group"
          >
            <div className="h-20 w-20 bg-blue-50/80 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 shadow-sm">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Address
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm xl:text-base">{t(settings.address)}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white px-4 py-8 md:px-6 md:py-10 rounded-[24px] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border border-slate-100 flex flex-col items-center text-center h-full group"
          >
            <div className="h-20 w-20 bg-blue-50/80 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 shadow-sm">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Hotline
            </h3>
            <p className="text-slate-700 font-semibold text-sm xl:text-base">{settings.phone.startsWith('0') ? '+84 ' + settings.phone.slice(1) : settings.phone}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white px-4 py-8 md:px-6 md:py-10 rounded-[24px] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border border-slate-100 flex flex-col items-center text-center h-full group"
          >
            <div className="h-20 w-20 bg-blue-50/80 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 shadow-sm">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Mail
            </h3>
            <p className="text-[var(--color-primary)] font-semibold text-[13px] xl:text-base whitespace-nowrap">{settings.email}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white px-4 py-8 md:px-6 md:py-10 rounded-[24px] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 border border-slate-100 flex flex-col items-center text-center h-full group"
          >
            <div className="h-20 w-20 bg-blue-50/80 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Fanpage
            </h3>
            <a href="https://www.facebook.com/tgltrans" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-semibold hover:underline text-sm xl:text-base">
              TGL Transport
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
