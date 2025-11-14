import { RootLayout } from '@/shared/components/layout/server/RootLayout';
import { env } from '@/shared/libs/env';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yoshi0518's Portfolio",
  description: 'エンジニアYoshi0518のポートフォリオサイトです。',
  keywords: ['Yoshi0518', 'portfolio', 'ポートフォリオ', 'WEBエンジニア', 'ソフトウェアエンジニア', 'エンジニア'],
  openGraph: {
    title: "Yoshi0518's Portfolio",
    description: 'エンジニアYoshi0518のポートフォリオサイトです。',
    url: 'https://yoshi0518.com',
    siteName: "Yoshi0518's Portfolio",
  },
  robots: {
    index: !env.DEBUG, // falseでnoindex
  },
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <RootLayout>{children}</RootLayout>;

export default Layout;
