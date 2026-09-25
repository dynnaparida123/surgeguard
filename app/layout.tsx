import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SurgeGuard',
  description: 'AI-powered disaster risk and citizen reporting platform.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#06131a] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
