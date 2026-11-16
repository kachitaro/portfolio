import { type TInquiryTopic, type TLocalized } from '@/types/portfolio';

/**
 * Copy for the freelance-facing sections. Nothing here claims clients, reviews, metrics or
 * outcomes; every service is backed by work shown in the case studies or the experience.
 */

export const availability: TLocalized = {
  vi: 'Đang nhận dự án freelance',
  en: 'Available for freelance projects',
};

export interface IService {
  id: TInquiryTopic;
  title: TLocalized;
  desc: TLocalized;
  /** Work on this site that shows the service, so it is never a bare claim. */
  proof: TLocalized;
}

export const servicesData: IService[] = [
  {
    id: 'web-app',
    title: { vi: 'Web app và dashboard', en: 'Web apps and dashboards' },
    desc: {
      vi: 'Trang quản trị, công cụ nội bộ và những màn hình nhiều dữ liệu bằng React và TypeScript: form, bảng, bộ lọc và mọi trạng thái ở giữa.',
      en: 'Admin panels, internal tools and data-heavy screens in React and TypeScript: forms, tables, filters and every state in between.',
    },
    proof: { vi: 'Xem BANA và Gopy ở phần dự án.', en: 'See BANA and Gopy under Selected work.' },
  },
  {
    id: 'website',
    title: { vi: 'Website và landing page', en: 'Websites and landing pages' },
    desc: {
      vi: 'Website giới thiệu và landing page bằng Next.js hoặc Astro: tải nhanh, responsive và nói rõ bạn muốn khách làm gì tiếp theo.',
      en: 'Marketing sites and landing pages in Next.js or Astro: quick to load, responsive, and clear about what you want visitors to do next.',
    },
    proof: {
      vi: 'Mình đã dựng landing page cho đối tác Nexbus và cho BANA.',
      en: "I've built landing pages for Nexbus partners and for BANA.",
    },
  },
  {
    id: 'design-to-code',
    title: { vi: 'Từ thiết kế ra code', en: 'Design to code' },
    desc: {
      vi: 'Biến bản thiết kế Figma hoặc Adobe XD thành component responsive, sát với thiết kế và dùng được bằng bàn phím.',
      en: 'Turning Figma or Adobe XD designs into responsive components that match the design and work from the keyboard.',
    },
    proof: {
      vi: 'Hai website nha khoa dựng lại từ file XD gốc.',
      en: 'Two dental sites rebuilt from their original XD files.',
    },
  },
  {
    id: 'api',
    title: { vi: 'Kết nối API', en: 'API integration' },
    desc: {
      vi: 'Nối frontend với backend REST hoặc GraphQL: đăng nhập, phân trang, tìm kiếm, form và quản lý state phía client.',
      en: 'Connecting a frontend to REST or GraphQL backends: authentication, pagination, search, forms and client-side state.',
    },
    proof: { vi: 'Việc mình làm hằng ngày ở Nexpando.', en: 'My day-to-day work at Nexpando.' },
  },
  {
    id: 'maintenance',
    title: { vi: 'Sửa lỗi và nâng cấp frontend', en: 'Frontend fixes and upgrades' },
    desc: {
      vi: 'Sửa lỗi giao diện, dọn code, tinh chỉnh trải nghiệm và hiệu năng cho một frontend đã có sẵn.',
      en: 'Bug fixes, code tidy-ups, UX polish and performance work on a frontend that already exists.',
    },
    proof: {
      vi: 'Phù hợp khi bạn không cần làm lại từ đầu.',
      en: "A good fit when you don't need a rewrite.",
    },
  },
];

export interface IStep {
  title: TLocalized;
  desc: TLocalized;
}

