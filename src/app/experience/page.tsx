import { ExperienceSection } from '@/components/experience-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kinh nghiệm làm việc (Experience) | John (Anh Tài)',
  description: 'Quá trình làm việc thực tế tại Nexpando (Software Engineer) và Techbee Solutions (Developer) của John (Anh Tài).',
};

export default function ExperiencePage() {
  return (
    <div className="py-8 animate-in fade-in-50 duration-300">
      <ExperienceSection />
    </div>
  );
}
