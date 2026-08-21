import { SkillsSection } from '@/components/skills-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kỹ năng & Công nghệ (Skills) | John (Anh Tài)',
  description:
    'Hệ sinh thái kỹ năng chuyên môn: React.js, Next.js, TypeScript, Tailwind CSS, RESTful APIs, Node.js của John (Anh Tài).',
};

export default function SkillsPage() {
  return (
    <div className="animate-in fade-in-50 py-8 duration-300">
      <SkillsSection />
    </div>
  );
}
