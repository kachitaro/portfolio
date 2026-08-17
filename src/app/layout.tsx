import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/context/language-context';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Spotlight } from '@/components/ui/spotlight';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { EasterEggs } from '@/components/easter-eggs';
import { SmoothScroll } from '@/components/smooth-scroll';

import { config } from '@/data/config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 overflow-x-hidden relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TooltipProvider delay={200}>
              <ScrollProgress />
              <Spotlight />
              <EasterEggs />
              <Navbar />
              <SmoothScroll>
                <main className="flex-1 pt-14 relative z-10">
                  {children}
                </main>
              </SmoothScroll>
              <Footer />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
