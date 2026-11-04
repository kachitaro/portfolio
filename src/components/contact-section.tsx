'use client';

import { Reveal } from '@/components/reveal';
import { buttonVariants } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/personal';
import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();
  const subject = encodeURIComponent(t('Liên hệ từ portfolio', 'Hello from your portfolio'));

  return (
    // Local dark scope: the .dark token set applies to this section only.
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="dark bg-background text-foreground">
      <div className="page section-y">
        <Reveal as="h2" id="contact-title" className="text-display">
          {t('Cùng làm việc nhé', "Let's work together")}
        </Reveal>

        <div className="grid-page mt-8 gap-y-8 lg:mt-12">
          <Reveal as="p" delay={80} className="text-lead col-span-full lg:col-span-4 lg:pr-6">
            {t(
              'Đang tìm cơ hội Frontend full-time và nhận dự án freelance.',
              'Open to full-time frontend roles and freelance projects.',
            )}
          </Reveal>

          <Reveal delay={160} className="col-span-full lg:col-span-4 lg:col-start-5">
            <a
              href={`${personalInfo.socials.email}?subject=${subject}`}
              className={`${buttonVariants()} w-full lg:w-auto`}>
              {t('Gửi email', 'Send an email')}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <p className="text-body mt-4">{personalInfo.email}</p>
          </Reveal>

          <Reveal delay={240} className="col-span-full lg:col-span-4 lg:col-start-9">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body link-inline inline-flex min-h-11 items-center">
              GitHub
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
