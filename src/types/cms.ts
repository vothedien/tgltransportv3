export type Language = 'en' | 'vi';

export interface LocalizedString {
  en: string;
  vi: string;
}

export interface SiteTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  borderRadius: string;
}

export interface SiteSettings {
  companyName: string;
  logoUrl: string;
  phone: string;
  email: string;
  address: LocalizedString;
  socials: {
    linkedin: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
  workingHours: LocalizedString;
}

export interface HeroSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  backgroundImage: string;
  ctaText: LocalizedString;
}

export interface QuickAction {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  link: string;
}

export interface QuickActionsSection {
  visible: boolean;
  order: number;
  items: QuickAction[];
}

export interface AboutSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  imageUrl: string;
  stats: { id: string; label: LocalizedString; value: string }[];
}

export interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  imageUrl: string;
}

export interface ServicesSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  items: Service[];
}

export interface FleetSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  items: { id: string; name: LocalizedString; capacity: LocalizedString; description: LocalizedString; imageUrl: string }[];
}

export interface WhyChooseUsSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  items: { id: string; title: LocalizedString; description: LocalizedString; icon: string }[];
}

export interface PartnersSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  logos: { id: string; url: string; alt: string }[];
}

export interface FAQSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  items: { id: string; question: LocalizedString; answer: LocalizedString }[];
}

export interface NewsSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  items: { id: string; title: LocalizedString; excerpt: LocalizedString; date: string; imageUrl: string; link: string }[];
}

export interface GlobalNetworkSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  imageUrl: string;
  locations: { id: string; city: LocalizedString; x: number; y: number }[];
}

export interface TestimonialsSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  items: { id: string; name: string; position: LocalizedString; company: string; quote: LocalizedString; avatarUrl: string }[];
}

export interface ContactSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
}

export interface NewsletterSection {
  visible: boolean;
  order: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  placeholderText: LocalizedString;
  buttonText: LocalizedString;
}

export interface StatsCounterSection {
  visible: boolean;
  order: number;
  items: { id: string; value: string; label: LocalizedString }[];
}

export interface Tag {
  id: string;
  slug: string;
  name: LocalizedString;
}

export interface Category {
  id: string;
  slug: string;
  name: LocalizedString;
  description?: LocalizedString;
}

export interface Article {
  id: string;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  categoryId: string;
  tags: string[];
  imageUrl: string;
  author: string;
  publishedDate: string;
  readingTime: number;
  status: 'published' | 'draft';
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
}

export interface Page {
  id: string;
  slug: string;
  title: LocalizedString;
  content: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
}

export interface MenuItem {
  id: string;
  label: LocalizedString;
  link?: string;
  description?: LocalizedString;
  icon?: string;
  children?: MenuItem[];
  isMega?: boolean;
}

export interface CMSState {
  language: Language;
  theme: SiteTheme;
  settings: SiteSettings;
  hero: HeroSection;
  quickActions: QuickActionsSection;
  about: AboutSection;
  statsCounter: StatsCounterSection;
  services: ServicesSection;
  fleet: FleetSection;
  whyChooseUs: WhyChooseUsSection;
  globalNetwork: GlobalNetworkSection;
  partners: PartnersSection;
  testimonials: TestimonialsSection;
  faq: FAQSection;
  news: NewsSection;
  newsletter: NewsletterSection;
  contact: ContactSection;
  menus: {
    main: MenuItem[];
    footer: MenuItem[];
  };
  articles: Article[];
  categories: Category[];
  tags: Tag[];
  pages: Page[];
}

export interface CMSContextType {
  state: CMSState;
  setLanguage: (lang: Language) => void;
  updateTheme: (theme: Partial<SiteTheme>) => void;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  updateHero: (hero: Partial<HeroSection>) => void;
  updateQuickActions: (actions: Partial<QuickActionsSection>) => void;
  updateAbout: (about: Partial<AboutSection>) => void;
  updateStatsCounter: (stats: Partial<StatsCounterSection>) => void;
  updateServices: (services: Partial<ServicesSection>) => void;
  updateFleet: (fleet: Partial<FleetSection>) => void;
  updateWhyChooseUs: (whyChooseUs: Partial<WhyChooseUsSection>) => void;
  updateGlobalNetwork: (network: Partial<GlobalNetworkSection>) => void;
  updatePartners: (partners: Partial<PartnersSection>) => void;
  updateTestimonials: (testimonials: Partial<TestimonialsSection>) => void;
  updateFaq: (faq: Partial<FAQSection>) => void;
  updateNews: (news: Partial<NewsSection>) => void;
  updateNewsletter: (newsletter: Partial<NewsletterSection>) => void;
  updateContact: (contact: Partial<ContactSection>) => void;
  updateMenus: (menus: Partial<CMSState['menus']>) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  addArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
  updatePage: (id: string, page: Partial<Page>) => void;
  addPage: (page: Page) => void;
  deletePage: (id: string) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  addCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
  updateTag: (id: string, tag: Partial<Tag>) => void;
  addTag: (tag: Tag) => void;
  deleteTag: (id: string) => void;
  resetToDefaults: () => void;
  exportConfig: () => void;
}
