'use client';

import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';

const REPO = 'https://github.com/kachitaro/dotfiles';

export function SetupSection() {
  const { t } = useLanguage();

  const tools = [
    {
      name: 'PowerShell + Starship',
      desc: t(
        'Profile tự nạp hàm tiện ích và alias, prompt Starship theme Catppuccin.',
        'A profile that loads helper functions and aliases, with a Catppuccin Starship prompt.',
      ),
    },
    {
      name: 'Neovim (NvChad)',
      desc: t(
        'LSP cho HTML và CSS, format bằng conform.nvim, tự đổi bộ gõ khi thoát Insert.',
        'LSP for HTML and CSS, formatting via conform.nvim, input method switches when leaving Insert.',
      ),
    },
    {
      name: 'WezTerm',
      desc: t('Cấu hình bằng Lua, theme sinh từ một file JSON chung.', 'Configured in Lua, themes generated from one shared JSON file.'),
    },
    {
      name: 'dot add / eject',
      desc: t(
        'Đưa cấu hình mới vào repo bằng symlink, hoặc trả về máy mà không mất file gốc.',
        'Pull a new config into the repo as a symlink, or hand it back without losing the original.',
      ),
    },
  ];

  return (
    <Section id="setup" title="Setup" note=".dotfiles">
      <p className="prose-serif text-neutral-12">
        {t(
          'Môi trường làm việc của mình trên Windows và Linux, gói trong một repo. Clone về, chạy một script là có đủ.',
          'My working environment on Windows and Linux, kept in one repo. Clone it, run one script, done.',
        )}
      </p>

      <pre className="bg-neutral-12 text-neutral-3 mt-8 overflow-x-auto rounded-xl p-5 font-mono text-[13px] leading-7 md:text-sm">
        <code>
          <span className="text-neutral-8">$ </span>git clone {REPO}.git ~/dotfiles{'\n'}
          <span className="text-neutral-8">$ </span>cd ~/dotfiles{'\n'}
          <span className="text-neutral-8">$ </span>./scripts/install.ps1   <span className="text-neutral-9"># Windows</span>{'\n'}
          <span className="text-neutral-8">$ </span>./scripts/install.sh    <span className="text-neutral-9"># Linux, macOS</span>
        </code>
      </pre>

      <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <div key={tool.name}>
            <dt className="text-neutral-12 text-[15px] font-medium">{tool.name}</dt>
            <dd className="text-neutral-11 mt-1 text-[15px] leading-relaxed">{tool.desc}</dd>
          </div>
        ))}
      </dl>

      <a
        href={REPO}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-11 decoration-brand-7 hover:decoration-brand-11 mt-10 inline-block text-[15px] font-medium underline underline-offset-4">
        {t('Xem repo dotfiles trên GitHub', 'View the dotfiles repo on GitHub')}
      </a>
    </Section>
  );
}
