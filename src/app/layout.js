// src/app/layout.js
import { Inter } from 'next/font/google';
import AuthProvider from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Unified | Outreach and Hospitality',
  description: 'Centralized app for O&H IITM Paradox',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/logoo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}