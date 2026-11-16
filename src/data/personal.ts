import { type ISkillItem } from '@/types/portfolio';

export const personalInfo = {
  name: 'John (Anh Tài)',
  nickname: 'kachitaro',
  handle: '@kachitaro',
  avatar: 'https://github.com/kachitaro.png',
  email: 'anhtai.dev@gmail.com',
  location: {
    vi: 'Việt Nam 🇻🇳',
    en: 'Vietnam 🇻🇳',
  },
  level: {
    vi: 'Mid-level Frontend Developer',
    en: 'Mid-level Frontend Developer',
  },
  roles: {
    vi: [
      'Software Engineer @ Nexpando 💻',
      'Frontend / React.js Developer ⚡',
      'React, Next.js & TypeScript 🚀',
      'Growing & Learning Every Day 🌱',
    ],
    en: [
      'Software Engineer @ Nexpando 💻',
      'Frontend / React.js Developer ⚡',
      'React, Next.js & TypeScript 🚀',
      'Growing & Learning Every Day 🌱',
    ],
  },
  bio: {
    vi: 'Software Engineer thiên về Frontend tại Nexpando, hơn 3 năm xây dựng các nền tảng web production (Nexbus, Vnshop V2, BANA) bằng React, TypeScript và Next.js.',
    en: 'Frontend-focused Software Engineer at Nexpando with 3+ years building production web platforms (Nexbus, Vnshop V2, BANA) with React, TypeScript, and Next.js.',
  },
  aboutDetailed: {
    vi: {
      personalities: [
        '#FrontendDeveloper',
        '#ReactJS',
        '#TypeScript',
        '#ContinuousLearning',
        '#TeamPlayer',
      ],
      intro:
        'Xin chào! Mình là John (Anh Tài), hiện đang là Software Engineer tại Nexpando. Mình là Frontend Engineer với hơn 3 năm kinh nghiệm thực chiến. Tại Nexpando, mình xây dựng từ đầu các nền tảng web B2B như nền tảng bán vé Nexbus, Vnshop V2 (thương mại điện tử trong app VNPAY) và BANA (nền tảng POS cho hộ kinh doanh và doanh nghiệp). Mình viết lớp core/base trên React-Admin và React Hook Form để tái sử dụng giữa các module, làm việc trong team 14 người theo Agile/Scrum, chú trọng code rõ ràng và giao đúng tính năng được giao.',
      visionQuote:
        '“Không ngừng học hỏi mỗi ngày, viết code có trách nhiệm và luôn nỗ lực tạo ra sản phẩm mượt mà, chỉn chu từ từng dòng code nhỏ.”',
      funFacts: [
        { label: 'Kinh nghiệm thực tế', value: '3+ năm' },
        { label: 'Giờ lập trình', value: '~4,000+ giờ' },
        { label: 'Dự án doanh nghiệp', value: '3 dự án' },
        { label: 'Kho lưu trữ GitHub', value: '25+' },
        { label: 'Git Commits', value: '~1,500+' },
        { label: 'Bugs đã xử lý', value: '~600+' },
        { label: 'Tinh thần học hỏi', value: '100%' },
        { label: 'Trà & Cà phê', value: 'Mỗi ngày ☕' },
      ],
      highlights: [
        {
          title: 'Kinh nghiệm Dự án Doanh nghiệp Thực tế',
          desc: 'Trực tiếp tham gia phát triển các tính năng và module giao diện trong các dự án thật: Nexbus, Vnshop V2 và BANA.',
        },
        {
          title: 'Vận dụng React.js, TypeScript & Tailwind CSS',
          desc: 'Chuyển đổi bản thiết kế Figma thành giao diện web responsive, chuẩn pixel-perfect và tái sử dụng component linh hoạt.',
        },
        {
          title: 'Tích hợp RESTful API & Quản lý State',
          desc: 'Kết nối API backend mượt mà, xử lý luồng dữ liệu client với Zustand/Redux và tối ưu trải nghiệm người dùng.',
        },
      ],
    },
    en: {
      personalities: [
        '#FrontendDeveloper',
        '#ReactJS',
        '#TypeScript',
        '#ContinuousLearning',
        '#TeamPlayer',
      ],
      intro:
        "Hi there! I'm John (Anh Tai), currently a Software Engineer at Nexpando. I'm a frontend engineer with 3+ years of production experience. At Nexpando I built B2B web platforms from scratch: the Nexbus ticketing platform, Vnshop V2 (e-commerce inside the VNPAY app), and BANA (a POS platform for household businesses and enterprises). I wrote the core/base layer on React-Admin and React Hook Form that the modules reuse, work in a 14-person Agile/Scrum team, and care about clear code and reliable delivery.",
      visionQuote:
        '"Learn continuously every day, write responsible code, and take pride in crafting smooth, reliable user experiences from every small detail."',
      funFacts: [
        { label: 'Production Experience', value: '3+ Years' },
        { label: 'Coding Hours', value: '~4,000+ hrs' },
        { label: 'Enterprise Projects', value: '3 Projects' },
        { label: 'GitHub Repos', value: '15+' },
        { label: 'Git Commits', value: '~1,500+' },
        { label: 'Issues Resolved', value: '~600+' },
        { label: 'Growth Mindset', value: '100%' },
        { label: 'Daily Coffee', value: 'Daily ☕' },
      ],
      highlights: [
        {
          title: 'Hands-on Production Experience',
          desc: 'Actively contributing to enterprise web modules and user interfaces for Nexbus, Vnshop V2, and BANA.',
        },
        {
          title: 'Practical React.js, TypeScript & Tailwind CSS',
          desc: 'Translating Figma designs into responsive, pixel-perfect web interfaces with modular reusable components.',
        },
        {
          title: 'RESTful API & State Integration',
          desc: 'Connecting frontend clients with backend endpoints, managing state flows via Zustand/Redux, and handling form validations.',
        },
      ],
    },
  },
  services: {
    vi: [
      {
        title: 'Frontend UI Development',
        desc: 'Xây dựng giao diện Web tương tác cao, responsive và mượt mà với React.js & Next.js.',
      },
      {
        title: 'Figma to Clean Code',
        desc: 'Chuyển đổi thiết kế từ Figma sang mã nguồn Tailwind CSS chuẩn xác từng chi tiết.',
      },
      {
        title: 'RESTful API Integration',
        desc: 'Kết nối và xử lý dữ liệu với hệ thống Backend, xử lý phân trang, tìm kiếm và authentication.',
      },
      {
        title: 'Bug Fixing & UI Maintenance',
        desc: 'Bảo trì, sửa lỗi giao diện, tối ưu độ mượt và cải thiện trải nghiệm người dùng.',
      },
    ],
    en: [
      {
        title: 'Frontend UI Development',
        desc: 'Building responsive, interactive web interfaces with React.js and Next.js.',
      },
      {
        title: 'Figma to Clean Code',
        desc: 'Converting Figma mockups into clean, responsive Tailwind CSS & React code.',
      },
      {
        title: 'RESTful API Integration',
        desc: 'Connecting endpoints, handling asynchronous data flows, pagination, and authentication.',
      },
      {
        title: 'Bug Fixing & UI Maintenance',
        desc: 'Maintaining web pages, fixing layout issues, and polishing user interactions.',
      },
    ],
  },
  socials: {
    github: 'https://github.com/kachitaro',
    linkedin: 'https://www.linkedin.com/in/john-nguy%E1%BB%85n/',
    email: 'mailto:anhtai.dev@gmail.com',
  },
};

