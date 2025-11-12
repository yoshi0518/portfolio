import RootLayoutWrapper from '@/shared/components/layout/server/RootLayoutWrapper';
import { env } from '@/shared/env';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '●●●',
  description: '●●●',
  keywords: ['●●●', '●●●', '●●●'],
  openGraph: {
    title: '●●●',
    description: '●●●',
    url: 'https://xxx.yoshi0518.com',
    siteName: '●●●',
  },
  robots: {
    index: !env.DEBUG, // falseでnoindex
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <RootLayoutWrapper>{children}</RootLayoutWrapper>;

export default RootLayout;
