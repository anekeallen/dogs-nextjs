import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import Footer from './Components/Footer';
import Header from './Components/Header';
import { UserStorage } from './UserContext';
// import { useRouter } from 'next/router';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Dogs',
  description: ''
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();

  return (
    <UserStorage>
      <html lang="pt-BR">
        <body className={rubik.className}>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </UserStorage>
  );
}
