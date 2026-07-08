import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { Sidebar } from '@/components/ui/Sidebar';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Creative Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark') {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            } catch (_) {}
          `
        }} />
      </head>
      <body className={`${syne.variable} ${plusJakartaSans.variable} ${geistMono.variable} overflow-x-hidden`}>
        <div className="flex w-full min-h-screen">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 relative">
            <Breadcrumb />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </main>
        </div>
      </body>
    </html>
  );
}
