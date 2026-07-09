import { Article, Category, MenuItem, Page, Tag } from '../types/cms';

export const defaultMenus: { main: MenuItem[], footer: MenuItem[] } = {
  main: [
    {
      id: 'about',
      label: { en: 'About Us', vi: 'Về chúng tôi' },
      isMega: true,
      children: [
        { id: 'about-overview', label: { en: 'Company Overview', vi: 'Tổng quan công ty' }, link: '/company', description: { en: 'Learn about our history and global presence.', vi: 'Tìm hiểu về lịch sử và sự hiện diện toàn cầu.' }, icon: 'Building2' },
        { id: 'about-vision', label: { en: 'Vision & Mission', vi: 'Tầm nhìn & Sứ mệnh' }, link: '/vision-mission', description: { en: 'Our goals for the future of logistics.', vi: 'Mục tiêu tương lai ngành logistics.' }, icon: 'Target' },
        { id: 'about-values', label: { en: 'Core Values', vi: 'Giá trị cốt lõi' }, link: '/core-values', description: { en: 'The principles that guide our business.', vi: 'Nguyên tắc định hướng kinh doanh.' }, icon: 'Heart' },
        { id: 'about-careers', label: { en: 'Careers', vi: 'Tuyển dụng' }, link: '/careers', description: { en: 'Join our growing global team.', vi: 'Gia nhập đội ngũ toàn cầu.' }, icon: 'Users' }
      ]
    },
    {
      id: 'services',
      label: { en: 'Services', vi: 'Dịch vụ' },
      isMega: true,
      children: [
        { id: 'srv-air', label: { en: 'Air Freight', vi: 'Vận tải Hàng không' }, link: '/air-freight-services', description: { en: 'Fast and reliable air cargo solutions.', vi: 'Giải pháp hàng không nhanh chóng.' }, icon: 'Plane' },
        { id: 'srv-sea', label: { en: 'Sea Freight', vi: 'Vận tải Đường biển' }, link: '/sea-freight-services', description: { en: 'Cost-effective global ocean shipping.', vi: 'Vận tải biển tiết kiệm.' }, icon: 'Ship' },
        { id: 'srv-road', label: { en: 'Road Freight', vi: 'Vận tải Đường bộ' }, link: '/road-freight-services', description: { en: 'Domestic and cross-border trucking.', vi: 'Vận tải nội địa và xuyên biên giới.' }, icon: 'Truck' },
        { id: 'srv-express', label: { en: 'Express Delivery', vi: 'Chuyển phát nhanh' }, link: '/express-delivery', description: { en: 'Time-critical parcel delivery.', vi: 'Giao hàng khẩn cấp.' }, icon: 'Zap' },
        { id: 'srv-customs', label: { en: 'Customs Clearance', vi: 'Thủ tục Hải quan' }, link: '/customs-clearance', description: { en: 'Expert handling of import/export rules.', vi: 'Chuyên gia xử lý thủ tục.' }, icon: 'FileText' },
        { id: 'srv-warehousing', label: { en: 'Warehousing', vi: 'Lưu kho' }, link: '/warehousing', description: { en: 'Secure storage and fulfillment.', vi: 'Lưu kho và hoàn tất đơn hàng an toàn.' }, icon: 'Package' }
      ]
    },
    {
      id: 'industries',
      label: { en: 'Industries', vi: 'Ngành nghề' },
      isMega: false,
      children: [
        { id: 'ind-healthcare', label: { en: 'Healthcare', vi: 'Y tế' }, link: '/industries/healthcare' },
        { id: 'ind-automotive', label: { en: 'Automotive', vi: 'Ô tô' }, link: '/industries/automotive' },
        { id: 'ind-electronics', label: { en: 'Electronics', vi: 'Điện tử' }, link: '/industries/electronics' },
        { id: 'ind-retail', label: { en: 'Retail & E-commerce', vi: 'Bán lẻ & TMĐT' }, link: '/industries/retail' }
      ]
    },
    {
      id: 'resources',
      label: { en: 'Resources', vi: 'Tài nguyên' },
      isMega: true,
      children: [
        { id: 'res-blog', label: { en: 'Blog', vi: 'Blog' }, link: '/blog', description: { en: 'Logistics insights and news.', vi: 'Tin tức và kiến thức logistics.' }, icon: 'BookOpen' },
        { id: 'res-faq', label: { en: 'FAQ', vi: 'Câu hỏi thường gặp' }, link: '/faq', description: { en: 'Answers to common shipping questions.', vi: 'Giải đáp thắc mắc.' }, icon: 'HelpCircle' },
        { id: 'res-shipping', label: { en: 'Shipping Process', vi: 'Quy trình Giao hàng' }, link: '/shipping-process', description: { en: 'Step-by-step guide to our process.', vi: 'Hướng dẫn quy trình chi tiết.' }, icon: 'ArrowRightCircle' },
        { id: 'res-packaging', label: { en: 'Packaging Guide', vi: 'Hướng dẫn Đóng gói' }, link: '/how-to-package', description: { en: 'How to secure your goods.', vi: 'Cách bảo vệ hàng hóa.' }, icon: 'Box' }
      ]
    },
    {
      id: 'contact',
      label: { en: 'Contact', vi: 'Liên hệ' },
      link: '/contact'
    }
  ],
  footer: [
    { id: 'terms', label: { en: 'Terms of Service', vi: 'Điều khoản Dịch vụ' }, link: '/terms' },
    { id: 'privacy', label: { en: 'Privacy Policy', vi: 'Chính sách Bảo mật' }, link: '/privacy-policy' }
  ]
};

