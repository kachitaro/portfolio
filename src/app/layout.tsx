import type { Metadata, Viewport } from 'next';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { LanguageProvider } from '@/context/language-context';
import { config } from '@/data/config';
import { JetBrains_Mono, Playfair_Display, Source_Serif_4 } from 'next/font/google';
import '../themes/globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin', 'vietnamese'],
  axes: ['opsz'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
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
    locale: 'vi_VN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
};

/**
 * Theme follows prefers-color-scheme (no toggle): the light tokens live on :root,
 * and the dark set is applied by this class when the OS asks for it.
 */
const themeScript = `(function(){var m=matchMedia('(prefers-color-scheme: dark)');function a(){document.documentElement.classList.toggle('dark',m.matches)}a();m.addEventListener('change',a)})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfair.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <LanguageProvider>
          <div id="top" className="flex flex-1 flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