export const processData: IStep[] = [
  {
    title: { vi: 'Trao đổi', en: 'Talk' },
    desc: {
      vi: 'Mình hỏi về mục tiêu, người dùng và những điều đã cố định (thời hạn, ngân sách, công nghệ hiện có). Nếu mình không phù hợp, mình sẽ nói thẳng.',
      en: "We talk through the goal, who will use it, and what's already fixed (deadline, budget, existing stack). If I'm not the right fit, I'll say so.",
    },
  },
  {
    title: { vi: 'Thống nhất phạm vi', en: 'Agree the scope' },
    desc: {
      vi: 'Mình viết ra cái gì nằm trong dự án, cái gì không, và khi nào được coi là xong, trước khi bắt tay vào làm.',
      en: 'I write down what is in, what is out and how we will know it is done, before building anything.',
    },
  },
  {
    title: { vi: 'Làm từng phần nhỏ', en: 'Build in small pieces' },
    desc: {
      vi: 'Mình làm theo từng phần nhỏ chạy được để bạn mở ra xem và góp ý sớm, bằng code TypeScript rõ ràng, dễ bảo trì.',
      en: 'I build in small, working pieces you can open and comment on early, in clear, maintainable TypeScript.',
    },
  },
  {
    title: { vi: 'Bàn giao', en: 'Hand over' },
    desc: {
      vi: 'Bạn nhận code và phần bàn giao rõ ràng. Nếu cần hỗ trợ sau khi ra mắt, chúng ta thống nhất trước.',
      en: 'You get the code and a clear handover. If you need support after launch, we agree on it up front.',
    },
  },
];

export const aboutData = {
  paragraphs: {
    vi: [
      'Mình là John (Anh Tài), software engineer ở Việt Nam, thiên về frontend. Từ năm 2022 mình dựng các sản phẩm web: bán vé, thương mại điện tử, POS và công cụ quản trị, phần lớn cho doanh nghiệp.',
      'Mình thích những việc mà giao diện phải gánh một quy trình thật, như biểu mẫu, tiền hay lịch, và vẫn dễ dùng. Với mình, kỹ thuật tốt nghĩa là code dễ đọc, cấu trúc hợp lý và giao diện mà người dùng không phải nghĩ nhiều.',
      'Ban ngày mình làm ở Nexpando. Song song, mình nhận dự án freelance cho những người cần một người làm frontend cẩn thận.',
    ],
    en: [
      "I'm John (Anh Tài), a software engineer in Vietnam focused on the frontend. Since 2022 I've been building web products: ticketing, e-commerce, POS and admin tools, mostly for businesses.",
      'I like work where the interface has to carry a real workflow, like forms, money or schedules, and still be pleasant to use. To me, good engineering means readable code, sensible structure and interfaces people do not have to think about.',
      'I work at Nexpando during the week. Alongside that, I take on freelance projects for people who need a careful frontend engineer.',
    ],
  },
  facts: {
    vi: [
      { label: 'Ở đâu', value: 'Việt Nam (GMT+7)' },
      { label: 'Làm frontend từ', value: '2022' },
      { label: 'Hiện tại', value: 'Nexpando, và nhận freelance' },
    ],
    en: [
      { label: 'Based in', value: 'Vietnam (GMT+7)' },
      { label: 'Frontend since', value: '2022' },
      { label: 'Now', value: 'Nexpando, and open to freelance' },
    ],
  },
};

export const stackIntro: TLocalized = {
  vi: 'Những công cụ mình dùng hằng ngày để dựng và bảo trì giao diện web.',
  en: 'The tools I use every day to build and maintain web interfaces.',
};

export interface IInquiryTopic {
  id: TInquiryTopic;
  label: TLocalized;
}

export const inquiryTopics: IInquiryTopic[] = [
  { id: 'web-app', label: { vi: 'Web app / dashboard', en: 'Web app / dashboard' } },
  { id: 'website', label: { vi: 'Website / landing page', en: 'Website / landing page' } },
  { id: 'design-to-code', label: { vi: 'Thiết kế ra code', en: 'Design to code' } },
  { id: 'api', label: { vi: 'Kết nối API', en: 'API integration' } },
  { id: 'maintenance', label: { vi: 'Sửa lỗi / nâng cấp', en: 'Fixes / upgrades' } },
  { id: 'other', label: { vi: 'Việc khác', en: 'Something else' } },
];
