import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kishan S - Software Engineer | Full-Stack & ML Developer',
  description:
    'Portfolio of Kishan S - Computer Science graduate specializing in full-stack development, machine learning, and computer vision. Available for full-time opportunities.',
  keywords: [
    'Kishan S',
    'Software Engineer',
    'Full-Stack Developer',
    'Machine Learning',
    'AI',
    'Computer Vision',
    'React',
    'Python',
    'Django',
    'Portfolio',
  ],
  authors: [{ name: 'Kishan S' }],
  openGraph: {
    title: 'Kishan S - Software Engineer Portfolio',
    description:
      'Experienced in building scalable web applications and intelligent AI/ML systems with clean architecture and performance optimization.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kishan S - Software Engineer Portfolio',
    description: 'Full-Stack Developer | ML Engineer | Computer Vision Specialist',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
