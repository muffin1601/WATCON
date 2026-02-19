import './globals.css';
import { Raleway } from 'next/font/google';
import LuxuryCursor from '@/components/LuxuryCursor';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.variable}>
        <LuxuryCursor />
        {children}
      </body>
    </html>
  );
}
