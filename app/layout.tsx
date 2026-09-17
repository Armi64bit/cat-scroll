import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bahaa / Dev — Full-Stack Engineer',
  description: 'The portfolio of Bahaa Eddine Bouzid, full-stack engineer in Tunis.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
