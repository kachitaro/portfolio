import { ExperienceSection } from '@/components/experience-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kinh nghiệm làm việc (Experience) | John (Anh Tài)',
  description:
    'Quá trình làm việc thực tế tại Nexpando (Software Engineer) và Techbee Solutions (Developer) của John (Anh Tài).',
};

export default function ExperiencePage() {
  return (
    <div className="animate-in fade-in-50 py-8 duration-300">
      <ExperienceSection />
    </div>
  );
}
