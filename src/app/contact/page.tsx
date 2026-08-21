import { ContactSection } from '@/components/contact-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên hệ (Contact) | John (Anh Tài)',
  description:
    'Liên hệ hợp tác phát triển dự án phần mềm, trao đổi kỹ thuật với John (Anh Tài) - anhtai.dev@gmail.com.',
};

export default function ContactPage() {
  return (
    <div className="animate-in fade-in-50 py-8 duration-300">
      <ContactSection />
    </div>
  );
}
