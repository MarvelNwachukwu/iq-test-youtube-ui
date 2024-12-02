'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import mockVideos from '@/utils/mockVideos';
import { VideoCard } from '@/components/features/videos/VideoCard';
import Image from 'next/image';
import { Usable, use, useState } from 'react';
import SubscribeButton from '@/components/buttons/Subscribe';
import ChannelCategories from '@/components/channel-page/channel-categories';
import { ChevronRight, Search } from 'lucide-react';
import { VideoPlayer } from '@/components/features/videos/VideoPlayer';

type Params = Promise<{ channelName: string }>


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
      <div className='h-[200px] bg-gradient-to-r from-blue-500 to-purple-500' />

      <div className='pb-0 pt-4 px-20  border-b border-gray-800 bg-[#181818]'>
        <div className='flex items-center gap-6 mb-4'>
          <Image
            src={channelAvatar}
            alt={displayName}
            width={80}
            height={80}
            className='rounded-full border-4 border-[#0f0f0f]'
          />
          <div className='flex-1'>
            <h1 className='text-2xl font-bold text-white'>{displayName}</h1>
            <p className='text-gray-400 text-sm mt-1'>1.2M subscribers</p>
          </div>
          <SubscribeButton />
        </div>

        <div className='flex items-center justify-between'>
          <ChannelCategories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className='flex items-center gap-2 justify-between w-1/3'>
            <Search className='w-6 h-6 text-gray-400' />
            <ChevronRight className='w-6 h-6 text-gray-400' />
          </div>
        </div>
      </div>

      <section className='px-20'>
        <div className='flex gap-4 p-4 pb-8 border-b-2 border-gray-800'>
          <div className='h-[280px] w-[500px] bg-[#7e3939]'>
            <VideoPlayer {...channelVideos[0]} />
          </div>
          <div className='flex-1 max-w-[600px]'>
            <h1 className='text-xl font-bold text-white'>
              {channelVideos[0].title}
            </h1>
            <p className='text-gray-400 text-sm font-bold my-4'>
              {channelVideos[0].views} views . 3 weeks ago
            </p>
            <p>
              Chris Fisher, also known as the Blind Woodturner, learned his
              craft by listening to hundreds of hours of YouTube videos and
              experimenting in his workshop. Now he&apos;s a YouTube creator
              himself, sells his products worldwide, and does demonstrations all
              around the country.
            </p>
          </div>
        </div>

        {selectedCategory === 'Videos' && (
          <div className='pt-8'>
            <p className='text-white text-lg font-bold'>Videos</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
              {channelVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'Home' && (
          <div className='pt-8'>
            <p className='text-white text-lg font-bold'>Search on 21</p>

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
