import type { Metadata, Viewport } from 'next';

import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { SmoothScroll } from '@/components/smooth-scroll';
import { ThemeProvider } from '@/components/theme-provider';
import { accentBootScript, DEFAULT_ACCENT } from '@/context/accent-context';
import { LanguageProvider } from '@/context/language-context';
import { config } from '@/data/config';
import { Bricolage_Grotesque, JetBrains_Mono, Newsreader } from 'next/font/google';
import '../themes/globals.css';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  axes: ['wdth', 'opsz'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  axes: ['opsz'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: config.title,
  description: config.description.short,
  keywords: config.keywords,
  authors: [config.author],
  openGraph: {
    title: `${config.author.name} - Software Engineer Portfolio`,
    description: config.description.long,
    url: config.site,
    siteName: `${config.author.name} Portfolio`,
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: config.author.name }],
    locale: 'vi_VN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfd' },
    { media: '(prefers-color-scheme: dark)', color: '#111113' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      data-accent={DEFAULT_ACCENT}
      suppressHydrationWarning
      className={`${bricolage.variable} ${newsreader.variable} ${jetbrains.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: accentBootScript }} />
      </head>
      <body className="relative flex min-h-full flex-col overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <a
              href="#main"
              className="bg-primary text-primary-foreground sr-only z-[60] rounded-md px-3 py-2 text-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
              Bỏ qua điều hướng
            </a>
            <SiteHeader />
            <SmoothScroll>
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
