import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQSection } from '../../components/sections/FAQSection';
import { useCMS } from '../../context/CMSContext';

export function FAQPage() {
  const { state } = useCMS();
  const { language } = state;
  
  const title = language === 'en' ? 'FAQ | TGL Transport' : 'Câu hỏi thường gặp | TGL Transport';
  const description = language === 'en' 
    ? 'Frequently asked questions about our logistics, shipping, and supply chain services.' 
    : 'Những câu hỏi thường gặp về dịch vụ logistics, vận tải và chuỗi cung ứng của chúng tôi.';

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <FAQSection />
    </div>
  );
}
