import { AboutSection } from '@/components/about-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu (About Me) | John (Anh Tài)',
  description:
    'Thông tin cá nhân, định hướng nghề nghiệp và kinh nghiệm chuyên môn của John (Anh Tài) - Software Engineer tại Nexpando.',
};

export default function AboutPage() {
  return (
    <div className="animate-in fade-in-50 py-8 duration-300">
      <AboutSection />
    </div>
  );
}
