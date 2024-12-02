'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from "@/contexts/SidebarContext";

export default function NotFound() {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={`min-h-screen whitebg- flex flex-col items-center justify-center gap-6 px-4 ${
        isCollapsed ? 'md:pl-20' : 'md:pl-64'
      }`}
    >
      <Image src='/Youtube-Logo.svg' alt='YouTube' width={120} height={30} />

      <div className='text-center'>
        <h1 className='text-2xl font-bold text-white mb-2'>
          Oops! This feature isn&apos;t available yet
        </h1>
        <p className='text-gray-400 mb-6'>
          We&apos;re working hard to bring you more features. Stay tuned!
        </p>
        <Link
          href='/'
          className='inline-flex items-center justify-center px-6 py-3 bg-[#CC0000] text-white font-medium rounded-full hover:bg-[#990000] transition-colors'
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
