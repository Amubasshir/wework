import { Inter } from 'next/font/google';
import './globals.css';
import Head from './head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Wework',
  description: 'Market place for remote work',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head />
        <div className="mx-auto w-full mb-auto">{children}</div>
      </body>
    </html>
  );
}
