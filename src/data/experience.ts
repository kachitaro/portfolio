import { type IExperienceItem } from '@/types/portfolio';

export const experienceData: IExperienceItem[] = [
  {
    id: 'exp-1',
    period: {
      vi: 'Tháng 02/2023 - Hiện tại',
      en: 'Feb 2023 - Present',
    },
    duration: {
      vi: '3 năm 7 tháng',
      en: '3 yrs 7 mos',
    },
    role: {
      vi: 'Software Engineer (Kỹ sư phần mềm)',
      en: 'Software Engineer',
    },
    company: 'Nexpando',
    employmentType: {
      vi: 'Full-time (Toàn thời gian)',
      en: 'Full-time',
    },
    workplaceType: {
      vi: 'Việt Nam · On-site (Tại văn phòng)',
      en: 'Vietnam · On-site',
    },
    description: {
      vi: 'Tham gia đội ngũ phát triển các hệ thống phần mềm web của công ty (Nexbus, Vnshop V2, BANA). Trực tiếp lập trình các phân hệ giao diện người dùng bằng React.js, Next.js và TypeScript; kết nối tích hợp các RESTful APIs và phối hợp chặt chẽ cùng các thành viên trong team để hoàn thành sprint đúng tiến độ.',
      en: 'Working as a software engineer on production web applications (Nexbus, Vnshop V2, BANA). Developing frontend UI modules with React.js, Next.js, and TypeScript; integrating RESTful APIs and collaborating closely with teammates in agile sprints.',
    },
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'RESTful API',
      'Git',
      'Zustand / Redux',
    ],
  },
  {
    id: 'exp-2',
    period: {
      vi: 'Tháng 07/2022 - Tháng 01/2023',
      en: 'Jul 2022 - Jan 2023',
    },
    duration: {
      vi: '7 tháng',
      en: '7 mos',
    },
    role: {
      vi: 'Developer (Lập trình viên)',
      en: 'Developer',
    },
    company: 'Techbee Solutions',
    employmentType: {
      vi: 'Full-time (Toàn thời gian)',
      en: 'Full-time',
    },
    workplaceType: {
      vi: 'Việt Nam',
      en: 'Vietnam',
    },
    description: {
      vi: 'Phát triển giao diện người dùng cho các ứng dụng web với React.js. Chuyển đổi bản vẽ thiết kế Figma thành mã nguồn giao diện chuẩn chỉ, kết nối API và tối ưu hiển thị trên các kích thước màn hình.',
      en: 'Developed responsive user interfaces for web applications using React.js. Translated Figma designs into clean UI code, integrated REST APIs, and ensured responsive cross-browser layouts.',
    },
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'REST API',
      'Git',
      'Responsive Design',
    ],
  },
];
