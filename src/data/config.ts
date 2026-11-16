import { personalInfo } from './personal';

export const config = {
  title: 'John (Anh Tài) | Freelance Frontend Developer – React, Next.js, TypeScript',
  description: {
    short:
      'Mình là John, software engineer thiên về frontend ở Việt Nam. Mình biến ý tưởng thành web app, dashboard và website chạy tốt bằng React, Next.js và TypeScript. Đang nhận dự án freelance.',
    long: 'John (Anh Tài) is a frontend-focused software engineer in Vietnam who turns ideas into functional web experiences: web applications, dashboards and websites built with React, Next.js and TypeScript. Experience with ticketing, e-commerce and POS platforms. Available for freelance projects.',
  },
  keywords: [
    'kachitaro',
    'John Anh Tai',
    'Anh Tài',
    'Frontend Developer Vietnam',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Software Engineer',
    'Freelance Frontend Developer',
    'Freelance web developer Vietnam',
    'Web application development',
    'Dashboard development',
    'lập trình viên frontend',
    'Nexpando',
    'Nexbus',
    'Vnshop V2',
    'BANA',
    'Gopy',
    'Techbee Solutions',
    'Tailwind CSS',
  ],
  author: {
    name: 'John (Anh Tài)',
    url: 'https://github.com/kachitaro',
  },
  jobTitle: 'Software Engineer',
  worksFor: 'Nexpando',
  email: personalInfo.email,
  site: 'https://portfolio.gen-nex.tech',
  social: {
    github: personalInfo.socials.github,
    linkedin: personalInfo.socials.linkedin,
    email: personalInfo.socials.email,
  },
  /** Public profiles for search engines (JSON-LD sameAs); empty links are skipped. */
  get sameAs(): string[] {
    return [this.social.github, this.social.linkedin].filter(Boolean);
  },
};