export const defaultCategories: Category[] = [
  { id: 'cat-shipping', slug: 'shipping-tips', name: { en: 'Shipping Tips', vi: 'Mẹo Giao hàng' } },
  { id: 'cat-logistics', slug: 'logistics', name: { en: 'Logistics', vi: 'Logistics' } },
  { id: 'cat-customs', slug: 'customs', name: { en: 'Customs & Compliance', vi: 'Hải quan & Tuân thủ' } },
  { id: 'cat-news', slug: 'company-news', name: { en: 'Company News', vi: 'Tin tức Công ty' } }
];

export const defaultTags: Tag[] = [
  { id: 'tag-air', slug: 'air-freight', name: { en: 'Air Freight', vi: 'Đường Hàng không' } },
  { id: 'tag-sea', slug: 'sea-freight', name: { en: 'Sea Freight', vi: 'Đường biển' } },
  { id: 'tag-ecommerce', slug: 'ecommerce', name: { en: 'E-commerce', vi: 'Thương mại Điện tử' } }
];

export const defaultPages: Page[] = [
  {
    id: 'page-terms',
    slug: 'terms',
    title: { en: 'Terms of Service', vi: 'Điều khoản Dịch vụ' },
    content: {
      en: 'Welcome to our logistics service. By using our services, you agree to these terms...',
      vi: 'Chào mừng bạn đến với dịch vụ logistics của chúng tôi. Bằng cách sử dụng dịch vụ, bạn đồng ý...'
    }
  },
  {
    id: 'page-privacy',
    slug: 'privacy-policy',
    title: { en: 'Privacy Policy', vi: 'Chính sách Bảo mật' },
    content: {
      en: 'Your privacy is critically important to us...',
      vi: 'Bảo mật của bạn rất quan trọng đối với chúng tôi...'
    }
  },
  {
    id: 'page-shipping-process',
    slug: 'shipping-process',
    title: { en: 'Our Shipping Process', vi: 'Quy trình Giao hàng' },
    content: {
      en: 'We have a streamlined 5-step shipping process from origin to destination...',
      vi: 'Chúng tôi có quy trình giao hàng 5 bước tinh gọn từ nơi gửi đến nơi nhận...'
    }
  },
  {
    id: 'page-company',
    slug: 'company',
    title: { en: 'Company Overview', vi: 'Tổng quan công ty' },
    content: {
      en: 'Learn about our history, our global presence, and how we became a leader in the logistics industry. \n\n We provide top-tier supply chain solutions tailored to your business needs.',
      vi: 'Tìm hiểu về lịch sử, sự hiện diện toàn cầu và cách chúng tôi trở thành công ty đi đầu trong ngành logistics. \n\n Chúng tôi cung cấp các giải pháp chuỗi cung ứng hàng đầu được điều chỉnh phù hợp với nhu cầu kinh doanh của bạn.'
    }
  },
  {
    id: 'page-vision-mission',
    slug: 'vision-mission',
    title: { en: 'Vision & Mission', vi: 'Tầm nhìn & Sứ mệnh' },
    content: {
      en: '### Our Vision\nTo be the most reliable and innovative logistics partner globally.\n\n### Our Mission\nTo connect businesses and communities through seamless, sustainable, and efficient supply chain solutions.',
      vi: '### Tầm nhìn\nTrở thành đối tác logistics đáng tin cậy và sáng tạo nhất trên toàn cầu.\n\n### Sứ mệnh\nKết nối các doanh nghiệp và cộng đồng thông qua các giải pháp chuỗi cung ứng liền mạch, bền vững và hiệu quả.'
    }
  },
  {
    id: 'page-core-values',
    slug: 'core-values',
    title: { en: 'Core Values', vi: 'Giá trị cốt lõi' },
    content: {
      en: '1. **Integrity:** We do what is right.\n2. **Excellence:** We strive for the best.\n3. **Collaboration:** We work as one team.\n4. **Innovation:** We embrace change and new technologies.',
      vi: '1. **Chính trực:** Chúng tôi làm những gì đúng đắn.\n2. **Xuất sắc:** Chúng tôi vươn tới sự hoàn hảo.\n3. **Hợp tác:** Chúng tôi làm việc như một khối thống nhất.\n4. **Đổi mới:** Chúng tôi đón nhận sự thay đổi và công nghệ mới.'
    }
  },
  {
    id: 'page-careers',
    slug: 'careers',
    title: { en: 'Careers', vi: 'Tuyển dụng' },
    content: {
      en: 'Join our growing global team. We are always looking for talented individuals who are passionate about logistics and supply chain management.\n\n[View Open Positions](#)',
      vi: 'Gia nhập đội ngũ toàn cầu đang phát triển của chúng tôi. Chúng tôi luôn tìm kiếm những cá nhân tài năng, đam mê logistics và quản lý chuỗi cung ứng.\n\n[Xem các vị trí đang tuyển](#)'
    }
  },
  {
    id: 'page-air-freight',
    slug: 'air-freight-services',
    title: { en: 'Air Freight Services', vi: 'Dịch vụ Vận tải Hàng không' },
    content: {
      en: 'Fast, reliable, and secure air cargo solutions for your time-sensitive shipments. We partner with major airlines to ensure global coverage.',
      vi: 'Giải pháp hàng không nhanh chóng, đáng tin cậy và an toàn cho các lô hàng nhạy cảm về thời gian của bạn. Chúng tôi hợp tác với các hãng hàng không lớn để đảm bảo độ phủ sóng toàn cầu.'
    }
  },
  {
    id: 'page-sea-freight',
    slug: 'sea-freight-services',
    title: { en: 'Sea Freight Services', vi: 'Dịch vụ Vận tải Đường biển' },
    content: {
      en: 'Cost-effective global ocean shipping for large volumes. We offer both FCL (Full Container Load) and LCL (Less than Container Load) options.',
      vi: 'Vận tải biển toàn cầu tiết kiệm chi phí cho khối lượng lớn. Chúng tôi cung cấp cả tùy chọn FCL (Hàng nguyên container) và LCL (Hàng lẻ).'
    }
  },
  {
    id: 'page-road-freight',
    slug: 'road-freight-services',
    title: { en: 'Road Freight Services', vi: 'Dịch vụ Vận tải Đường bộ' },
    content: {
      en: 'Flexible domestic and cross-border trucking solutions. Our fleet ensures your goods are delivered safely and on time.',
      vi: 'Các giải pháp vận tải bằng xe tải linh hoạt trong nước và xuyên biên giới. Đội xe của chúng tôi đảm bảo hàng hóa của bạn được giao an toàn và đúng hẹn.'
    }
  },
  {
    id: 'page-express-delivery',
    slug: 'express-delivery',
    title: { en: 'Express Delivery', vi: 'Chuyển phát nhanh' },
    content: {
      en: 'Time-critical parcel delivery for urgent shipments. Track your packages in real-time from origin to destination.',
      vi: 'Giao nhận bưu kiện quan trọng về thời gian cho các lô hàng khẩn cấp. Theo dõi các gói hàng của bạn theo thời gian thực từ điểm gửi đến điểm đích.'
    }
  },
  {
    id: 'page-customs-clearance',
    slug: 'customs-clearance',
    title: { en: 'Customs Clearance', vi: 'Thủ tục Hải quan' },
    content: {
      en: 'Expert handling of import/export regulations. Our licensed brokers ensure your goods clear customs smoothly and without delays.',
      vi: 'Xử lý chuyên nghiệp các quy định xuất nhập khẩu. Các đại lý hải quan được cấp phép của chúng tôi đảm bảo hàng hóa của bạn được thông quan suôn sẻ và không bị chậm trễ.'
    }
  },
  {
    id: 'page-warehousing',
    slug: 'warehousing',
    title: { en: 'Warehousing & Fulfillment', vi: 'Lưu kho & Hoàn tất đơn hàng' },
    content: {
      en: 'Secure storage and efficient fulfillment services. Our modern warehouses are equipped with advanced inventory management systems.',
      vi: 'Lưu trữ an toàn và dịch vụ hoàn tất đơn hàng hiệu quả. Các nhà kho hiện đại của chúng tôi được trang bị hệ thống quản lý hàng tồn kho tiên tiến.'
    }
  },
  {
    id: 'page-how-to-package',
    slug: 'how-to-package',
    title: { en: 'Packaging Guide', vi: 'Hướng dẫn Đóng gói' },
    content: {
      en: 'Proper packaging is essential for safe transit. Follow our guidelines to ensure your goods are protected during shipping.',
      vi: 'Đóng gói đúng cách là điều cần thiết để vận chuyển an toàn. Làm theo hướng dẫn của chúng tôi để đảm bảo hàng hóa của bạn được bảo vệ trong quá trình giao hàng.'
    }
  },
  {
    id: 'page-faq',
    slug: 'faq',
    title: { en: 'Frequently Asked Questions', vi: 'Câu hỏi thường gặp' },
    content: {
      en: 'Find answers to common shipping questions, tracking issues, and service details.',
      vi: 'Tìm câu trả lời cho các câu hỏi thường gặp về giao hàng, vấn đề theo dõi và chi tiết dịch vụ.'
    }
  },
  {
    id: 'page-ind-healthcare',
    slug: 'industries/healthcare',
    title: { en: 'Healthcare Logistics', vi: 'Logistics Y tế' },
    content: {
      en: 'Specialized supply chain solutions for pharmaceuticals and medical devices.',
      vi: 'Các giải pháp chuỗi cung ứng chuyên biệt cho dược phẩm và thiết bị y tế.'
    }
  },
  {
    id: 'page-ind-automotive',
    slug: 'industries/automotive',
    title: { en: 'Automotive Logistics', vi: 'Logistics Ô tô' },
    content: {
      en: 'Just-in-time delivery and parts management for the automotive industry.',
      vi: 'Giao hàng đúng lúc (JIT) và quản lý phụ tùng cho ngành công nghiệp ô tô.'
    }
  },
  {
    id: 'page-ind-electronics',
    slug: 'industries/electronics',
    title: { en: 'Electronics Logistics', vi: 'Logistics Điện tử' },
    content: {
      en: 'Secure and temperature-controlled shipping for sensitive electronic components.',
      vi: 'Vận chuyển an toàn và kiểm soát nhiệt độ cho các linh kiện điện tử nhạy cảm.'
    }
  },
  {
    id: 'page-ind-retail',
    slug: 'industries/retail',
    title: { en: 'Retail & E-commerce', vi: 'Bán lẻ & TMĐT' },
    content: {
      en: 'End-to-end fulfillment services for online retailers and brick-and-mortar stores.',
      vi: 'Dịch vụ hoàn tất đơn hàng trọn gói cho các nhà bán lẻ trực tuyến và cửa hàng truyền thống.'
    }
  },
  {
    id: 'page-contact',
    slug: 'contact',
    title: { en: 'Contact Us', vi: 'Liên hệ' },
    content: {
      en: 'Get in touch with our team for inquiries, quotes, and support.\n\n- **Mail:** {{email}}\n- **Hotline:** {{phone}}\n- **Address:** {{address}}\n- **Fanpage:** [TGL Transport](https://www.facebook.com/tgltrans)',
      vi: 'Liên hệ với đội ngũ của chúng tôi để được giải đáp, báo giá và hỗ trợ.\n\n- **Mail:** {{email}}\n- **Hotline:** {{phone}}\n- **Address:** {{address}}\n- **Fanpage:** [TGL Transport](https://www.facebook.com/tgltrans)'
    }
  }
];

