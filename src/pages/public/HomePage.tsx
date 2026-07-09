import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { motion } from 'motion/react';
import { MapPin, Calculator, Plane, Building2, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { WhyChooseUsSection } from '../../components/sections/WhyChooseUsSection';
import { PartnersSection } from '../../components/sections/PartnersSection';
import { FAQSection } from '../../components/sections/FAQSection';
import { NewsSection } from '../../components/sections/NewsSection';
import { StatsCounterSection } from '../../components/sections/StatsCounterSection';
import { GlobalNetworkSection } from '../../components/sections/GlobalNetworkSection';
import { TestimonialsSection } from '../../components/sections/TestimonialsSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { NewsletterSection } from '../../components/sections/NewsletterSection';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="h-6 w-6" />,
  Calculator: <Calculator className="h-6 w-6" />,
  Plane: <Plane className="h-6 w-6" />,
  Building2: <Building2 className="h-6 w-6" />
};

export function HomePage() {
  const { state } = useCMS();
  const { language, hero, quickActions, about, services } = state;

  const t = (obj: { en: string; vi: string }) => obj[language];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      {hero.visible && (
        <section className="relative min-h-[85vh] lg:h-[85vh] h-auto flex items-center justify-center overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <img 
              src={hero.backgroundImage} 
              alt="Logistics Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 pb-24 md:pb-32">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight uppercase"
            >
              {t(hero.title)}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
            >
              {t(hero.subtitle)}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <a 
                href="#contact"
                className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-colors shadow-lg"
              >
                {language === 'en' ? 'Get a Quote Fast' : 'Nhận báo giá Nhanh'}
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Quick Actions */}
      {quickActions.visible && (
        <section className="relative z-20 -mt-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.items.map((item, index) => (
              <motion.a
                href={item.link}
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-white p-8 group cursor-pointer flex flex-col h-full hover:bg-[var(--color-primary)] transition-all duration-300 rounded-[24px] shadow-lg shadow-black/5 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] border border-slate-100"
                )}
              >
                <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  {iconMap[item.icon] || <MapPin className="h-8 w-8" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{t(item.title)}</h3>
                <p className="text-slate-500 flex-grow group-hover:text-blue-50 transition-colors leading-relaxed">{t(item.description)}</p>
                <div className="mt-8 flex items-center text-[var(--color-primary)] font-bold text-sm group-hover:text-white transition-colors">
                  {language === 'en' ? 'Learn more' : 'Tìm hiểu thêm'} <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      )}

      {/* About Section */}
      {about.visible && (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-[var(--color-primary)] inline-block rounded-full"></span>
                    {t(about.subtitle)}
                  </h4>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    {t(about.title)}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                    {t(about.description)}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-8 border-t border-slate-200 pt-10">
                    {about.stats.map((stat, index) => (
                      <div key={stat.id}>
                        <div className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-2">{stat.value}</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t(stat.label)}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-[var(--color-primary)]/10 rounded-[32px] transform rotate-3 -z-10" />
                  <img src={about.imageUrl} alt="Global Network" className="rounded-[24px] shadow-2xl w-full h-[600px] object-cover" />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl rounded-[24px] border border-slate-100 hidden md:block">
                    <div className="flex items-center space-x-5">
                      <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Est.</div>
                        <div className="text-3xl font-extrabold text-slate-900">2021</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      <StatsCounterSection />

      {/* Services Section */}
      {services.visible && (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-slate-100/60 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
              >
                {t(services.title)}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-500 leading-relaxed"
              >
                {t(services.subtitle)}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.items.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group border border-slate-100 flex flex-col h-full"
                >
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={service.imageUrl} 
                      alt={t(service.title)} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors">{t(service.title)}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3 flex-grow">{t(service.description)}</p>
                    <button className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm flex items-center hover:text-blue-700 transition-colors">
                      {language === 'en' ? 'Explore Service' : 'Khám phá Dịch vụ'} <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhyChooseUsSection />
      <GlobalNetworkSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsSection />
      <FAQSection limit={2} />
      <ContactSection />
      <NewsletterSection />

    </div>
  );
}
