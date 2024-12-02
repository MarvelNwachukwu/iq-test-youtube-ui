'use client';

import {
  Home,
  Compass,
  Clock,
  ThumbsUp,
  PlaySquare,
  History,
  ChevronDown,
  Youtube,
  Baby,
  Flag,
  HelpCircle,
  MessageSquare,
  Music2,
  Settings,
  Gamepad,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Subscriptions } from '../../../public/icons/subscription';
import { useSidebar } from '@/contexts/SidebarContext';
import { usePathname } from 'next/navigation';
import { generateChannelLink } from '@/utils/generateChannelLink';

const mainNavItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Compass, label: 'Explore', href: '/explore' },
  { icon: Subscriptions, label: 'Subscriptions', href: '/subscriptions' },
  { icon: PlaySquare, label: 'Library', href: '/library' },
  { icon: History, label: 'History', href: '/history' },
  { icon: PlaySquare, label: 'Your Videos', href: '/your-videos' },
  { icon: Clock, label: 'Watch Later', href: '/watch-later' },
  { icon: ThumbsUp, label: 'Liked Videos', href: '/liked' },
];

const subscriptions = [
  { name: 'James Gouse', avatar: '/avatars/James.png' },
  { name: 'Alan Cooper', avatar: '/avatars/Alan.png' },
  { name: 'Marcus Levin', avatar: '/avatars/Marcus.png' },
  { name: 'Alexis Sears', avatar: '/avatars/Alexis.png' },
  { name: 'Jesica Lambert', avatar: '/avatars/Jessica.png' },
  { name: 'Anna White', avatar: '/avatars/Anna.png' },
  { name: 'Skylar Dias', avatar: '/avatars/Skylar.png' },
];

const moreFromYoutube = [
  { icon: Youtube, label: 'YouTube Premium', href: '#' },
  { icon: Gamepad, label: 'Gaming', href: '#' },
  { icon: Music2, label: 'Live', href: '#' },
  { icon: Baby, label: 'Sports', href: '#' },
];

const helpItems = [
  { icon: Settings, label: 'Settings', href: '#' },
  { icon: Flag, label: 'Report history', href: '#' },
  { icon: HelpCircle, label: 'Help', href: '#' },
  { icon: MessageSquare, label: 'Send feedback', href: '#' },
];

const footerLinks = [
  ['About', 'Press', 'Copyright'],
  ['Contact us', 'Creators'],
  ['Advertise', 'Developers'],
  ['Terms', 'Privacy', 'Policy & Safety'],
  ['How YouTube works'],
  ['Test new features'],
];

export const Sidebar = () => {
  const { isCollapsed } = useSidebar();

  const pathname = usePathname();
  const isWatchPage = pathname === '/watch';
  const hideSidebar = isWatchPage || isCollapsed;

  return (
    <aside
      className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] text-white overflow-y-auto hidden md:block transition-all duration-300 ${
        hideSidebar ? 'w-20 bg-transparent' : 'w-64 bg-[#212121]'
      } ${isWatchPage ? '!hidden' : ''}`}
    >
      <div
        className={`flex flex-col gap-2 py-3 ${hideSidebar ? 'px-0' : 'px-2'}`}
      >
        {/* Main Navigation */}
        <div className='flex flex-col'>
          {mainNavItems.slice(0, 3).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center px-3 py-2 hover:bg-[#272727] rounded-lg ${
                hideSidebar ? 'flex-col justify-center gap-3' : 'gap-6'
              }`}
            >
              <item.icon className='w-6 h-6' />
              <span
                className={`${
                  hideSidebar ? 'text-center text-xs scale-95' : 'text-sm'
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* More Navigation */}
        <div
          className={`flex flex-col border-t border-gray-700 pt-4 mt-2 ${
            hideSidebar ? 'hidden' : ''
          }`}
        >
          {mainNavItems.slice(3).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='flex items-center gap-6 px-3 py-2 hover:bg-[#272727] rounded-lg'
            >
              <item.icon className='w-6 h-6' />
              <span className='text-sm'>{item.label}</span>
            </Link>
          ))}
          <button className='flex items-center gap-6 px-3 py-2 hover:bg-[#272727] rounded-lg'>
            <ChevronDown className='w-6 h-6' />
            <span className='text-sm'>Show More</span>
          </button>
        </div>

        {/* Subscriptions */}
        <div
          className={`border-t border-gray-700 pt-4 mt-2 ${
            hideSidebar ? 'hidden' : ''
          }`}
        >
          <h3 className='px-3 text-base font-medium mb-2 text-[#AAAAAA]'>
            SUBSCRIPTIONS
          </h3>
          {subscriptions.map((sub) => (
            <Link
              key={sub.name}
              href={`/${generateChannelLink(sub.name)}`}
              className='flex items-center gap-6 px-3 py-2 hover:bg-[#272727] rounded-lg'
            >
              <div className='w-6 h-6 rounded-full overflow-hidden'>
                <Image
                  src={sub.avatar}
                  alt={sub.name}
                  width={24}
                  height={24}
                  className='object-cover'
                />
              </div>
              <span className='text-sm'>{sub.name}</span>
            </Link>
          ))}
          <button className='flex items-center gap-6 px-3 py-2 hover:bg-[#272727] rounded-lg'>
            <ChevronDown className='w-6 h-6' />
            <span className='text-sm'>Show 13 more</span>
          </button>
        </div>

        {/* More from YouTube */}
        <div
          className={`border-t border-gray-700 pt-4 mt-2 ${
            hideSidebar ? 'hidden' : ''
          }`}
        >
          <h3 className='px-3 text-base font-medium mb-2 text-[#AAAAAA]'>
            MORE FROM YOUTUBE
          </h3>
          {moreFromYoutube.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='flex items-center gap-6 px-3 py-2 hover:bg-[#272727] rounded-lg'
            >
              <item.icon className='w-6 h-6' />
              <span className='text-sm'>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Settings and Help */}
        <div
          className={`border-t border-gray-800 pt-3 pb-2 ${
            hideSidebar ? 'hidden' : ''
          }`}
        >
          {helpItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className='flex items-center gap-6 px-3 py-2 hover:bg-[#272727] rounded-lg'
            >
              <item.icon className='w-5 h-5' />
              <span className='text-sm'>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div
          className={`border-t border-gray-800 px-4 pt-4 ${
            hideSidebar ? 'hidden' : ''
          }`}
        >
          <div className='flex flex-wrap gap-x-2 text-sm text-gray-400'>
            {footerLinks.map((group, i) => (
              <div key={i} className='flex flex-wrap gap-x-2'>
                {group.map((link) => (
                  <a key={link} href='#' className='hover:underline'>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className='text-xs text-gray-400 mt-4'>© 2024 Google LLC</div>
        </div>
      </div>
    </aside>
  );
};
