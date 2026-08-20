import { DotfilesSection } from '@/components/dotfiles-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dotfiles | John (Anh Tài)',
  description: 'Mã nguồn mở cấu hình hệ thống (dotfiles) của kachitaro.',
};

export default function DotfilesPage() {
  return (
    <div className="py-8 animate-in fade-in-50 duration-300">
      <DotfilesSection />
    </div>
  );
}
