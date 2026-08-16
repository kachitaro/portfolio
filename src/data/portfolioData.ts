import { Project, SkillItem, ExperienceItem } from '@/types/portfolio';

export const personalInfo = {
  name: 'John (Anh Tài)',
  nickname: 'Kachitaro',
  handle: '@Kachitaro',
  avatar: 'https://github.com/Kachitaro.png',
  email: 'anhtai.dev@gmail.com',
  location: {
    vi: 'Việt Nam 🇻🇳',
    en: 'Vietnam 🇻🇳'
  },
  level: {
    vi: 'Junior+ / Mid-level Developer',
    en: 'Junior+ / Mid-level Developer'
  },
  roles: {
    vi: [
      'Software Engineer @ Nexpando 💻',
      'Frontend / React.js Developer ⚡',
      'Next.js & TypeScript Enthusiast 🚀',
      'Growing & Learning Every Day 🌱'
    ],
    en: [
      'Software Engineer @ Nexpando 💻',
      'Frontend / React.js Developer ⚡',
      'Next.js & TypeScript Enthusiast 🚀',
      'Growing & Learning Every Day 🌱'
    ]
  },
  bio: {
    vi: 'Kỹ sư phần mềm (Software Engineer) tại Nexpando đang trên lộ trình phát triển từ Junior lên Mid-level. Tập trung chuyên sâu vào lập trình Frontend với React.js, TypeScript, Tailwind CSS và Next.js trong các dự án thực tế.',
    en: 'Software Engineer at Nexpando on the journey from Junior to Mid-level. Focused on Frontend engineering with React.js, TypeScript, Tailwind CSS, and Next.js in production environments.'
  },
  aboutDetailed: {
    vi: {
      personalities: ['#FrontendDeveloper', '#ReactJS', '#TypeScript', '#ContinuousLearning', '#TeamPlayer'],
      intro: 'Xin chào! Mình là John (Anh Tài), hiện đang là Software Engineer tại Nexpando. Mình là một lập trình viên ở giai đoạn giữa Junior và Mid-level, với thế mạnh chính về mảng Frontend. Trong quá trình làm việc tại Nexpando và Techbee Solutions, mình trực tiếp tham gia xây dựng và bảo trì giao diện người dùng cho các hệ thống như nền tảng bán vé Nexbus, sàn thương mại điện tử Vnshop V2 và dự án mới BANA. Mình luôn trân trọng cơ hội được học hỏi từ các anh Senior/Tech Lead trong team, chú trọng viết code rõ ràng, tuân thủ convention và hoàn thành tốt các tính năng được giao.',
      visionQuote: '“Không ngừng học hỏi mỗi ngày, viết code có trách nhiệm và luôn nỗ lực tạo ra sản phẩm mượt mà, chỉn chu từ từng dòng code nhỏ.”',
      funFacts: [
        { label: 'Kinh nghiệm thực tế', value: '3+ năm' },
        { label: 'Giờ lập trình', value: '~4,000+ giờ' },
        { label: 'Dự án doanh nghiệp', value: '3 dự án' },
        { label: 'Kho lưu trữ GitHub', value: '25+' },
        { label: 'Git Commits', value: '~1,500+' },
        { label: 'Bugs đã xử lý', value: '~600+' },
        { label: 'Tinh thần học hỏi', value: '100%' },
        { label: 'Trà & Cà phê', value: 'Mỗi ngày ☕' }
      ],
      highlights: [
        {
          title: 'Kinh nghiệm Dự án Doanh nghiệp Thực tế',
          desc: 'Trực tiếp tham gia phát triển các tính năng và module giao diện trong các dự án thật: Nexbus, Vnshop V2 và BANA.'
        },
        {
          title: 'Vận dụng React.js, TypeScript & Tailwind CSS',
          desc: 'Chuyển đổi bản thiết kế Figma thành giao diện web responsive, chuẩn pixel-perfect và tái sử dụng component linh hoạt.'
        },
        {
          title: 'Tích hợp RESTful API & Quản lý State',
          desc: 'Kết nối API backend mượt mà, xử lý luồng dữ liệu client với Zustand/Redux và tối ưu trải nghiệm người dùng.'
        }
      ]
    },
    en: {
      personalities: ['#FrontendDeveloper', '#ReactJS', '#TypeScript', '#ContinuousLearning', '#TeamPlayer'],
      intro: "Hi there! I'm John (Anh Tai), currently a Software Engineer at Nexpando. I'm a developer positioned between Junior+ and Mid-level with a primary focus on Frontend engineering. Through my hands-on work at Nexpando and Techbee Solutions, I have contributed to building and maintaining user interfaces for platforms like Nexbus ticketing, Vnshop V2 e-commerce, and the ongoing BANA project. I always strive to learn best practices from Seniors and Tech Leads, maintain clean code standards, and deliver reliable features.",
      visionQuote: '"Learn continuously every day, write responsible code, and take pride in crafting smooth, reliable user experiences from every small detail."',
      funFacts: [
        { label: 'Production Experience', value: '3+ Years' },
        { label: 'Coding Hours', value: '~4,000+ hrs' },
        { label: 'Enterprise Projects', value: '3 Projects' },
        { label: 'GitHub Repos', value: '25+' },
        { label: 'Git Commits', value: '~1,500+' },
        { label: 'Issues Resolved', value: '~600+' },
        { label: 'Growth Mindset', value: '100%' },
        { label: 'Daily Coffee', value: 'Daily ☕' }
      ],
      highlights: [
        {
          title: 'Hands-on Production Experience',
          desc: 'Actively contributing to enterprise web modules and user interfaces for Nexbus, Vnshop V2, and BANA.'
        },
        {
          title: 'Practical React.js, TypeScript & Tailwind CSS',
          desc: 'Translating Figma designs into responsive, pixel-perfect web interfaces with modular reusable components.'
        },
        {
          title: 'RESTful API & State Integration',
          desc: 'Connecting frontend clients with backend endpoints, managing state flows via Zustand/Redux, and handling form validations.'
        }
      ]
    }
  },
  services: {
    vi: [
      { title: 'Frontend UI Development', desc: 'Xây dựng giao diện Web tương tác cao, responsive và mượt mà với React.js & Next.js.' },
      { title: 'Figma to Clean Code', desc: 'Chuyển đổi thiết kế từ Figma sang mã nguồn Tailwind CSS chuẩn xác từng chi tiết.' },
      { title: 'RESTful API Integration', desc: 'Kết nối và xử lý dữ liệu với hệ thống Backend, xử lý phân trang, tìm kiếm và authentication.' },
      { title: 'Bug Fixing & UI Maintenance', desc: 'Bảo trì, sửa lỗi giao diện, tối ưu độ mượt và cải thiện trải nghiệm người dùng.' }
    ],
    en: [
      { title: 'Frontend UI Development', desc: 'Building responsive, interactive web interfaces with React.js and Next.js.' },
      { title: 'Figma to Clean Code', desc: 'Converting Figma mockups into clean, responsive Tailwind CSS & React code.' },
      { title: 'RESTful API Integration', desc: 'Connecting endpoints, handling asynchronous data flows, pagination, and authentication.' },
      { title: 'Bug Fixing & UI Maintenance', desc: 'Maintaining web pages, fixing layout issues, and polishing user interactions.' }
    ]
  },
  socials: {
    github: 'https://github.com/Kachitaro',
    email: 'mailto:anhtai.dev@gmail.com',
  }
};

