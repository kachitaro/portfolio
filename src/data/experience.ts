import { type IExperienceItem } from '@/types/portfolio';

export const experienceData: IExperienceItem[] = [
  {
    id: 'exp-1',
    start: '2023-02',
    period: {
      vi: 'Tháng 02/2023 - Hiện tại',
      en: 'Feb 2023 - Present',
    },
    duration: {
      vi: '3 năm 7 tháng',
      en: '3 yrs 7 mos',
    },
    role: {
      vi: 'Software Engineer',
      en: 'Software Engineer',
    },
    company: 'Nexpando',
    employmentType: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
    },
    workplaceType: {
      vi: 'Tại văn phòng, Việt Nam',
      en: 'On-site, Vietnam',
    },
    description: {
      vi: [
        'Xây dựng từ đầu các nền tảng web cho sản phẩm của Nexpando gồm Nexbus, Vnshop V2 (sản phẩm thương mại điện tử tích hợp trong app VNPAY) và BANA (nền tảng POS cho hộ kinh doanh cá thể và doanh nghiệp tại Việt Nam, đang chạy thử nghiệm) bằng React và TypeScript.',
        'Phát triển lớp core/base trên React-Admin và React Hook Form, tái sử dụng cho các màn hình quản trị, form và bảng dữ liệu. Xây dựng landing page bằng Next.js cho các đối tác của Nexbus và bằng Astro cho BANA.',
        'Triển khai các module tài chính, thanh toán QR, hóa đơn, ca làm việc, sổ cái và báo cáo doanh thu của BANA trong team 14 người (BE, FE, QC, Design) theo Agile/Scrum, làm việc theo ticket có phạm vi và tiêu chí hoàn thành rõ ràng, tích hợp RESTful API và Redux.',
      ],
      en: [
        "Built web platforms from scratch for Nexpando's products: Nexbus, Vnshop V2 (an e-commerce product embedded in the VNPAY app), and BANA (a POS platform for individual household businesses and enterprises in Vietnam, currently in pilot), using React and TypeScript.",
        'Developed core and base layers on React-Admin and React Hook Form, reused across modules to build admin and back-office screens, forms, and data tables. Built landing pages with Next.js for Nexbus partners and with Astro for BANA.',
        "Delivered BANA's finance, QR payment, invoicing, shift, ledger, and revenue-reporting modules in a 14-person Agile/Scrum team (BE, FE, QC, Design), working from tickets with defined scope and acceptance criteria and integrating RESTful APIs with Redux state management.",
      ],
    },
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Astro',
      'Redux',
      'React-Admin',
      'React Hook Form',
      'Tailwind CSS',
      'shadcn/ui',
      'RESTful API',
      'Vite',
    ],
  },
  {
    id: 'exp-2',
    start: '2022-07',
    end: '2023-01',
    period: {
      vi: 'Tháng 07/2022 - Tháng 01/2023',
      en: 'Jul 2022 - Jan 2023',
    },
    duration: {
      vi: '7 tháng',
      en: '7 mos',
    },
    role: {
      vi: 'Developer',
      en: 'Developer',
    },
    company: 'Techbee Solutions',
    employmentType: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
    },
    workplaceType: {
      vi: 'Việt Nam',
      en: 'Vietnam',
    },
    description: {
      vi: [
        'Xây dựng landing page cho khách hàng ngành y tế và tham gia phát triển một sản phẩm của công ty bằng React, Next.js, Tailwind CSS, shadcn/ui.',
        'Quản lý nội dung bằng Tina CMS và kết nối dữ liệu qua GraphQL.',
        'Chuyển thiết kế Figma và Adobe XD thành giao diện responsive trên desktop, tablet và mobile.',
      ],
      en: [
        "Built landing pages for healthcare clients and contributed to one of the company's own products, using React, Next.js, Tailwind CSS, and shadcn/ui.",
        'Managed page content with Tina CMS and connected data through GraphQL.',
        'Translated Figma and Adobe XD designs into responsive layouts across desktop, tablet, and mobile.',
      ],
    },
    skills: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Tina CMS', 'GraphQL', 'Figma', 'Adobe XD'],
  },
];
