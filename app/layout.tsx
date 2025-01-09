import { uxumGrot, whyteInkTrap } from '@/public/fonts/fonts';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-raleway',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Mountain Top University Official Website',
    template: '%s | Mountain Top University',
  },
  description:
    'Join Mountain Top University, the Best University in Nigeria for Quality Education.  Explore our programs, research initiatives, and a vibrant campus life that will prepare you for success.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable} ${uxumGrot.variable} ${whyteInkTrap.variable} scroll-smooth`}
    >
      {/* This prevents extensions from causing a server/client mismatch */}
      <body className="mx-auto max-w-[1920px]" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
