'use client';

import React from 'react';
import { Terminal, Star, GitFork, ArrowRight, Code, Settings, Monitor, Command, FileCode, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CtaLink } from '@/components/ui/cta-link';
import { useLanguage } from '@/context/language-context';

export function DotfilesSection() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: <Terminal className="h-5 w-5 text-sky-400" />,
      title: 'PowerShell & Shell',
      desc: t('Cấu hình PowerShell profile tự động load hàm tiện ích, alias và tích hợp Starship prompt siêu tốc.', 'PowerShell profile config with auto-loaded utility functions, aliases, and fast Starship prompt integration.')
    },
    {
      icon: <FileCode className="h-5 w-5 text-amber-400" />,
      title: 'Neovim (NvChad)',
      desc: t('Cấu hình NvChad tinh chỉnh với LSP (html, cssls), auto-format (conform.nvim) và tự chuyển đổi bộ gõ.', 'Customized NvChad config with LSP, auto-formatting, and auto IM (input method) switching.')
    },
    {
      icon: <Monitor className="h-5 w-5 text-emerald-400" />,
      title: 'WezTerm',
      desc: t('Terminal emulator cực nhanh viết bằng Rust, giao diện đẹp mắt tích hợp theme tự động.', 'Blazing fast terminal emulator written in Rust, beautiful UI with auto-generated themes.')
    },
    {
      icon: <Settings className="h-5 w-5 text-purple-400" />,
      title: 'Quản lý bằng Symlink',
      desc: t('Script tự động cài đặt và eject cấu hình an toàn mà không làm mất file gốc.', 'Automated scripts to install and safely eject configs using symlinks without losing original files.')
    }
  ];

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-4 px-3.5 py-1 text-xs tracking-wider uppercase">
            Open Source Guide
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
            <span className="from-primary bg-linear-to-r via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              .dotfiles
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {t(
              'Hướng dẫn cài đặt và quản lý môi trường lập trình tối ưu của tôi dành cho Windows / Linux. Bao gồm Neovim, WezTerm, PowerShell và Starship.',
              'Setup guide and management scripts for my optimal development environment on Windows / Linux. Includes Neovim, WezTerm, PowerShell, and Starship.'
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink
              href="https://github.com/kachitaro/dotfiles"
              external
              size="lg"
              icon={<GithubIcon className="h-5 w-5" />}
              iconPosition="left"
              className="rounded-full shadow-lg transition-transform hover:-translate-y-1">
              {t('Xem trên GitHub', 'View on GitHub')}
            </CtaLink>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((item, idx) => (
            <Card key={idx} className="glass-panel border-border/60 hover:border-primary/40 transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid gap-8 lg:grid-cols-12 mb-16">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-border/60">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Command className="h-6 w-6 text-primary" />
                {t('Cài đặt tự động', 'Automated Installation')}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {t('Clone repo về và chạy script install. Script sẽ tự động sao lưu cấu hình cũ và tạo Symlink tới dotfiles.', 'Clone the repo and run the install script. It will backup old configs and symlink to dotfiles.')}
              </p>
              
              <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm overflow-x-auto border border-border/30">
                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                  <span>❯</span>
                  <span className="text-slate-200">git clone https://github.com/kachitaro/dotfiles.git ~/dotfiles</span>
                </div>
                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                  <span>❯</span>
                  <span className="text-slate-200">cd ~/dotfiles</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>❯</span>
                  <span className="text-slate-200">./scripts/install.ps1</span>
                  <span className="text-slate-500 ml-2"># Windows</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-emerald-400">
                  <span>❯</span>
                  <span className="text-slate-200">./scripts/install.sh</span>
                  <span className="text-slate-500 ml-3"># Linux/macOS</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-border/60">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <GitFork className="h-6 w-6 text-primary" />
                {t('Kiến trúc thư mục', 'Directory Structure')}
              </h3>
              <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto border border-border/30">
                <pre>
{`.
├── nvim/             # Cấu hình NvChad Neovim (LSP, formatters)
├── powershell/       # Các hàm tiện ích & Profile cho PWSH
├── scoop/            # Cấu hình Scoop package manager
├── scripts/          # install, uninstall, add, eject scripts
├── shell/            # .bashrc và .zshrc
├── starship/         # Cấu hình Catppuccin prompt
├── themes/           # Script auto-generate themes
└── wezterm/          # Cấu hình WezTerm bằng Lua`}
                </pre>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-border/60 h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Settings className="h-5 w-5 text-amber-500" />
                {t('Tiện ích đi kèm', 'Included Utilities')}
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Theme Generator</h4>
                    <p className="text-sm text-muted-foreground mt-1">Script Python tự động tạo palette màu cho Lua, PowerShell và Bash từ file JSON.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Auto IM Switcher</h4>
                    <p className="text-sm text-muted-foreground mt-1">Autocmd tự động chuyển bộ gõ (im-select) khi thoát khỏi chế độ Insert trong Neovim.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Dot Add/Eject</h4>
                    <p className="text-sm text-muted-foreground mt-1">Lệnh <code className="bg-primary/20 text-primary px-1 rounded">dot add</code> giúp thu nạp cấu hình mới vào kho. Lệnh eject giúp phục hồi cấu hình về máy thực an toàn.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
