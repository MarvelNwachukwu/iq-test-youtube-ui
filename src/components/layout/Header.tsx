'use client';

import Image from "next/image";
import Link from "next/link";
import { AppIcon } from "../../../public/icons/app-icon";
import { Bell, Menu, Search } from "lucide-react";
import { CreateIcon } from "../../../public/icons/create";
import { Mic } from "../../../public/icons/mic";
import { useRouter, useSearchParams } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";
import { useState } from "react";
import { useSearchQuery } from "@/contexts/SearchQueryContext";


export const Header = () => {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <header className='fixed top-0 left-0 w-full bg-[#0f0f0f] z-50 flex justify-between items-center px-4 h-14'>
      <nav className='flex items-center gap-4'>
        <button
          className='p-2 hover:bg-[#272727] rounded-full'
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className='w-6 h-6 text-white' />
        </button>
        <Link href='/' aria-label="YouTube Home">
          <Image
            src='/Youtube-Logo.svg'
            alt='YouTube'
            width={90}
            height={20}
            className='hidden sm:block'
          />
        </Link>
      </nav>

      <form className='flex-1 max-w-[600px] flex items-center gap-4' onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full px-4 py-[6px] bg-[#121212] border border-[#303030] rounded-l-sm focus:outline-none focus:border-[#1c62b9] text-white placeholder-[#888] text-base'
        />
        <button 
          className='px-6 py-2 bg-[#222222] border border-l-0 border-[#303030] rounded-r-sm hover:bg-[#272727] flex items-center justify-center'
          aria-label="Search"
        >
          <Search className='w-5 h-5 text-white' />
        </button>
        <button
          className='p-2 bg-[#222222] hover:bg-[#000] rounded-full hidden sm:flex'
          onClick={handleSearch}
          aria-label="Voice search"
        >
          <Mic className='w-6 h-6 text-white' />
        </button>
      </form>

      <nav className='flex items-center gap-2'>
        <button className='p-2 hover:bg-[#272727] rounded-full hidden sm:flex' aria-label="Create">
          <CreateIcon className='w-6 h-6 text-white' />
        </button>
        <button className='p-2 hover:bg-[#272727] rounded-full hidden sm:flex' aria-label="Apps">
          <AppIcon className='w-6 h-6 text-white' />
        </button>
        <button className='p-2 hover:bg-[#272727] rounded-full hidden sm:flex' aria-label="Notifications">
          <Bell className='w-6 h-6 text-white' />
        </button>
        <button className='w-8 h-8 rounded-full overflow-hidden ml-2' aria-label="Profile">
          <Image
            src='/avatars/account-owner.png'
            alt='Profile'
            width={32}
            height={32}
            className='object-cover'
          />
        </button>
      </nav>
    </header>
  );
};
