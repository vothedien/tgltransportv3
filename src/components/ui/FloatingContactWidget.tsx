import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Phone, MessageCircle, X, MessageSquareText } from 'lucide-react';
import companyConfig from '../../config/company.json';

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Staggered fade in + slide left on load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const buttonClass = "flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl relative group backdrop-blur-md border border-white/20";
  const tooltipClass = "absolute right-full mr-4 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm border border-slate-700 shadow-xl";

  return (
    <div className="fixed z-[9999] right-4 bottom-4 md:right-6 md:bottom-6 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {isLoaded && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 pointer-events-auto"
          >
            {/* Phone */}
            <motion.a
              href={`tel:${companyConfig.phone}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`${buttonClass} w-12 h-12 bg-green-500/90 hover:bg-green-500 text-white`}
            >
              <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-500"></div>
              <Phone size={22} className="relative z-10" />
              <span className={tooltipClass}>
                Gọi ngay
                <span className="block text-[10px] text-slate-300">{companyConfig.phone.startsWith('0') ? '+84 ' + companyConfig.phone.slice(1) : companyConfig.phone}</span>
              </span>
            </motion.a>

            {/* Zalo */}
            <motion.a
              href={companyConfig.zalo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`${buttonClass} w-12 h-12 bg-blue-500/90 hover:bg-blue-500 text-white`}
            >
              <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-blue-500" style={{ animationDelay: '1s' }}></div>
              <MessageCircle size={22} className="relative z-10" />
              <span className={tooltipClass}>Chat Zalo</span>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href={companyConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`${buttonClass} w-12 h-12 bg-indigo-600/90 hover:bg-indigo-600 text-white`}
            >
              <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-indigo-600" style={{ animationDelay: '2s' }}></div>
              <Facebook size={22} className="relative z-10" />
              <span className={tooltipClass}>Chat Facebook</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <AnimatePresence>
        {isLoaded && (
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleOpen}
            className={`${buttonClass} w-14 h-14 bg-slate-900 text-white shadow-2xl pointer-events-auto`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageSquareText size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
