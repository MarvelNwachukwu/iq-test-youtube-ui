import { Roboto } from 'next/font/google';
import { SidebarProvider } from '@/contexts/SidebarContext';
import './globals.css';
import type { Metadata } from 'next';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { SearchQueryProvider } from '@/contexts/SearchQueryContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'YouTube',
  description: 'YouTube UI By @MarvelCodes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} font-roboto antialiased`}>
        <div className='min-h-screen bg-[#0f0f0f]'>
          <SearchQueryProvider>
            <SidebarProvider>
              <Header />
              <Sidebar />
              {children}
            </SidebarProvider>
          </SearchQueryProvider>
        </div>
      </body>
    </html>
  );
}
