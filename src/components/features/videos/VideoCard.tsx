import Image from 'next/image';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import { generateChannelLink } from '@/utils/generateChannelLink';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: number;
  uploadedAt: Date;
  duration: string;
  url: string;
}

export const VideoCard = ({
  thumbnail,
  title,
  channelName,
  channelAvatar,
  views,
  uploadedAt,
  duration,
  url,
}: VideoCardProps) => {
  const channelLink = generateChannelLink(channelName);

  return (
    <article>
      <Link href={url} className='flex flex-col gap-3 cursor-pointer'>
        <figure className='relative aspect-video overflow-hidden'>
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

        <footer className='flex gap-3'>
          <aside className='flex-shrink-0 h-10 w-10'>
            <Image
              src={channelAvatar}
              alt={channelName}
              width={'36'}
              height={'36'}
              className='rounded-full'
            />
          </aside>

          <div>
            <h3 className='font-medium text-white line-clamp-2'>{title}</h3>
            <Link
              href={`/${channelLink}`}
              className='text-gray-400 hover:text-white text-sm'
            >
              <p>{channelName}</p>
            </Link>
            <p className='text-sm text-gray-400'>
              {`${views.toLocaleString()} views • ${formatDistance(
                uploadedAt,
                new Date(),
                { addSuffix: true }
              )}`}
            </p>
          </div>
        </footer>
      </Link>
    </article>
  );
};
