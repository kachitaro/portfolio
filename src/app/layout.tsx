import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { SmoothScroll } from '@/components/smooth-scroll';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { Spotlight } from '@/components/ui/spotlight';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/context/language-context';
import { config } from '@/data/config';
import { Geist, Geist_Mono } from 'next/font/google';
import '../themes/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
  adjustFontFallback: true,
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
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: config.author.name,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://github.com" />

        <link rel="dns-prefetch" href="https://github.com" />

        <link rel="preconnect" href="https://images.unsplash.com" />

        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        <link rel="preconnect" href="https://skillicons.dev" />

        <link rel="dns-prefetch" href="https://skillicons.dev" />
      </head>
      <body className="bg-background text-foreground relative flex min-h-full flex-col overflow-x-hidden transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <TooltipProvider delay={200}>
              <ScrollProgress />

              <Spotlight />

              <Navbar />

              <SmoothScroll>
                <main className="relative z-10 flex-1 pt-14">{children}</main>
              </SmoothScroll>

              <Footer />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
