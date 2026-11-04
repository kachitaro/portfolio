'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { GithubIcon } from '@/components/icons/github-icon';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';
import { useGithubProfile } from '@/hooks/use-github-profile';

export function HeroSection() {
  const { language, t } = useLanguage();
  const { profile } = useGithubProfile('kachitaro');
  const facts = personalInfo.aboutDetailed[language].funFacts.slice(0, 4);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pt-32 pb-20 sm:px-6 md:pt-40">
      <div className="flex items-center gap-4">
        <Image
          src={profile?.avatarUrl || personalInfo.avatar}
          alt={personalInfo.name}
          width={56}
          height={56}
          unoptimized
          priority
          className="ring-border rounded-full ring-1"
        />
        <p className="text-muted-foreground flex items-center gap-2 font-mono text-xs">
          <span className="size-2 rounded-full bg-emerald-500" />
          {t('Đang nhận dự án freelance', 'Open for freelance')} · {personalInfo.location[language]}
        </p>
      </div>

      <h1 className="mt-8 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl">
        {t('Mình là', "I'm")} {personalInfo.name},{' '}
        <span className="text-muted-foreground">
          {t(
            'kỹ sư frontend xây sản phẩm web thật.',
            'a frontend engineer shipping real web products.',
          )}
        </span>
      </h1>

      <p className="text-muted-foreground mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">
        {personalInfo.bio[language]}
      </p>

      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        <Link
          href="/contact"
          className="bg-foreground text-background inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium transition-opacity hover:opacity-85">
          <Mail className="size-4" />
          {t('Liên hệ', 'Get in touch')}
        </Link>
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border-border hover:bg-muted inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-medium transition-colors">
          <GithubIcon className="size-4" />
          GitHub
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      <dl className="border-border mt-16 grid grid-cols-2 gap-y-6 border-t pt-8 md:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-muted-foreground text-xs">{f.label}</dt>
            <dd className="mt-1 font-mono text-2xl font-semibold">
              {f.label.includes('GitHub') && profile ? `${profile.public_repos}+` : f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
