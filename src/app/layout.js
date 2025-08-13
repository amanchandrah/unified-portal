// src/app/layout.js
import { Inter } from 'next/font/google';
import AuthProvider from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Unified | Outreach and Hospitality',
  description: 'Centralized app for O&H IITM Paradox',
  icons: {
    icon: '/images/logoo.png',   // ✅ favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head> is automatically injected by Next.js */}
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}