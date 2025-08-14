// src/app/layout.js
import 'next/font/google';
import '@fontsource/audiowide/400.css';
import { Audiowide } from 'next/font/google';
import AuthProvider from './providers';
import './globals.css';

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide', // CSS variable name
});

export const metadata = {
  title: 'Unified | Outreach and Hospitality',
  description: 'Centralized app for Department of Outreach and Hospitality | IITM Paradox',
  icons: {
    icon: '/images/logoo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${audiowide.variable}`}>
      <body className="font-[var(--font-audiowide)]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}