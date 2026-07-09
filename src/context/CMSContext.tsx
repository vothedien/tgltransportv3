import React, { createContext, useContext, useState, useEffect } from 'react';
import { CMSState, CMSContextType, Language, Article, Category, Tag, Page } from '../types/cms';
import { defaultMenus, defaultArticles, defaultCategories, defaultTags, defaultPages } from '../data/seedData';

const initialCMSState: CMSState = {
  language: 'en',
  theme: {
    primaryColor: '#2563eb', // Blue theme from the provided image
    secondaryColor: '#1e3a8a',
    accentColor: '#f59e0b',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '0px'
  },
  settings: {
    companyName: 'TGL TRANSPORT',
    logoUrl: 'https://i.ibb.co/Wp6yqc6L/TGLTRANS.png',
    phone: '0343599380',
    email: 'infotgl@tgltransport.com',
    address: {
      en: '135 Hoàng Hoa Thám, Tân Bình, TP.HCM',
      vi: '135 Hoàng Hoa Thám, Tân Bình, TP.HCM'
    },
    workingHours: {
      en: 'Mon-Fri: 8AM - 6PM (EST)',
      vi: 'Thứ 2 - Thứ 6: 8SA - 6CH (EST)'
    },
    socials: {
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com'
    }
  },
  menus: defaultMenus,
  articles: defaultArticles,
  categories: defaultCategories,
  tags: defaultTags,
  pages: defaultPages,
  hero: {
    visible: true,
    order: 1,
    title: {
      en: 'Moving the World with Precision',
      vi: 'Vận chuyển Thế giới với Độ chính xác'
    },
    subtitle: {
      en: 'Premium air freight, ocean freight, and supply chain solutions tailored for your business.',
      vi: 'Giải pháp vận tải hàng không, đường biển và chuỗi cung ứng cao cấp dành riêng cho doanh nghiệp của bạn.'
    },
    backgroundImage: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1920',
    ctaText: {
      en: 'Track Your Shipment',
      vi: 'Theo dõi Lô hàng'
    }
  },
  quickActions: {
    visible: true,
    order: 2,
    items: [
      {
        id: '1',
        icon: 'MapPin',
        title: { en: 'Track & Trace', vi: 'Theo dõi & Vị trí' },
        description: { en: 'Real-time updates on your cargo.', vi: 'Cập nhật thời gian thực về hàng hóa của bạn.' },
        link: '#'
      },
      {
        id: '2',
        icon: 'Calculator',
        title: { en: 'Get a Quote', vi: 'Nhận Báo giá' },
        description: { en: 'Instant pricing for your shipments.', vi: 'Định giá ngay lập tức cho các lô hàng.' },
        link: '#'
      },
      {
        id: '3',
        icon: 'Plane',
        title: { en: 'Flight Schedules', vi: 'Lịch bay' },
        description: { en: 'Check available cargo flights.', vi: 'Kiểm tra các chuyến bay chở hàng.' },
        link: '#'
      },
      {
        id: '4',
        icon: 'Building2',
        title: { en: 'Find an Office', vi: 'Tìm Văn phòng' },
        description: { en: 'Locate our global network.', vi: 'Định vị mạng lưới toàn cầu của chúng tôi.' },
        link: '#'
      }
    ]
  },
  about: {
    visible: true,
    order: 3,
    title: { en: 'Global Reach, Local Expertise', vi: 'Phạm vi Toàn cầu, Chuyên môn Địa phương' },
    subtitle: { en: 'Your Trusted Partner in Global Logistics', vi: 'Đối tác Đáng tin cậy trong ngành Logistics Toàn cầu' },
    description: { 
      en: 'Established in 2021, TGL Transport has rapidly built a strong global network to ensure your cargo reaches its destination safely and on time. We combine modern technology with deep industry expertise to deliver exceptional service.', 
      vi: 'Thành lập từ năm 2021, TGL Transport đã nhanh chóng xây dựng một mạng lưới toàn cầu vững mạnh để đảm bảo hàng hóa của bạn đến đích an toàn và đúng giờ. Chúng tôi kết hợp công nghệ hiện đại với chuyên môn sâu sắc để mang đến dịch vụ xuất sắc.' 
    },
    imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000',
    stats: [
      { id: '1', label: { en: 'Countries Served', vi: 'Quốc gia Phục vụ' }, value: '50+' },
      { id: '2', label: { en: 'Satisfied Clients', vi: 'Khách hàng Hài lòng' }, value: '1,000+' },
      { id: '3', label: { en: 'Global Partners', vi: 'Đối tác Toàn cầu' }, value: '150+' }
    ]
  },
  services: {
    visible: true,
    order: 4,
    title: { en: 'Our Core Services', vi: 'Dịch vụ Cốt lõi' },
    subtitle: { en: 'Comprehensive logistics solutions designed to elevate your supply chain.', vi: 'Giải pháp logistics toàn diện được thiết kế để nâng tầm chuỗi cung ứng của bạn.' },
    items: [
      {
        id: 's1',
        title: { en: 'Air Freight', vi: 'Vận tải Hàng không' },
        description: { en: 'Fast, reliable global air cargo services for time-sensitive shipments.', vi: 'Dịch vụ hàng không toàn cầu nhanh chóng, đáng tin cậy cho hàng hóa nhạy cảm về thời gian.' },
        imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600'
      },
      {
        id: 's2',
        title: { en: 'Ocean Freight', vi: 'Vận tải Đường biển' },
        description: { en: 'Cost-effective sea transport solutions with extensive global coverage.', vi: 'Giải pháp vận tải đường biển tiết kiệm chi phí với phạm vi phủ sóng toàn cầu.' },
        imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600'
      },
      {
        id: 's3',
        title: { en: 'Road Transport', vi: 'Vận tải Đường bộ' },
        description: { en: 'Flexible and efficient overland transportation across domestic and cross-border routes.', vi: 'Vận tải đường bộ linh hoạt và hiệu quả trên các tuyến nội địa và xuyên biên giới.' },
        imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600'
      }
    ]
  },
  fleet: {
    visible: false,
    order: 5,
    title: { en: 'Our Modern Fleet', vi: 'Đội bay Hiện đại' },
    subtitle: { en: 'Equipped to handle any cargo requirement.', vi: 'Trang bị để xử lý mọi yêu cầu hàng hóa.' },
    items: [
      {
        id: 'f1',
        name: { en: 'Boeing 747-8F', vi: 'Boeing 747-8F' },
        capacity: { en: '137 Tonnes', vi: '137 Tấn' },
        description: { en: 'Our flagship freighter for oversized and heavy cargo.', vi: 'Chuyên cơ chở hàng chính cho hàng quá khổ và siêu trường siêu trọng.' },
        imageUrl: 'https://images.unsplash.com/photo-1559828551-2e694fb2da50?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'f2',
        name: { en: 'Boeing 777F', vi: 'Boeing 777F' },
        capacity: { en: '102 Tonnes', vi: '102 Tấn' },
        description: { en: 'Twin-engine efficiency for long-haul routes.', vi: 'Hiệu quả động cơ đôi cho các tuyến đường dài.' },
        imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  whyChooseUs: {
    visible: true,
    order: 6,
    title: { en: 'Why Choose TGL TRANSPORT', vi: 'Tại sao Chọn TGL TRANSPORT' },
    subtitle: { en: 'We deliver beyond expectations.', vi: 'Chúng tôi mang lại hơn sự mong đợi.' },
    items: [
      {
        id: 'w1',
        title: { en: 'Security & Safety', vi: 'An ninh & An toàn' },
        description: { en: 'State-of-the-art tracking and security protocols.', vi: 'Giao thức theo dõi và bảo mật tiên tiến nhất.' },
        icon: 'ShieldCheck'
      },
      {
        id: 'w2',
        title: { en: 'On-time Delivery', vi: 'Giao hàng đúng hẹn' },
        description: { en: 'Ensuring your shipments arrive safely and exactly when promised.', vi: 'Đảm bảo hàng hóa của bạn đến nơi an toàn và đúng thời gian cam kết.' },
        icon: 'Clock'
      },
      {
        id: 'w3',
        title: { en: '24/7 Support', vi: 'Hỗ trợ 24/7' },
        description: { en: 'Dedicated account teams available around the clock.', vi: 'Đội ngũ chuyên trách hỗ trợ suốt ngày đêm.' },
        icon: 'Headphones'
      }
    ]
  },
  partners: {
    visible: true,
    order: 7,
    title: { en: 'Trusted Partners', vi: 'Đối tác Đáng tin cậy' },
    subtitle: { en: 'Working with industry leaders globally.', vi: 'Hợp tác với các nhà lãnh đạo ngành toàn cầu.' },
    logos: [
      { id: 'p1', url: 'https://i.ibb.co/mCvDY6n9/dhl.webp', alt: 'DHL' },
      { id: 'p2', url: 'https://i.ibb.co/ccVzVLWB/fedex.webp', alt: 'FedEx' },
      { id: 'p3', url: 'https://i.ibb.co/b5jKZ0fX/sfexpress.webp', alt: 'SF Express' },
      { id: 'p4', url: 'https://i.ibb.co/G3v0kM4h/ups.webp', alt: 'UPS' },
      { id: 'p5', url: 'https://i.ibb.co/2VLPmkP/vietjet.webp', alt: 'Vietjet Air' },
      { id: 'p6', url: 'https://i.ibb.co/35Qv0Hrm/vna.webp', alt: 'Vietnam Airlines' }
    ]
  },
  faq: {
    visible: true,
    order: 8,
    title: { en: 'Frequently Asked Questions', vi: 'Câu hỏi Thường gặp' },
    subtitle: { en: 'Find answers to common shipping queries.', vi: 'Tìm câu trả lời cho các thắc mắc vận chuyển phổ biến.' },
    items: [
      {
        id: 'fq1',
        question: { en: 'How do I track my shipment?', vi: 'Làm thế nào để theo dõi lô hàng?' },
        answer: { en: 'You can use the Track & Trace feature on our homepage by entering your Air Waybill (AWB) number.', vi: 'Bạn có thể sử dụng tính năng Theo dõi & Vị trí trên trang chủ bằng cách nhập số Vận đơn Hàng không (AWB).' }
      },
      {
        id: 'fq2',
        question: { en: 'What items are restricted?', vi: 'Những mặt hàng nào bị hạn chế?' },
        answer: { en: 'Hazardous materials, live animals, and perishable goods require special handling. Please contact our support team.', vi: 'Vật liệu nguy hiểm, động vật sống và hàng dễ hỏng yêu cầu xử lý đặc biệt. Vui lòng liên hệ đội hỗ trợ.' }
      }
    ]
  },
  news: {
    visible: true,
    order: 9,
    title: { en: 'Latest News & Insights', vi: 'Tin tức & Thông tin' },
    subtitle: { en: 'Stay updated with TGL TRANSPORT.', vi: 'Cập nhật cùng TGL TRANSPORT.' },
    items: [
      {
        id: 'n1',
        title: { en: 'Vietnam logistics industry strives for green transformation', vi: 'Ngành logistics Việt Nam nỗ lực chuyển đổi xanh' },
        excerpt: { en: 'Green transformation is becoming an urgent requirement for Vietnam\'s logistics industry to meet international standards.', vi: 'Chuyển đổi xanh đang trở thành yêu cầu cấp thiết đối với ngành logistics Việt Nam nhằm đáp ứng các tiêu chuẩn quốc tế.' },
        date: '2026-07-01',
        imageUrl: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?q=80&w=600&auto=format&fit=crop',
        link: '/blog/vietnam-logistics-green-transformation'
      },
      {
        id: 'n2',
        title: { en: 'HCMC heavily invests in developing logistics center system', vi: 'TP.HCM đầu tư mạnh mẽ phát triển hệ thống trung tâm logistics' },
        excerpt: { en: 'HCMC is implementing the planning and construction of large-scale logistics centers to reduce costs and increase competitiveness.', vi: 'TP.HCM đang triển khai quy hoạch và xây dựng các trung tâm logistics quy mô lớn nhằm giảm chi phí, tăng năng lực cạnh tranh.' },
        date: '2026-06-28',
        imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop',
        link: '/blog/hcmc-invests-logistics-centers'
      },
      {
        id: 'n3',
        title: { en: 'Q3 Market Update: Ocean Freight Rates Stabilize', vi: 'Cập nhật Thị trường Quý 3: Cước Vận tải Biển Ổn định' },
        excerpt: { en: 'Ocean freight rates have shown signs of stabilization in the third quarter as shipping lines introduce new capacity.', vi: 'Cước vận tải biển đã có dấu hiệu ổn định trong quý 3 khi các hãng tàu đưa vào khai thác công suất mới và chuỗi cung ứng điều chỉnh.' },
        date: '2026-07-09',
        imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop',
        link: '/blog/q3-market-update-ocean-freight'
      }
    ]
  },
  statsCounter: {
    visible: true,
    order: 3,
    items: [
      { id: '1', value: '100+', label: { en: 'Countries Served', vi: 'Quốc gia' } },
      { id: '2', value: '5M+', label: { en: 'Tons Annually', vi: 'Tấn hàng năm' } },
      { id: '3', value: '3', label: { en: 'Regional Warehouses', vi: 'Kho bãi 3 miền' } },
      { id: '4', value: '24/7', label: { en: 'Support', vi: 'Hỗ trợ' } }
    ]
  },
  globalNetwork: {
    visible: true,
    order: 6,
    title: { en: 'Our Global Network', vi: 'Mạng lưới Toàn cầu' },
    subtitle: { en: 'Connecting continents through our strategic hubs.', vi: 'Kết nối các lục địa qua các trung tâm chiến lược.' },
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    locations: [
      { id: '1', city: { en: 'New York', vi: 'New York' }, x: 25, y: 35 },
      { id: '2', city: { en: 'London', vi: 'London' }, x: 48, y: 30 },
      { id: '3', city: { en: 'Dubai', vi: 'Dubai' }, x: 62, y: 45 },
      { id: '4', city: { en: 'Singapore', vi: 'Singapore' }, x: 78, y: 60 }
    ]
  },
  testimonials: {
    visible: true,
    order: 7,
    title: { en: 'What Our Clients Say', vi: 'Khách hàng Nói gì' },
    subtitle: { en: 'Success stories from our trusted partners.', vi: 'Câu chuyện thành công từ đối tác.' },
    items: [
      {
        id: '1',
        name: 'Sarah Jenkins',
        position: { en: 'Supply Chain Director', vi: 'Giám đốc Chuỗi Cung ứng' },
        company: 'TechGlobal Inc.',
        quote: { en: 'TGL TRANSPORT transformed our distribution speed and reliability.', vi: 'TGL TRANSPORT đã thay đổi tốc độ và độ tin cậy phân phối của chúng tôi.' },
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
      },
      {
        id: '2',
        name: 'Michael Chen',
        position: { en: 'Operations Manager', vi: 'Quản lý Hoạt động' },
        company: 'Asia Pacific Trading',
        quote: { en: 'Exceptional service and transparent tracking at every step.', vi: 'Dịch vụ xuất sắc và theo dõi minh bạch ở mọi bước.' },
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
      }
    ]
  },
  contact: {
    visible: true,
    order: 10,
    title: { en: 'Get In Touch', vi: 'Liên Hệ' },
    subtitle: { en: 'We are here to help you solve your logistics challenges.', vi: 'Chúng tôi ở đây để giúp giải quyết thách thức logistics của bạn.' }
  },
  newsletter: {
    visible: true,
    order: 11,
    title: { en: 'Subscribe to Our Newsletter', vi: 'Đăng ký Bản tin' },
    subtitle: { en: 'Get the latest logistics news and insights delivered to your inbox.', vi: 'Nhận tin tức logistics mới nhất.' },
    placeholderText: { en: 'Enter your email address', vi: 'Nhập địa chỉ email của bạn' },
    buttonText: { en: 'Subscribe', vi: 'Đăng ký' }
  }
};

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CMSState>(() => {
    const saved = localStorage.getItem('logistics_cms_state_v17');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const merged = { ...initialCMSState, ...parsed };
        
        // Ensure that new seeded pages/articles/menus are not overwritten if localStorage is stale
        if (!parsed.pages || parsed.pages.length < initialCMSState.pages.length) {
          merged.pages = initialCMSState.pages;
        }
        if (!parsed.articles || parsed.articles.length < initialCMSState.articles.length) {
          merged.articles = initialCMSState.articles;
        }
        if (!parsed.menus || !parsed.menus.main || parsed.menus.main.length < initialCMSState.menus.main.length) {
          merged.menus = initialCMSState.menus;
        }

        // Force settings and theme to always use code defaults since user wants to edit in code
        merged.settings = initialCMSState.settings;
        merged.theme = initialCMSState.theme;
        
        // Also force about section to ensure updates are reflected
        merged.about = initialCMSState.about;
        merged.partners = initialCMSState.partners;
        merged.news = initialCMSState.news;
        
        return merged;
      } catch (e) {
        return initialCMSState;
      }
    }
    return initialCMSState;
  });

  useEffect(() => {
    localStorage.setItem('logistics_cms_state_v17', JSON.stringify(state));
    document.documentElement.style.setProperty('--color-primary', state.theme.primaryColor);
    document.documentElement.style.setProperty('--color-secondary', state.theme.secondaryColor);
    document.documentElement.style.setProperty('--color-accent', state.theme.accentColor);
    document.documentElement.style.setProperty('--font-sans', state.theme.fontFamily);
    document.documentElement.style.setProperty('--radius', state.theme.borderRadius);
  }, [state]);

  const setLanguage = (lang: Language) => setState(s => ({ ...s, language: lang }));
  const updateTheme = (theme: Partial<CMSState['theme']>) => setState(s => ({ ...s, theme: { ...s.theme, ...theme } }));
  const updateSettings = (settings: Partial<CMSState['settings']>) => setState(s => ({ ...s, settings: { ...s.settings, ...settings } }));
  const updateHero = (hero: Partial<CMSState['hero']>) => setState(s => ({ ...s, hero: { ...s.hero, ...hero } }));
  const updateQuickActions = (actions: Partial<CMSState['quickActions']>) => setState(s => ({ ...s, quickActions: { ...s.quickActions, ...actions } }));
  const updateAbout = (about: Partial<CMSState['about']>) => setState(s => ({ ...s, about: { ...s.about, ...about } }));
  const updateStatsCounter = (stats: Partial<CMSState['statsCounter']>) => setState(s => ({ ...s, statsCounter: { ...s.statsCounter, ...stats } }));
  const updateServices = (services: Partial<CMSState['services']>) => setState(s => ({ ...s, services: { ...s.services, ...services } }));
  const updateFleet = (fleet: Partial<CMSState['fleet']>) => setState(s => ({ ...s, fleet: { ...s.fleet, ...fleet } }));
  const updateWhyChooseUs = (whyChooseUs: Partial<CMSState['whyChooseUs']>) => setState(s => ({ ...s, whyChooseUs: { ...s.whyChooseUs, ...whyChooseUs } }));
  const updateGlobalNetwork = (network: Partial<CMSState['globalNetwork']>) => setState(s => ({ ...s, globalNetwork: { ...s.globalNetwork, ...network } }));
  const updatePartners = (partners: Partial<CMSState['partners']>) => setState(s => ({ ...s, partners: { ...s.partners, ...partners } }));
  const updateTestimonials = (testimonials: Partial<CMSState['testimonials']>) => setState(s => ({ ...s, testimonials: { ...s.testimonials, ...testimonials } }));
  const updateFaq = (faq: Partial<CMSState['faq']>) => setState(s => ({ ...s, faq: { ...s.faq, ...faq } }));
  const updateNews = (news: Partial<CMSState['news']>) => setState(s => ({ ...s, news: { ...s.news, ...news } }));
  const updateNewsletter = (newsletter: Partial<CMSState['newsletter']>) => setState(s => ({ ...s, newsletter: { ...s.newsletter, ...newsletter } }));
  const updateContact = (contact: Partial<CMSState['contact']>) => setState(s => ({ ...s, contact: { ...s.contact, ...contact } }));
  const updateMenus = (menus: Partial<CMSState['menus']>) => setState(s => ({ ...s, menus: { ...s.menus, ...menus } }));
  
  const updateArticle = (id: string, article: Partial<Article>) => setState(s => ({ ...s, articles: s.articles.map(a => a.id === id ? { ...a, ...article } : a) }));
  const addArticle = (article: Article) => setState(s => ({ ...s, articles: [...s.articles, article] }));
  const deleteArticle = (id: string) => setState(s => ({ ...s, articles: s.articles.filter(a => a.id !== id) }));
  
  const updatePage = (id: string, page: Partial<Page>) => setState(s => ({ ...s, pages: s.pages.map(p => p.id === id ? { ...p, ...page } : p) }));
  const addPage = (page: Page) => setState(s => ({ ...s, pages: [...s.pages, page] }));
  const deletePage = (id: string) => setState(s => ({ ...s, pages: s.pages.filter(p => p.id !== id) }));
  
  const updateCategory = (id: string, category: Partial<Category>) => setState(s => ({ ...s, categories: s.categories.map(c => c.id === id ? { ...c, ...category } : c) }));
  const addCategory = (category: Category) => setState(s => ({ ...s, categories: [...s.categories, category] }));
  const deleteCategory = (id: string) => setState(s => ({ ...s, categories: s.categories.filter(c => c.id !== id) }));
  
  const updateTag = (id: string, tag: Partial<Tag>) => setState(s => ({ ...s, tags: s.tags.map(t => t.id === id ? { ...t, ...tag } : t) }));
  const addTag = (tag: Tag) => setState(s => ({ ...s, tags: [...s.tags, tag] }));
  const deleteTag = (id: string) => setState(s => ({ ...s, tags: s.tags.filter(t => t.id !== id) }));
  
  const resetToDefaults = () => setState(initialCMSState);

  const exportConfig = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "logistics-cms-config.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <CMSContext.Provider value={{
      state, setLanguage, updateTheme, updateSettings, updateHero, updateQuickActions, 
      updateAbout, updateStatsCounter, updateServices, updateFleet, updateWhyChooseUs, updateGlobalNetwork, updatePartners, 
      updateTestimonials, updateFaq, updateNews, updateNewsletter, updateContact, 
      updateMenus, updateArticle, addArticle, deleteArticle, updatePage, addPage, deletePage,
      updateCategory, addCategory, deleteCategory, updateTag, addTag, deleteTag,
      resetToDefaults, exportConfig
    }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}
