import { personalInfo } from './personal';

export const config = {
  title: 'John (Anh Tài) | Software Engineer @ Nexpando',
  description: {
    short:
      'Portfolio of John (Anh Tài) (@kachitaro) - Software Engineer at Nexpando specializing in React.js, Next.js, TypeScript, and high-performance Enterprise Web Platforms.',
    long: 'Explore enterprise projects, frontend engineering skills, and work experience by John (Anh Tài) - Software Engineer at Nexpando specializing in React.js, Next.js, TypeScript, and modern web applications.',
  },
  keywords: [
    'kachitaro',
    'John Anh Tai',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Nexpando',
    'Nexbus',
    'Vnshop V2',
    'BANA',
    'TypeScript',
    'Tailwind CSS',
    'RESTful APIs',
    'Techbee Solutions',
  ],
  author: {
    name: 'John (Anh Tài)',
    url: 'https://github.com/kachitaro',
  },
  email: personalInfo.email,
  site: 'https://kachitaro.vercel.app',
  social: {
    github: personalInfo.socials.github,
    email: personalInfo.socials.email,
  },
  get ogImg() {
    return `${this.site}/og-image.png`;
  },
};
