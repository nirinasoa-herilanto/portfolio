import '../styles/globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { AppStoreProvider } from '@nhr/store';
import { Header, ThemeWrapper } from '@nhr/components';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'] });

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
        <ThemeWrapper>
          <AppStoreProvider>
            <Header />
            <main className="fit">{children}</main>
          </AppStoreProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
