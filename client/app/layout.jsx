import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import { StateProvider } from './context/StateContext';
import reducer, { initialState } from './context/StateReducers';
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
        <StateProvider initial={initialState} reducer={reducer}>
          <div className="mx-auto w-full mb-auto">
            {children}

            <Footer />
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
