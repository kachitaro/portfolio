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
      vi: 'Dự án mới hiện tại đang được nghiên cứu và phát triển tại Nexpando. Đảm nhiệm vai trò lập trình viên Frontend, xây dựng các module giao diện người dùng tương tác cao bằng React.js, Next.js và TypeScript theo yêu cầu thiết kế.',
      en: 'Current ongoing enterprise project at Nexpando. Contributing as a Frontend Developer building interactive UI modules with React.js, Next.js, and TypeScript according to specifications.',
    },
    category: 'enterprise',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'RESTful API'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    highlights: {
      vi: [
        'Tham gia phát triển các phân hệ giao diện trong dự án mới tại Nexpando',
        'Áp dụng React.js / Next.js để dựng component giao diện tái sử dụng',
        'Phối hợp cùng team để kết nối các luồng dữ liệu API backend',
      ],
      en: [
        'Contributing to new UI modules and features at Nexpando',
        'Implementing reusable component structures using React.js / Next.js',
        'Collaborating with teammates to integrate backend API endpoints',
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
      vi: 'Phiên bản V2 của nền tảng thương mại điện tử Vnshop. Tham gia phát triển và tinh chỉnh giao diện hiển thị danh mục sản phẩm, tối ưu giỏ hàng và nâng cao độ mượt khi người dùng duyệt trang.',
      en: 'V2 upgrade of Vnshop e-commerce platform. Contributed to developing product catalog interfaces, shopping cart flow, and improving overall UI responsiveness.',
    },
    category: 'enterprise',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'RESTful API'],
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
    githubUrl: 'https://github.com/kachitaro/dental-rebuilds',
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
    githubUrl: 'https://github.com/kachitaro/dental-rebuilds',
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
