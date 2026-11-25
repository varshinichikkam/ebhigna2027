import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ebhigna2027',
  description: 'ebhigna 2027 Next.js application',
  openGraph: {
    title: 'ebhigna2027',
    description: 'ebhigna 2027 Next.js application',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ebhigna2027',
    description: 'ebhigna 2027 Next.js application',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.className} min-h-screen bg-creamy-white text-deep-emerald-green antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
