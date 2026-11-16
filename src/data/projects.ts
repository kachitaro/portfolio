import { type IProject } from '@/types/portfolio';

/**
 * Case studies. Rules for this file: only facts already stated on the portfolio, no client
 * figures or outcomes, and no implementation detail that belongs to an employer.
 */
export const projectsData: IProject[] = [
  {
    id: 'project-bana',
    title: { vi: 'BANA, nền tảng POS', en: 'BANA, a POS platform' },
    role: { vi: 'Frontend engineer tại Nexpando', en: 'Frontend engineer at Nexpando' },
    overview: {
      vi: 'Nền tảng POS cho hộ kinh doanh cá thể và doanh nghiệp tại Việt Nam: bán hàng, thanh toán, hóa đơn và theo dõi tài chính.',
      en: 'A point-of-sale platform for individual household businesses and enterprises in Vietnam: selling, payments, invoicing and financial tracking.',
    },
    context: {
      vi: 'Người bán cần một nơi để bán hàng, nhận tiền và biết tiền đi đâu về đâu. BANA do một team 14 người (backend, frontend, QC, design) xây dựng.',
      en: 'Merchants need one place to sell, take payment and see where their money goes. BANA is built by a 14-person team (backend, frontend, QC, design).',
    },
    contribution: {
      vi: [
        'Dựng frontend từ đầu cho các module tài chính, thanh toán QR, hóa đơn, ca làm việc, sổ cái và báo cáo doanh thu.',
        'Viết lớp core/base trên React-Admin và React Hook Form để các module dùng chung cách làm form, bảng dữ liệu và resource.',
        'Dựng landing page của BANA bằng Astro.',
      ],
      en: [
        'Built the frontend from scratch for the finance, QR payment, invoicing, shift, ledger and revenue-reporting modules.',
        'Wrote the core/base layer on React-Admin and React Hook Form that these modules share for forms, data tables and resources.',
        "Built BANA's landing page in Astro.",
      ],
    },
    team: {
      vi: 'Backend, QC và thiết kế do các thành viên khác trong team đảm nhận. Công việc chạy theo sprint Agile/Scrum, từ ticket có phạm vi và tiêu chí hoàn thành rõ ràng.',
      en: 'Backend, QA and design were handled by other team members. Work ran in Agile/Scrum sprints, from tickets with defined scope and acceptance criteria.',
    },
    highlights: {
      vi: [
        'Một lớp nền chung để màn hình quản trị mới tái sử dụng cùng cách xử lý form, bảng và kiểm tra dữ liệu',
        'Các màn hình liên quan đến tiền (thanh toán, sổ cái, báo cáo) cần hiển thị chính xác và nhập liệu rõ ràng',
        'TypeScript xuyên suốt, giao diện dựng bằng Tailwind CSS và shadcn/ui, trạng thái phía client quản lý bằng Redux',
      ],
      en: [
        'A shared base so new back-office screens reuse the same form, table and validation behavior',
        'Money-related screens (payments, ledger, reports) that need precise data display and clear input',
        'TypeScript throughout, UI on Tailwind CSS and shadcn/ui, client state managed with Redux',
      ],
    },
    tags: [
      'React',
      'TypeScript',
      'Redux',
      'React-Admin',
      'React Hook Form',
      'Tailwind CSS',
      'shadcn/ui',
      'Astro',
    ],
    topic: 'web-app',
  },
  {
    id: 'project-vnshop-v2',
    title: {
      vi: 'Vnshop V2, thương mại điện tử trong app VNPAY',
      en: 'Vnshop V2, e-commerce inside the VNPAY app',
    },
    role: { vi: 'Frontend engineer tại Nexpando', en: 'Frontend engineer at Nexpando' },
    overview: {
      vi: 'Phiên bản V2 của Vnshop, sản phẩm thương mại điện tử B2B tích hợp trong app VNPAY.',
      en: 'The V2 of Vnshop, a B2B e-commerce product embedded in the VNPAY app.',
    },
    context: {
      vi: 'Người dùng duyệt danh mục, lọc sản phẩm và đưa vào giỏ hàng ngay trong app VNPAY, nên giao diện phải nhanh và rõ ràng ngay từ lần chạm đầu tiên.',
      en: 'Shoppers browse a catalog, filter products and add to cart without leaving the VNPAY app, so the interface has to be quick and clear from the first tap.',
    },
    contribution: {
      vi: [
        'Dựng frontend từ đầu bằng React và TypeScript.',
        'Làm các component danh mục sản phẩm và bộ lọc theo nhiều thuộc tính.',
        'Xử lý luồng giỏ hàng: cập nhật số lượng và đồng bộ trạng thái phía client.',
      ],
      en: [
        'Built the frontend from scratch with React and TypeScript.',
        'Developed the product catalog components and multi-attribute filters.',
        'Handled the cart flow: quantity updates and client-side state synchronization.',
      ],
    },
    team: {
      vi: 'Làm trong team của Nexpando; dữ liệu đến từ các API backend do team cung cấp.',
      en: "Built within Nexpando's team; data came from the backend APIs the team provided.",
    },
    highlights: {
      vi: [
        'Bộ lọc tìm kiếm theo nhiều thuộc tính',
        'Cải thiện hiệu năng render và độ mượt của thao tác phía client',
        'Quản lý state bằng Redux, tích hợp RESTful API',
      ],
      en: [
        'Multi-attribute filter UI for searching the catalog',
        'Improved render performance and the smoothness of client-side interactions',
        'State managed with Redux, integrated with RESTful APIs',
      ],
    },
    tags: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'RESTful API'],
    topic: 'web-app',
  },
  {
    id: 'project-nexbus',
    title: {
      vi: 'Nexbus, hệ thống bán vé xe trực tuyến',
      en: 'Nexbus, an online bus ticketing platform',
    },
    role: { vi: 'Frontend engineer tại Nexpando', en: 'Frontend engineer at Nexpando' },
    overview: {
      vi: 'Hệ thống web để tìm chuyến xe, chọn ghế trực quan và đặt vé trực tuyến.',
      en: 'A web platform for searching bus trips, choosing seats visually and booking online.',
    },
    context: {
      vi: 'Một luồng đặt vé nơi người dùng so sánh chuyến, chọn ghế và nhập thông tin hành khách phải rõ ràng trên cả máy tính lẫn điện thoại.',
      en: 'A booking flow where people compare trips, choose seats and enter passenger details has to stay clear on both desktop and mobile.',
    },
    contribution: {
      vi: [
        'Dựng giao diện tìm tuyến và sơ đồ chọn ghế.',
        'Phát triển form thông tin hành khách và màn hình xác nhận đặt chỗ.',
        'Dựng landing page cho các đối tác của Nexbus bằng Next.js.',
      ],
      en: [
        'Built the trip search interface and the seat selection layout.',
        'Developed the passenger information form and booking confirmation.',
        "Built landing pages for Nexbus's partners with Next.js.",
      ],
    },
    team: {
      vi: 'Làm trong team sản phẩm của Nexpando; API và thiết kế do các thành viên khác phụ trách.',
      en: "Part of Nexpando's product team; APIs and design were handled by other members.",
    },
    highlights: {
      vi: [
        'Sơ đồ ghế tương tác, dùng được trên cả màn hình lớn và nhỏ',
        'Form thông tin hành khách và màn hình xác nhận đặt chỗ',
        'Layout responsive cho máy tính và điện thoại',
      ],
      en: [
        'An interactive seat map that works on both large and small screens',
        'A passenger information form and booking confirmation',
        'Responsive layouts for desktop and mobile',
      ],
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'RESTful API'],
    topic: 'website',
  },
  {
    id: 'project-gopy-csr-portal',
    title: { vi: 'Gopy, cổng quản trị CSR', en: 'Gopy, a CSR admin portal' },
    role: { vi: 'Developer tại Techbee Solutions', en: 'Developer at Techbee Solutions' },
    overview: {
      vi: 'Trang quản trị cho Gopy, mạng xã hội về trách nhiệm xã hội doanh nghiệp (CSR) kết nối doanh nghiệp, hiệp hội, influencer và người lao động.',
      en: 'The admin portal for Gopy, a corporate social responsibility (CSR) social network connecting companies, associations, influencers and employees.',
    },
    context: {
      vi: 'Quản trị viên cần duyệt tài khoản, điều phối nhóm chat, gửi khảo sát và so sánh kết quả đánh giá giữa doanh nghiệp và influencer.',
      en: 'Admins need to approve accounts, manage chat groups, send surveys and compare assessment results between companies and influencers.',
    },
    contribution: {
      vi: [
        'Duyệt tài khoản theo công ty và quản lý yêu cầu kết nối của influencer.',
        'Quản lý nhóm chat công khai và riêng tư.',
        'Trình dựng khảo sát và lên lịch Q&A.',
        'Trình dựng biểu mẫu dạng cây và luồng đánh giá giữa doanh nghiệp và influencer.',
      ],
      en: [
        'Account approval by company and management of influencer connection requests.',
        'Management of public and private chat groups.',
        'A survey builder and Q&A scheduling.',
        'A tree-based form builder and the assessment flow between companies and influencers.',
      ],
    },
    team: {
      vi: 'Các module trên là phần mình làm khi ở Techbee Solutions; mình không đề cập các phần còn lại của sản phẩm.',
      en: "The modules above are the ones I built at Techbee Solutions; I don't cover the rest of the product here.",
    },
    highlights: {
      vi: [
        'Khảo sát với 6 loại câu hỏi, lên lịch một lần hoặc lặp theo tuần, tháng, năm',
        'Biểu mẫu dạng cây, mỗi node có kiểu dữ liệu riêng và có thể tự điền dữ liệu công ty qua GraphQL',
        'Kết quả đánh giá: lọc theo tổ chức, đợt và khoảng thời gian, tính độ lệch giữa hai bên, xuất Excel/PDF',
      ],
      en: [
        'Surveys with 6 question types, scheduled once or repeating weekly, monthly or yearly',
        'A tree-based form builder where each node has its own data type and can prefill company data through GraphQL',
        'Assessment results: filters by organization, campaign and date range, deviation between the two sides, Excel/PDF export',
      ],
    },
    tags: ['React', 'JavaScript', 'GraphQL', 'REST API', 'Dynamic Forms', 'Excel / PDF export'],
    topic: 'web-app',
  },
];

