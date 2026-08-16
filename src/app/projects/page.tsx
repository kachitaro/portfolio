import { ProjectsSection } from '@/components/projects-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dự án Doanh nghiệp (Projects) | John (Anh Tài)',
  description: 'Các dự án doanh nghiệp thực tế quy mô lớn đã và đang phát triển: Nexbus, Vnshop V2, BANA của John (Anh Tài).',
};

export default function ProjectsPage() {
  return (
    <div className="py-8 animate-in fade-in-50 duration-300">
      <ProjectsSection />
    </div>
  );
}
