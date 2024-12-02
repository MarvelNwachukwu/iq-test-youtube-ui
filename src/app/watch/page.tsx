'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import WatchPageWrapper from '@/components/watch-page/WatchPageWrapper';

export default function WatchPage() {
  const isWatchPage = usePathname().includes('/watch');
  const { isCollapsed } = useSidebar();

  const hideSidebar = isWatchPage || isCollapsed;

  return (
    <main
      className={`pt-14 transition-all duration-300 ${
        hideSidebar ? 'md:pl-20' : 'md:pl-64'
      }`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <WatchPageWrapper />
      </Suspense>
    </main>
  );
}