export const defaultArticles: Article[] = [
  {
    id: 'art-1',
    slug: 'how-international-shipping-works',
    title: { en: 'How International Shipping Works', vi: 'Cách thức Giao hàng Quốc tế Hoạt động' },
    excerpt: { en: 'A comprehensive guide to understanding global freight.', vi: 'Hướng dẫn toàn diện về vận tải toàn cầu.' },
    content: {
      en: `## Understanding Global Freight

International shipping is the backbone of global trade, allowing goods to move across borders via oceans, air, and land. Navigating this process involves multiple parties, strict regulations, and careful coordination.

### Key Players in the Process
- **Freight Forwarders**: Act as intermediaries, arranging the transportation of goods on behalf of shippers.
- **Carriers**: The actual transport companies (shipping lines, airlines, trucking companies) that move the goods.
- **Customs Brokers**: Specialists who ensure goods clear customs smoothly, handling duties, taxes, and documentation.

### The Shipping Cycle
1. **Export Haulage**: Moving goods from the shipper's facility to the origin port or terminal.
2. **Origin Customs Clearance**: Getting approval to export the goods.
3. **Origin Handling**: Unloading, inspecting, and loading goods onto the main carrier.
4. **Main Transit**: The primary journey (sea, air, or rail).
5. **Import Customs Clearance**: Paying duties and obtaining approval to enter the destination country.
6. **Destination Handling**: Unloading and preparing goods for final delivery.
7. **Import Haulage**: Delivering goods from the destination port to the receiver.

By understanding these steps, businesses can better plan their supply chains, manage costs, and avoid delays.`,
      vi: 'Nội dung tiếng Việt...'
    },
    categoryId: 'cat-logistics',
    tags: ['tag-sea', 'tag-air'],
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200',
    author: 'Admin',
    publishedDate: new Date().toISOString(),
    readingTime: 5,
    status: 'published'
  },
  {
    id: 'art-2',
    slug: 'how-to-package-fragile-items',
    title: { en: 'Packaging Tips for Fragile Goods', vi: 'Mẹo đóng gói Hàng dễ vỡ' },
    excerpt: { en: 'Ensure your delicate shipments arrive safely.', vi: 'Đảm bảo hàng hóa mong manh đến nơi an toàn.' },
    content: {
      en: 'Fragile items require extra care. Always double-box, use bubble wrap, and ensure there is no empty space in the carton...',
      vi: 'Hàng dễ vỡ cần được chăm sóc đặc biệt...'
    },
    categoryId: 'cat-shipping',
    tags: [],
    imageUrl: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200',
    author: 'Admin',
    publishedDate: new Date().toISOString(),
    readingTime: 3,
    status: 'published'
  },
  {
    id: 'art-3',
    slug: 'customs-clearance-guide',
    title: { en: 'International Customs Clearance Guide', vi: 'Hướng dẫn Thông quan Quốc tế' },
    excerpt: { en: 'Avoid delays with proper documentation.', vi: 'Tránh chậm trễ với giấy tờ hợp lệ.' },
    content: {
      en: 'Customs clearance is often the biggest bottleneck in international shipping. Ensure your Commercial Invoice and Packing List are 100% accurate...',
      vi: 'Thông quan thường là nút thắt lớn nhất...'
    },
    categoryId: 'cat-customs',
    tags: [],
    imageUrl: 'https://images.unsplash.com/photo-1566838883648-2615de981a8c?auto=format&fit=crop&q=80&w=1200',
    author: 'Admin',
    publishedDate: new Date().toISOString(),
    readingTime: 4,
    status: 'published'
  },
  {
    id: 'art-news-1',
    slug: 'new-route-frankfurt',
    title: { en: 'New Route to Frankfurt Opened', vi: 'Mở Đường bay mới đến Frankfurt' },
    excerpt: { en: 'Expanding our European network with daily flights to FRA.', vi: 'Mở rộng mạng lưới châu Âu với các chuyến bay hàng ngày đến FRA.' },
    content: {
      en: 'We are excited to announce our new route to Frankfurt, Germany. [Content to be written later]',
      vi: 'Chúng tôi vui mừng thông báo đường bay mới đến Frankfurt, Đức. [Nội dung sẽ được cập nhật sau]'
    },
    categoryId: 'cat-news',
    tags: [],
    imageUrl: 'https://images.unsplash.com/photo-1544253139-44be2ab84589?auto=format&fit=crop&q=80&w=1200',
    author: 'Admin',
    publishedDate: '2023-10-15T00:00:00Z',
    readingTime: 2,
    status: 'published'
  },
  {
    id: 'art-news-2',
    slug: 'saf-initiative',
    title: { en: 'Sustainable Aviation Fuel Initiative', vi: 'Sáng kiến Nhiên liệu Hàng không Bền vững' },
    excerpt: { en: 'Committing to a greener future with our new SAF program.', vi: 'Cam kết một tương lai xanh hơn với chương trình SAF mới của chúng tôi.' },
    content: {
      en: 'We are committing to a greener future with our new Sustainable Aviation Fuel (SAF) program. [Content to be written later]',
      vi: 'Chúng tôi cam kết một tương lai xanh hơn với chương trình Nhiên liệu Hàng không Bền vững (SAF) mới. [Nội dung sẽ được cập nhật sau]'
    },
    categoryId: 'cat-news',
    tags: [],
    imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1200',
    author: 'Admin',
    publishedDate: '2023-11-02T00:00:00Z',
    readingTime: 2,
    status: 'published'
  }
];
