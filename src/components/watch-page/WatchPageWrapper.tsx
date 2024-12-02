import mockVideos from '@/utils/mockVideos';
import SimilarVideos from '../features/similar-videos';
import VideoDetails from '../features/videos/VideoDetails';
import { VideoPlayer } from '../features/videos/VideoPlayer';
import { CategoryPill } from '../layout/CategoryPills';
import ChannelNameTag from './ChannelNameTag';
import { CommentSection } from './CommentSection';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const WatchPageWrapper = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get('v');
  const video = mockVideos.find((v) => v.url === `/watch?v=${videoId}`);
  const relatedVideos = mockVideos.filter(
    (v) => v.url !== `/watch?v=${videoId}`
  );

  const categories = ['All', `From ${video?.channelName}`];
  const [selectedCategory, setSelectedCategory] = useState('All');


  if (!video) return null;

  return (
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
  );
};

export default WatchPageWrapper;