/** Websites rebuilt from original designs for this portfolio; not current client work. */
export const rebuildsData = [
  {
    id: 'rebuild-universal-dental',
    title: {
      vi: 'Universal Dental (Irvine, California)',
      en: 'Universal Dental (Irvine, California)',
    },
    note: {
      vi: 'Website nha khoa thiết kế năm 2022 khi mình làm ở Techbee Solutions. Mình dựng lại từ file Adobe XD gốc: responsive từ 1366px xuống 390px, carousel dùng được bằng bàn phím.',
      en: 'A dental clinic site designed in 2022 during my time at Techbee Solutions. I rebuilt it from the original Adobe XD file: responsive from 1366px down to 390px, with keyboard-usable carousels.',
    },
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Adobe XD'],
    demoUrl: 'https://universal-dental.gen-nex.tech',
  },
  {
    id: 'rebuild-provo-pediatric',
    title: { vi: 'Provo Pediatric Dentistry (Utah)', en: 'Provo Pediatric Dentistry (Utah)' },
    note: {
      vi: 'Website nha khoa nhi thiết kế năm 2022 khi mình làm ở Techbee Solutions, dựng lại từ file Adobe XD gốc, với 16 dịch vụ và 2 cơ sở dùng chung một nguồn dữ liệu.',
      en: 'A pediatric dental site designed in 2022 during my time at Techbee Solutions, rebuilt from the original Adobe XD file, with 16 services and 2 locations sharing one data source.',
    },
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Adobe XD'],
    demoUrl: 'https://provo-pediatric.gen-nex.tech',
  },
];
