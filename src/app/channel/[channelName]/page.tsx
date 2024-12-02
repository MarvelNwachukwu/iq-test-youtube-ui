'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import mockVideos from '@/utils/mockVideos';
import { VideoCard } from '@/components/features/videos/VideoCard';
import Image from 'next/image';
import { Usable, use, useState } from 'react';
import SubscribeButton from '@/components/buttons/Subscribe';
import ChannelCategories from '@/components/channel-page/channel-categories';
import { ChevronRight } from 'lucide-react';
import { VideoPlayer } from '@/components/features/videos/VideoPlayer';

type Params = Promise<{ channelName: string }>;

export default function ChannelPage(props: { params: Params }) {
  const { isCollapsed } = useSidebar();
  const [selectedCategory, setSelectedCategory] = useState('Home');

  const paramsFromUrl = use(
    props.params as unknown as Usable<{
      channelName: string;
    }>
  );

  const displayName = paramsFromUrl.channelName
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const channelVideos = mockVideos.filter(
    (video) => video.channelName.toLowerCase() === displayName.toLowerCase()
  );

  const channelAvatar = channelVideos[0]?.channelAvatar || '/avatars/1.svg';

  return (
    <main
      className={`pt-14 transition-all duration-300 bg-black min-h-screen ${
        isCollapsed ? 'md:pl-20' : 'md:pl-64'
      }`}
    >
      <div className='h-[150px] sm:h-[200px] bg-gradient-to-r from-blue-500 to-purple-500' />

      <div className='pb-0 pt-4 px-4 sm:px-8 md:px-20 border-b border-gray-800 bg-[#181818]'>
        <div className='flex items-center gap-4 sm:gap-6 mb-4'>
          <Image
            src={channelAvatar}
            alt={displayName}
            width={60}
            height={60}
            className='sm:w-[80px] sm:h-[80px] rounded-full border-4 border-[#0f0f0f]'
          />
          <div className='flex-1'>
            <h1 className='text-xl sm:text-2xl font-bold text-white'>
              {displayName}
            </h1>
            <p className='text-gray-400 text-xs sm:text-sm mt-1'>
              1.2M subscribers
            </p>
          </div>
          <SubscribeButton />
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0'>
          <ChannelCategories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <ChevronRight className='hidden sm:block w-6 h-6 text-gray-400' />
        </div>
      </div>

      <section className='px-4 sm:px-8 md:px-20'>
        <div className='flex flex-col lg:flex-row gap-4 p-4 pb-8 border-b-2 border-gray-800'>
          <div className='w-full lg:w-[500px] aspect-video'>
            <VideoPlayer {...channelVideos[0]} />
          </div>
          <div className='flex-1 max-w-full lg:max-w-[600px]'>
            <h1 className='text-lg sm:text-xl font-bold text-white'>
              {channelVideos[0].title}
            </h1>
            <p className='text-gray-400 text-xs sm:text-sm font-bold my-2 sm:my-4'>
              {channelVideos[0].views.toLocaleString()} views . 3 weeks ago
            </p>
            <p className='text-sm sm:text-base'>
              Chris Fisher, also known as the Blind Woodturner, learned his
              craft by listening to hundreds of hours of YouTube videos and
              experimenting in his workshop. Now he&apos;s a YouTube creator
              himself, sells his products worldwide, and does demonstrations all
              around the country.
            </p>
          </div>
        </div>

        {selectedCategory === 'Videos' && (
          <div className='pt-4 sm:pt-8'>
            <p className='text-white text-base sm:text-lg font-bold px-4'>
              Videos
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
              {channelVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'Home' && (
          <div className='pt-4 sm:pt-8'>
            <p className='text-white text-base sm:text-lg font-bold px-4'>
              Search on 21
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
              {Array.from(Array(5)).map((_, index) => (
                <VideoCard key={index} {...mockVideos[index]} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
