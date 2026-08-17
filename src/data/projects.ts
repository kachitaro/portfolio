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
      vi: 'Đang phát triển (Active Development)',
      en: 'Active Development',
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
      vi: 'Đã triển khai (In Production)',
      en: 'In Production',
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
      vi: 'Đã triển khai (In Production)',
      en: 'In Production',
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
];
