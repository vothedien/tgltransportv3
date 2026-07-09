import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { Globe, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { MainNav } from '../components/navigation/MainNav';
import { FloatingContactWidget } from '../components/ui/FloatingContactWidget';

export function PublicLayout() {
  const { state, setLanguage } = useCMS();
  const { language, settings } = state;

  const t = (en: string, vi: string) => language === 'en' ? en : vi;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center relative z-50 border-b border-white/5">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-3 lg:mb-0 text-center sm:text-left">
          <span className="font-extrabold tracking-wider text-white uppercase text-[11px]">TGL TRANS – Logistics & Solutions</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5"><span className="text-slate-400">Hotline/Zalo/WhatsApp:</span> <a href="tel:0343599380" className="font-semibold text-white hover:text-[var(--color-primary)] transition-colors">0343599380</a></span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="mailto:infotgl@tgltransport.com" className="font-semibold hover:text-white transition-colors">infotgl@tgltransport.com</a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <Globe size={14} className="text-slate-400" />
            <button 
              onClick={() => setLanguage('en')}
              className={cn("hover:text-white transition-colors duration-200 font-medium", language === 'en' ? 'text-white drop-shadow-md' : 'text-slate-400')}
            >
              EN
            </button>
            <span className="text-slate-700 text-[10px]">●</span>
            <button 
              onClick={() => setLanguage('vi')}
              className={cn("hover:text-white transition-colors duration-200 font-medium", language === 'vi' ? 'text-white drop-shadow-md' : 'text-slate-400')}
            >
              VI
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-40 shadow-sm relative transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center block">
                {settings.logoUrl ? (
                  <img src={settings.logoUrl} alt={settings.companyName} className="h-28 md:h-36 lg:h-44 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105 block" />
                ) : (
                  <span className="text-3xl md:text-4xl font-extrabold tracking-tighter py-4 block" style={{ color: 'var(--color-primary)' }}>
                    {settings.companyName}
                  </span>
                )}
              </Link>
            </div>

            {/* Navigation */}
            <MainNav />
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-300 py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <a href="https://www.facebook.com/tgltrans" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  {settings.logoUrl && (
                    <img src={settings.logoUrl} alt={settings.companyName} className="h-14 md:h-16 w-auto object-contain brightness-0 invert" />
                  )}
                </a>
                <Link to="/" className="flex items-center">
                  <span className="text-2xl font-bold tracking-tighter text-white block">{settings.companyName}</span>
                </Link>
              </div>
              <p className="text-sm text-gray-400 mb-6 max-w-xs">{t('Delivering excellence across the globe with precision and care.', 'Mang đến sự xuất sắc trên toàn cầu với độ chính xác và cẩn thận.')}</p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{t('Quick Links', 'Liên kết nhanh')}</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-1"/> {t('Track & Trace', 'Theo dõi')}</Link></li>
                <li><Link to="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-1"/> {t('Flight Schedules', 'Lịch bay')}</Link></li>
                <li><Link to="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-1"/> {t('Our Services', 'Dịch vụ')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{t('Legal', 'Pháp lý')}</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-1"/> {t('Terms of Use', 'Điều khoản sử dụng')}</Link></li>
                <li><Link to="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-1"/> {t('Privacy Policy', 'Chính sách bảo mật')}</Link></li>
                <li><Link to="#" className="hover:text-white transition flex items-center"><ChevronRight size={14} className="mr-1"/> {t('Cookie Policy', 'Chính sách Cookie')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">{t('Contact Us', 'Liên hệ')}</h3>
              <ul className="space-y-3 text-sm">
                <li><span className="text-gray-400">Address: </span>{settings.address[language] || settings.address}</li>
                <li><span className="text-gray-400">Hotline: </span>{settings.phone.startsWith('0') ? '+84 ' + settings.phone.slice(1) : settings.phone}</li>
                <li><span className="text-gray-400">Mail: </span>{settings.email}</li>
                <li><span className="text-gray-400">Fanpage: </span><a href="https://www.facebook.com/tgltrans" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline">https://www.facebook.com/tgltrans</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2025 by TGL TRANSPORT. All Rights Reserved. Design by <a href="https://www.facebook.com/thedien710" target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline">theneid</a> | <Link to="/sitemap.xml" target="_blank" className="hover:text-white transition underline">Sitemaps</Link>.</p>
          </div>
        </div>
      </footer>
      
      <FloatingContactWidget />
    </div>
  );
}
