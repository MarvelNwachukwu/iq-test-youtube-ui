'use client';

import { formatDistance } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SimilarVideos = ({
  thumbnail,
  title,
  channelName,
  views,
  uploadedAt,
  duration,
  videoId,
}: {
  thumbnail: string;
  title: string;
  channelName: string;
  views: number;
  uploadedAt: Date;
  duration: string;
  videoId: string;
}) => {
  const router = useRouter();
  return (
    <article
      className='flex gap-3 cursor-pointer'
      onClick={() => {
        router.push(`${videoId}`);
      }}
    >
      <figure className='h-24 w-40 relative overflow-hidden shrink-0'>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className='object-cover hover:scale-105 transition-transform'
        />
        <figcaption className='absolute z-10 bottom-1 right-1 bg-black px-2 py-1 text-xs'>
          {duration}
        </figcaption>
      </figure>
      <section>
        <h3 className='text-white line-clamp-2'>{title}</h3>
        <p className='text-sm text-gray-400'>{channelName}</p>
        <p className='text-sm text-gray-400'>
          {`${views.toLocaleString()} Views . ${formatDistance(
            uploadedAt,
            new Date(),
            { addSuffix: true }
          )}`}
        </p>
      </section>
    </article>
  );
};

export default SimilarVideos;
