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

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kachitaro.vercel.app'),
  title: 'John (Anh Tài) | Software Engineer @ Nexpando',
  description: 'Portfolio of John (Anh Tài) (@Kachitaro) - Software Engineer at Nexpando specializing in React.js, Next.js, TypeScript, and high-performance Enterprise Web Platforms.',
  keywords: [
    'Kachitaro',
    'John Anh Tai',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Nexpando',
    'Nexbus',
    'Vnshop V2',
    'BANA'
  ],
  authors: [{ name: 'John (Anh Tài)', url: 'https://github.com/Kachitaro' }],
  openGraph: {
    title: 'John (Anh Tài) - Software Engineer Portfolio',
    description: 'Explore enterprise projects, frontend engineering skills, and work experience by John (Anh Tài).',
    url: 'https://github.com/Kachitaro',
    siteName: 'John (Anh Tài) Portfolio',
    images: [
      {
        url: 'https://github.com/Kachitaro.png',
        width: 400,
        height: 400,
        alt: 'John (Anh Tài)',
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
              <Navbar />
              <main className="flex-1 pt-14 relative z-10">
                {children}
              </main>
              <Footer />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