export const skillsData: ISkillItem[] = [
  // Frontend Core (Vững vàng & làm việc hàng ngày)
  { name: 'HTML5 / Responsive UI', level: 88, category: 'frontend', icon: 'html' },
  { name: 'Tailwind CSS / CSS3', level: 85, category: 'frontend', icon: 'tailwind' },
  { name: 'JavaScript (ES6+)', level: 82, category: 'frontend', icon: 'js' },
  { name: 'React.js', level: 80, category: 'frontend', icon: 'react' },
  { name: 'TypeScript', level: 75, category: 'frontend', icon: 'ts' },
  { name: 'Next.js (App Router)', level: 72, category: 'frontend', icon: 'nextjs' },
  { name: 'State Management (Zustand / Redux)', level: 70, category: 'frontend', icon: 'redux' },

  // Backend & Database (Hiểu luồng & làm việc phối hợp)
  { name: 'RESTful API Integration', level: 78, category: 'backend', icon: 'postman' },
  { name: 'Node.js / Express (Basic)', level: 65, category: 'backend', icon: 'nodejs' },
  { name: 'PostgreSQL / Prisma (Basic)', level: 60, category: 'database', icon: 'postgres' },
  { name: 'MongoDB (Basic)', level: 60, category: 'database', icon: 'mongodb' },

  // Tools & Workflow (Thành thạo công cụ hằng ngày)
  { name: 'Git / GitHub Workflow', level: 80, category: 'tools', icon: 'git' },
  { name: 'VS Code & Web DevTools', level: 85, category: 'tools', icon: 'vscode' },
  { name: 'Vite & Build Tools', level: 75, category: 'tools', icon: 'vite' },
  { name: 'Docker (Basic usage)', level: 60, category: 'tools', icon: 'docker' },
];

export const toolchainGroups = [
  {
    category: { vi: 'Ngôn ngữ & Cốt lõi', en: 'Languages & Core' },
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'SCSS'],
  },
  {
    category: { vi: 'Frameworks & UI', en: 'Frameworks & UI' },
    items: ['React.js', 'Next.js (App Router)', 'Tailwind CSS', 'shadcn/ui', 'Radix UI'],
  },
  {
    category: { vi: 'State & API Data Flow', en: 'State & API Data Flow' },
    items: ['Zustand', 'Redux Toolkit', 'Axios', 'RESTful API', 'JWT Authentication'],
  },
  {
    category: { vi: 'Công cụ & Làm việc nhóm', en: 'Tools & Workflow' },
    items: ['Git / GitHub', 'VS Code', 'Chrome DevTools', 'Postman', 'Vite', 'Docker (Basic)'],
  },
];
