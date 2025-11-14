import { GoogleTagManager } from '@next/third-parties/google';
import { Poppins } from 'next/font/google';

import { FooterComponent } from '../client/FooterComponent';
import { HeaderComponent } from '../client/HeaderComponent';

import { env } from '@/shared/libs/env';
import { cn } from '@/shared/libs/utils';
import '@/shared/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="ja"
      className={cn(poppins.className, 'select-none scroll-smooth')}
    >
      <body className="text-gray-600">
        <HeaderComponent />
        <main className="min-h-screen bg-white">{children}</main>
        <FooterComponent />
      </body>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
    </html>
  );
};
