import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCMS } from '../../context/CMSContext';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { MenuItem } from '../../types/cms';

function Icon({ name, className }: { name?: string, className?: string }) {
  if (!name) return null;
  const LucideIcon = (LucideIcons as any)[name];
  return LucideIcon ? <LucideIcon className={className} /> : null;
}

export function MainNav() {
  const { state, setLanguage } = useCMS();
  const { language, menus, settings } = state;
  const t = (obj: any) => obj ? obj[language] : '';
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        {menus.main.map(item => (
          <DesktopNavItem key={item.id} item={item} language={language} t={t} />
        ))}
        <div className="ml-6 pl-6 border-l border-gray-100">
          <a href="#contact" className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-sm inline-block">
            {language === 'en' ? 'Get a Quote Fast' : 'Nhận báo giá Nhanh'}
          </a>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2 text-gray-700 hover:text-[var(--color-primary)]">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-hidden lg:hidden"
          >
            <div className="px-4 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              {menus.main.map(item => (
                <MobileNavItem key={item.id} item={item} language={language} t={t} />
              ))}
              <div className="pt-6 pb-2">
                <a href="#contact" onClick={() => setIsMobileOpen(false)} className="block w-full text-white px-6 py-3 rounded-full font-bold text-base text-center bg-[var(--color-primary)] hover:brightness-110 transition">
                  {language === 'en' ? 'Get a Quote Fast' : 'Nhận báo giá Nhanh'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopNavItem({ item, language, t }: { item: MenuItem; language: string; t: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {item.link ? (
        <Link to={item.link} className="flex items-center px-4 py-2 text-sm font-bold text-gray-700 hover:text-[var(--color-primary)] transition-colors">
          {t(item.label)}
          {hasChildren && <ChevronDown size={14} className="ml-1 opacity-70" />}
        </Link>
      ) : (
        <button className="flex items-center px-4 py-2 text-sm font-bold text-gray-700 hover:text-[var(--color-primary)] transition-colors cursor-default">
          {t(item.label)}
          {hasChildren && <ChevronDown size={14} className={`ml-1 opacity-70 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
        </button>
      )}

      {hasChildren && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-sm ${item.isMega ? 'w-[600px] -ml-[200px]' : 'w-64'} z-50`}
            >
              {item.isMega ? (
                <div className="grid grid-cols-2 gap-6 p-6">
                  {item.children?.map(child => (
                    <Link key={child.id} to={child.link || '#'} className="flex items-start group/item p-2 hover:bg-gray-50 rounded-sm transition">
                      {child.icon && (
                        <div className="flex-shrink-0 mt-1 mr-4 text-gray-400 group-hover/item:text-[var(--color-primary)] transition">
                          <Icon name={child.icon} className="w-5 h-5" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 group-hover/item:text-[var(--color-primary)] transition mb-1">{t(child.label)}</h4>
                        {child.description && <p className="text-xs text-gray-500 leading-relaxed">{t(child.description)}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-2">
                  {item.children?.map(child => (
                    <Link key={child.id} to={child.link || '#'} className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-primary)] transition">
                      {t(child.label)}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function MobileNavItem({ item, language, t }: { item: MenuItem; language: string; t: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b border-gray-50 last:border-0">
      <div className="flex items-center justify-between">
        {item.link ? (
          <Link to={item.link} className="flex-grow py-4 text-base font-bold text-gray-900">
            {t(item.label)}
          </Link>
        ) : (
          <span className="flex-grow py-4 text-base font-bold text-gray-900">
            {t(item.label)}
          </span>
        )}
        
        {hasChildren && (
          <button 
            onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
            className="p-4 -mr-4 text-gray-500"
          >
            <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-4 space-y-2">
              {item.children?.map(child => (
                <Link key={child.id} to={child.link || '#'} className="block py-2.5 text-sm text-gray-600 hover:text-[var(--color-primary)]">
                  {t(child.label)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