export const skillsData: SkillItem[] = [
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
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'SCSS']
  },
  {
    category: { vi: 'Frameworks & UI', en: 'Frameworks & UI' },
    items: ['React.js', 'Next.js (App Router)', 'Tailwind CSS', 'shadcn/ui', 'Radix UI']
  },
  {
    category: { vi: 'State & API Data Flow', en: 'State & API Data Flow' },
    items: ['Zustand', 'Redux Toolkit', 'Axios', 'RESTful API', 'JWT Authentication']
  },
  {
    category: { vi: 'Công cụ & Làm việc nhóm', en: 'Tools & Workflow' },
    items: ['Git / GitHub', 'VS Code', 'Chrome DevTools', 'Postman', 'Vite', 'Docker (Basic)']
  }
];

export const projectsData: Project[] = [
  {
    id: 'project-bana',
    title: {
      vi: 'Dự án BANA',
      en: 'BANA Platform'
    },
    company: 'Nexpando',
    projectType: 'enterprise',
    status: {
      vi: 'Đang phát triển (Active Development)',
      en: 'Active Development'
    },
    description: {
      vi: 'Dự án mới hiện tại đang được nghiên cứu và phát triển tại Nexpando. Đảm nhiệm vai trò lập trình viên Frontend, xây dựng các module giao diện người dùng tương tác cao bằng React.js, Next.js và TypeScript theo yêu cầu thiết kế.',
      en: 'Current ongoing enterprise project at Nexpando. Contributing as a Frontend Developer building interactive UI modules with React.js, Next.js, and TypeScript according to specifications.'
    },
    category: 'enterprise',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'RESTful API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: {
      vi: [
        'Tham gia phát triển các phân hệ giao diện trong dự án mới tại Nexpando',
        'Áp dụng React.js / Next.js để dựng component giao diện tái sử dụng',
        'Phối hợp cùng team để kết nối các luồng dữ liệu API backend'
      ],
      en: [
        'Contributing to new UI modules and features at Nexpando',
        'Implementing reusable component structures using React.js / Next.js',
        'Collaborating with teammates to integrate backend API endpoints'
      ]
    }
  },
  {
    id: 'project-nexbus',
    title: {
      vi: 'Hệ thống Bán vé Trực tuyến Nexbus',
      en: 'Nexbus Online Ticketing Platform'
    },
    company: 'Nexpando',
    projectType: 'enterprise',
    status: {
      vi: 'Đã triển khai (In Production)',
      en: 'In Production'
    },
    description: {
      vi: 'Hệ thống website phục vụ nghiệp vụ tìm kiếm chuyến xe, chọn ghế ngồi theo thời gian thực và đặt vé trực tuyến. Tham gia phát triển giao diện người dùng, tối ưu luồng thao tác và kết nối API hệ thống.',
      en: 'Production web ticketing platform designed for journey schedule searching, interactive seat selection, and online booking. Contributed to building frontend workflows and API integrations.'
    },
    category: 'enterprise',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'State Management', 'REST API'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: {
      vi: [
        'Xây dựng giao diện tìm kiếm tuyến đường và sơ đồ chọn ghế ngồi trực quan',
        'Phát triển luồng điền thông tin hành khách và xác nhận đặt chỗ',
        'Đảm bảo giao diện hiển thị mượt mà trên cả máy tính và điện thoại'
      ],
      en: [
        'Built interactive trip searching and visual seat selection layout',
        'Developed passenger information checkout form and booking confirmation',
        'Ensured responsive rendering across both desktop and mobile screens'
      ]
    }
  },
  {
    id: 'project-vnshop-v2',
    title: {
      vi: 'Sàn Thương mại Điện tử Vnshop V2',
      en: 'Vnshop V2 E-Commerce Platform'
    },
    company: 'Nexpando',
    projectType: 'enterprise',
    status: {
      vi: 'Đã triển khai (In Production)',
      en: 'In Production'
    },
    description: {
      vi: 'Phiên bản V2 của nền tảng thương mại điện tử Vnshop. Tham gia phát triển và tinh chỉnh giao diện hiển thị danh mục sản phẩm, tối ưu giỏ hàng và nâng cao độ mượt khi người dùng duyệt trang.',
      en: 'V2 upgrade of Vnshop e-commerce platform. Contributed to developing product catalog interfaces, shopping cart flow, and improving overall UI responsiveness.'
    },
    category: 'enterprise',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'RESTful API'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: {
      vi: [
        'Phát triển các component danh mục sản phẩm và bộ lọc tìm kiếm',
        'Cải thiện hiệu năng render giao diện và thời gian phản hồi thao tác',
        'Xử lý cập nhật số lượng giỏ hàng và đồng bộ state phía client'
      ],
      en: [
        'Developed product listing components and multi-attribute filter UI',
        'Improved UI render responsiveness and client-side interaction flow',
        'Handled cart item quantities and state synchronization on client'
      ]
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: {
      vi: 'Tháng 02/2023 - Hiện tại',
      en: 'Feb 2023 - Present'
    },
    duration: {
      vi: '3 năm 7 tháng',
      en: '3 yrs 7 mos'
    },
    role: {
      vi: 'Software Engineer (Kỹ sư phần mềm)',
      en: 'Software Engineer'
    },
    company: 'Nexpando',
    employmentType: {
      vi: 'Full-time (Toàn thời gian)',
      en: 'Full-time'
    },
    workplaceType: {
      vi: 'Việt Nam · On-site (Tại văn phòng)',
      en: 'Vietnam · On-site'
    },
    description: {
      vi: 'Tham gia đội ngũ phát triển các hệ thống phần mềm web của công ty (Nexbus, Vnshop V2, BANA). Trực tiếp lập trình các phân hệ giao diện người dùng bằng React.js, Next.js và TypeScript; kết nối tích hợp các RESTful APIs và phối hợp chặt chẽ cùng các thành viên trong team để hoàn thành sprint đúng tiến độ.',
      en: 'Working as a software engineer on production web applications (Nexbus, Vnshop V2, BANA). Developing frontend UI modules with React.js, Next.js, and TypeScript; integrating RESTful APIs and collaborating closely with teammates in agile sprints.'
    },
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'RESTful API', 'Git', 'Zustand / Redux']
  },
  {
    id: 'exp-2',
    period: {
      vi: 'Tháng 07/2022 - Tháng 01/2023',
      en: 'Jul 2022 - Jan 2023'
    },
    duration: {
      vi: '7 tháng',
      en: '7 mos'
    },
    role: {
      vi: 'Developer (Lập trình viên)',
      en: 'Developer'
    },
    company: 'Techbee Solutions',
    employmentType: {
      vi: 'Full-time (Toàn thời gian)',
      en: 'Full-time'
    },
    workplaceType: {
      vi: 'Việt Nam',
      en: 'Vietnam'
    },
    description: {
      vi: 'Phát triển giao diện người dùng cho các ứng dụng web với React.js. Chuyển đổi bản vẽ thiết kế Figma thành mã nguồn giao diện chuẩn chỉ, kết nối API và tối ưu hiển thị trên các kích thước màn hình.',
      en: 'Developed responsive user interfaces for web applications using React.js. Translated Figma designs into clean UI code, integrated REST APIs, and ensured responsive cross-browser layouts.'
    },
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'REST API', 'Git', 'Responsive Design']
  }
];
