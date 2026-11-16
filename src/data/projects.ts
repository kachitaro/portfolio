import { type IProject } from '@/types/portfolio';

export const projectsData: IProject[] = [
  {
    id: 'project-bana',
    title: {
      vi: 'Dự án BANA',
      en: 'BANA Platform',
    },
    company: 'Nexpando',
    projectType: 'enterprise',
    status: {
      vi: 'Đang phát triển',
      en: 'In development',
    },
    description: {
      vi: 'Nền tảng POS cho hộ kinh doanh cá thể và doanh nghiệp tại Việt Nam, đang chạy thử nghiệm. Mình xây dựng các module tài chính, thanh toán QR, hóa đơn, ca làm việc, sổ cái và báo cáo doanh thu bằng React và TypeScript trên lớp core/base dựa trên React-Admin và React Hook Form.',
      en: 'A POS platform for individual household businesses and enterprises in Vietnam, currently in pilot. I build the finance, QR payment, invoicing, shift, ledger, and revenue-reporting modules with React and TypeScript on a core/base layer built on React-Admin and React Hook Form.',
    },
    category: 'enterprise',
    tags: ['React', 'TypeScript', 'Redux', 'React-Admin', 'React Hook Form', 'Tailwind CSS', 'shadcn/ui', 'Astro'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: {
      vi: [
        'Triển khai các module tài chính, thanh toán QR, hóa đơn, ca làm việc, sổ cái và báo cáo doanh thu',
        'Xây dựng lớp core/base trên React-Admin và React Hook Form, tái sử dụng cho form và bảng dữ liệu',
        'Làm việc theo ticket có tiêu chí hoàn thành rõ ràng trong team 14 người, tích hợp RESTful API và Redux',
      ],
      en: [
        'Delivered finance, QR payment, invoicing, shift, ledger, and revenue-reporting modules',
        'Built a core/base layer on React-Admin and React Hook Form, reused for forms and data tables',
        'Worked from tickets with defined acceptance criteria in a 14-person team, integrating RESTful APIs and Redux',
      ],
    },
  },
  {
    id: 'project-nexbus',
    title: {
      vi: 'Hệ thống Bán vé Trực tuyến Nexbus',
      en: 'Nexbus Online Ticketing Platform',
    },
    company: 'Nexpando',
    projectType: 'enterprise',
    status: {
      vi: 'Đang chạy thật',
      en: 'In production',
    },
    description: {
      vi: 'Hệ thống website phục vụ nghiệp vụ tìm kiếm chuyến xe, chọn ghế ngồi theo thời gian thực và đặt vé trực tuyến. Tham gia phát triển giao diện người dùng, tối ưu luồng thao tác và kết nối API hệ thống.',
      en: 'Production web ticketing platform designed for journey schedule searching, interactive seat selection, and online booking. Contributed to building frontend workflows and API integrations.',
    },
    category: 'enterprise',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'State Management', 'REST API'],
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: {
      vi: [
        'Xây dựng giao diện tìm kiếm tuyến đường và sơ đồ chọn ghế ngồi trực quan',
        'Phát triển luồng điền thông tin hành khách và xác nhận đặt chỗ',
        'Đảm bảo giao diện hiển thị mượt mà trên cả máy tính và điện thoại',
      ],
      en: [
        'Built interactive trip searching and visual seat selection layout',
        'Developed passenger information checkout form and booking confirmation',
        'Ensured responsive rendering across both desktop and mobile screens',
      ],
    },
  },
  {
    id: 'project-vnshop-v2',
    title: {
      vi: 'Sàn Thương mại Điện tử Vnshop V2',
      en: 'Vnshop V2 E-Commerce Platform',
    },
    company: 'Nexpando',
    projectType: 'enterprise',
    status: {
      vi: 'Đang chạy thật',
      en: 'In production',
    },
    description: {
      vi: 'Phiên bản V2 của Vnshop, sản phẩm thương mại điện tử tích hợp trong app VNPAY. Phát triển danh mục sản phẩm, giỏ hàng và trải nghiệm duyệt trang.',
      en: 'E-commerce product embedded in the VNPAY app. Built the product catalog, cart flow, and browsing experience.',
    },
    category: 'enterprise',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'RESTful API'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: {
      vi: [
        'Phát triển các component danh mục sản phẩm và bộ lọc tìm kiếm',
        'Cải thiện hiệu năng render giao diện và thời gian phản hồi thao tác',
        'Xử lý cập nhật số lượng giỏ hàng và đồng bộ state phía client',
      ],
      en: [
        'Developed product listing components and multi-attribute filter UI',
        'Improved UI render responsiveness and client-side interaction flow',
        'Handled cart item quantities and state synchronization on client',
      ],
    },
  },
  {
    id: 'project-gopy-csr-portal',
    title: {
      vi: 'Cổng quản trị CSR Portal của Gopy',
      en: 'Gopy CSR Admin Portal',
    },
    company: 'Techbee Solutions',
    projectType: 'enterprise',
    status: {
      vi: 'Dự án khách hàng',
      en: 'Client project',
    },
    description: {
      vi: 'Trang quản trị cho Gopy, mạng xã hội về trách nhiệm xã hội doanh nghiệp (CSR) kết nối doanh nghiệp, hiệp hội, influencer và người lao động. Khi làm ở Techbee Solutions, mình phát triển các phân hệ duyệt tài khoản, nhóm chat, khảo sát và đánh giá doanh nghiệp (self-assessment).',
      en: 'Admin portal for Gopy, a corporate social responsibility (CSR) social network connecting companies, associations, influencers and employees. At Techbee Solutions I built the account approval, group chat, survey and company self-assessment modules.',
    },
    category: 'enterprise',
    tags: ['React.js', 'JavaScript', 'GraphQL', 'REST API', 'Dynamic Forms', 'Excel / PDF export'],
    image: '',
    featured: true,
    highlights: {
      vi: [
        'Tài khoản: trang duyệt tài khoản người dùng theo công ty (lọc, duyệt hoặc từ chối) và trang Influencer requests để influencer gửi, huỷ yêu cầu kết nối hoặc gỡ liên kết với doanh nghiệp',
        'Group Chat: quản lý nhóm công khai và riêng tư, duyệt thành viên vào nhóm riêng, thêm/xoá và chặn/bỏ chặn người dùng trong nhóm',
        'Khảo sát: tạo khảo sát với 6 loại câu hỏi (Text, Radio, Checkbox, Radio Grid, Checkbox Grid, Level), lên lịch Q&A một lần hoặc lặp theo tuần/tháng/năm và gửi theo công ty, khu vực hoặc nhóm chat',
        'Attribute report: trình dựng biểu mẫu dạng cây cho admin, mỗi node có kiểu dữ liệu riêng (text, number, select, radio, checkbox, ngày giờ…), đơn vị, màu chữ, và có thể tự điền dữ liệu công ty qua GraphQL',
        'Luồng đánh giá: lên lịch đợt đánh giá định kỳ hoặc theo yêu cầu và giao cho influencer; doanh nghiệp (My assessment) và influencer (Influencer input) cùng điền, review rồi nộp để admin so sánh và duyệt hoặc trả lại',
        'Kết quả đánh giá: lọc theo tổ chức, đợt đánh giá, khoảng thời gian và nhóm câu hỏi, tính độ lệch giữa hai bên và xuất Excel/PDF',
      ],
      en: [
        'Accounts: a page to approve users by company (filter, approve or reject) and an Influencer requests page where influencers send or cancel connection requests and remove links with companies',
        'Group Chat: management of public and private groups, approving members into private groups, adding/removing and blocking/unblocking users',
        'Surveys: survey builder with 6 question types (Text, Radio, Checkbox, Radio Grid, Checkbox Grid, Level), Q&A scheduling as one-off or weekly/monthly/yearly, targeted by company, location or chat group',
        'Attribute report: a tree-based form builder for admins where each node has its own data type (text, number, select, radio, checkbox, date…), unit and text style, and can prefill company data through GraphQL',
        'Assessment flow: scheduling periodic or on-request assessments and assigning them to influencers; companies (My assessment) and influencers (Influencer input) fill, review and submit their forms so the admin can compare and approve or send them back',
        'Assessment results: filters by organization, campaign, date range and question group, deviation between the two sides, and Excel/PDF export',
      ],
    },
  },
  {
    id: 'project-universal-dental',
    title: {
      vi: 'Website Nha khoa Universal Dental (dựng lại)',
      en: 'Universal Dental Website (rebuild)',
    },
    company: 'Techbee Solutions',
    projectType: 'personal',
    status: {
      vi: 'Dựng lại cho portfolio',
      en: 'Portfolio rebuild',
    },
    description: {
      vi: 'Website cho phòng khám nha khoa Universal Dental ở Irvine, California, thiết kế năm 2022 khi mình làm ở Techbee Solutions. Mình dựng lại trang chủ, trang dịch vụ, trang chi tiết Dental Implants và trang liên hệ từ file Adobe XD gốc.',
      en: 'Website for the Universal Dental clinic in Irvine, California, designed in 2022 during my time at Techbee Solutions. I rebuilt the home, services, dental implants and contact pages from the original Adobe XD file.',
    },
    category: 'frontend',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Adobe XD'],
    image: '',
    demoUrl: 'https://universal-dental.gen-nex.tech',
    featured: true,
    highlights: {
      vi: [
        'Đọc trực tiếp dữ liệu artboard trong file .xd để lấy đúng màu, cỡ chữ, khoảng cách và nội dung',
        'Responsive từ desktop 1366px xuống mobile 390px, carousel bác sĩ và đánh giá có điều khiển bàn phím',
        'Form liên hệ dạng demo, ảnh xuất sang WebP, font tự host nên build không cần mạng',
      ],
      en: [
        'Read the artboard data inside the .xd file to match colors, type sizes, spacing and copy exactly',
        'Responsive from the 1366px desktop design down to 390px mobile, with keyboard-usable doctor and review carousels',
        'Demo contact form, images converted to WebP, self-hosted fonts so the build needs no network',
      ],
    },
  },
  {
    id: 'project-provo-pediatric',
    title: {
      vi: 'Website Nha khoa Nhi Provo Pediatric (dựng lại)',
      en: 'Provo Pediatric Dentistry Website (rebuild)',
    },
    company: 'Techbee Solutions',
    projectType: 'personal',
    status: {
      vi: 'Dựng lại cho portfolio',
      en: 'Portfolio rebuild',
    },
    description: {
      vi: 'Website cho phòng khám nha khoa nhi Provo Pediatric Dentistry ở Utah (Dr. Bott, Dr. Lund, Dr. Markham), thiết kế năm 2022 khi mình làm ở Techbee Solutions. Mình dựng lại trang chủ, trang dịch vụ, trang Dental Crowns và trang liên hệ từ file Adobe XD gốc.',
      en: 'Website for Provo Pediatric Dentistry in Utah (Dr. Bott, Dr. Lund, Dr. Markham), designed in 2022 during my time at Techbee Solutions. I rebuilt the home, services, dental crowns and contact pages from the original Adobe XD file.',
    },
    category: 'frontend',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Adobe XD'],
    image: '',
    demoUrl: 'https://provo-pediatric.gen-nex.tech',
    featured: true,
    highlights: {
      vi: [
        'Xuất các hình minh hoạ vector (sinh vật biển, icon, phong bì) từ file XD thành ảnh nhẹ',
        'Form liên hệ đặt trong phong bì mở và dải sóng biển, giữ đúng bố cục thiết kế trên mọi kích thước màn hình',
        'Dữ liệu 16 dịch vụ và 2 cơ sở dùng chung cho trang dịch vụ, menu và footer',
      ],
      en: [
        'Exported the vector illustrations (sea creatures, icons, envelope) from the XD file as light images',
        'Contact form set inside an open envelope over an ocean band, holding the design’s layout at every screen size',
        'One data source for the 16 services and 2 locations, shared by the services page, menus and footer',
      ],
    },
  },
];
