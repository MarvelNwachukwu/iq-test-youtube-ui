'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import mockVideos from '@/utils/mockVideos';
import { VideoPlayer } from '@/components/features/videos/VideoPlayer';
import { useState } from 'react';
import { CategoryPill } from '@/components/layout/CategoryPills';
import { useSidebar } from '@/contexts/SidebarContext';
import SimilarVideos from '@/components/features/similar-videos';
import ChannelNameTag from '@/components/watch-page/ChannelNameTag';
import VideoDetails from '@/components/features/videos/VideoDetails';
import { CommentSection } from '@/components/watch-page/CommentSection';

export default function WatchPage() {
  const isWatchPage = usePathname().includes('/watch');
  const { isCollapsed } = useSidebar();
  const searchParams = useSearchParams();
  const videoId = searchParams.get('v');
  const video = mockVideos.find((v) => v.url === `/watch?v=${videoId}`);
  const relatedVideos = mockVideos.filter(
    (v) => v.url !== `/watch?v=${videoId}`
  );

  const categories = ['All', `From ${video?.channelName}`];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const hideSidebar = isWatchPage || isCollapsed;

  if (!video) return null;
  return (
    <main
      className={`pt-14 transition-all duration-300 ${
        hideSidebar ? 'md:pl-20' : 'md:pl-64'
      }`}
    >
      <div className='max-w-[1800px] mx-auto p-4 flex flex-col lg:flex-row gap-16'>
      <section className='flex-1'>
          <VideoPlayer
            thumbnail={video.thumbnail}
            title={video.title}
            duration={video.duration}
          />

          <VideoDetails
            title={video.title}
            views={video.views}
            uploadedAt={video.uploadedAt}
          />
          <ChannelNameTag
            channelAvatar={video.channelAvatar}
            channelName={video.channelName}
          />
          <CommentSection />
        </section>

        <aside className='lg:w-[400px] flex-shrink-0'>
          <nav className='flex items-center gap-3 mb-4'>
            {categories.map((category) => (
              <CategoryPill
                key={category}
                category={category}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            ))}
          </nav>
          <div className='grid gap-3'>
            {relatedVideos.map((video) => (
              <SimilarVideos
                thumbnail={video.thumbnail}
                title={video.title}
                channelName={video.channelName}
                views={video.views}
                uploadedAt={video.uploadedAt}
                duration={video.duration}
                videoId={video.url}
                key={video.id}
              />
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
