import { personalInfo } from './personal';

export const config = {
  title: 'John (Anh Tài) | Frontend Developer – React, Next.js, TypeScript',
  description: {
    short:
      'John (Anh Tài, @kachitaro) – Software Engineer tại Nexpando, chuyên frontend với React, Next.js và TypeScript. Xem dự án Nexbus, Vnshop V2, BANA, Gopy CSR Portal và nhận việc freelance.',
    long: 'Portfolio of John (Anh Tài), a frontend-focused Software Engineer at Nexpando building production web apps with React.js, Next.js and TypeScript: the Nexbus ticketing platform, the Vnshop V2 marketplace, BANA and the Gopy CSR admin portal. Open to freelance work.',
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
