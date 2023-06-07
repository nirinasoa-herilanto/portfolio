import '../styles/globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { AppStoreProvider } from '@nhr/store';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Nirinasoa Herilanto',
  description:
    'Hello guys, here is my portfolio as a full-stack web and React.JS developer',
  keywords: `full-stack web developer, React.JS developer`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppStoreProvider>
          <main>{children}</main>
        </AppStoreProvider>
      </body>
    </html>
  );
}
