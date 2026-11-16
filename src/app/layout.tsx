import type { Metadata, Viewport } from 'next';

import { Footer } from '@/components/footer';
import { SiteHeader } from '@/components/site-header';
import { SmoothScroll } from '@/components/smooth-scroll';
import { ThemeProvider } from '@/components/theme-provider';
import { accentBootScript, DEFAULT_ACCENT } from '@/context/accent-context';
import { MotionProvider } from '@/components/motion/motion';
import { LazyMount } from '@/components/three/lazy-mount';
import { ParticleField } from '@/components/three/lazy-scenes';
import { LanguageProvider } from '@/context/language-context';
import { config } from '@/data/config';
import '@fontsource-variable/bricolage-grotesque/standard.css';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/newsreader/standard-italic.css';
import '@fontsource-variable/newsreader/standard.css';
import '../themes/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: {
    default: config.title,
    template: `%s | ${config.author.name}`,
  },
  description: config.description.short,
  keywords: config.keywords,
  authors: [config.author],
  creator: config.author.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: config.title,
    description: config.description.long,
    url: '/',
    siteName: `${config.author.name} – Portfolio`,
    locale: 'vi_VN',
    alternateLocale: ['en_US'],
    type: 'profile',
    firstName: 'John',
    username: 'kachitaro',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description.short,
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${config.site}/#person`,
      name: config.author.name,
      alternateName: ['Anh Tài', 'kachitaro'],
      url: config.site,
      image: 'https://github.com/kachitaro.png',
      email: `mailto:${config.email}`,
      jobTitle: config.jobTitle,
      worksFor: { '@type': 'Organization', name: config.worksFor },
      address: { '@type': 'PostalAddress', addressCountry: 'VN' },
      knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Frontend development'],
      sameAs: config.sameAs,
    },
    {
      '@type': 'WebSite',
      '@id': `${config.site}/#website`,
      url: config.site,
      name: `${config.author.name} – Portfolio`,
      inLanguage: ['vi', 'en'],
      publisher: { '@id': `${config.site}/#person` },
    },
  ],
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
      className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: accentBootScript }} />
        <noscript>
          <style>
            {'[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}'}
          </style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="relative flex min-h-full flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <LanguageProvider>
            <a
              href="#main"
              className="bg-primary text-primary-foreground sr-only z-[60] rounded-md px-3 py-2 text-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
              Bỏ qua điều hướng
            </a>
            <MotionProvider>
              <LazyMount when="idle">
                <ParticleField />
              </LazyMount>
              <SiteHeader />
              <SmoothScroll>
                <main id="main" className="flex-1">
                  {children}
                </main>
                <Footer />
              </SmoothScroll>
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
