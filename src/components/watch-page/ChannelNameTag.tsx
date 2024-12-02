import { generateChannelLink } from '@/utils/generateChannelLink';
import Image from 'next/image';
import Link from 'next/link';
import SubscribeButton from "../buttons/Subscribe";

const ChannelNameTag = ({
  channelAvatar,
  channelName,
}: {
  channelAvatar: string;
  channelName: string;
}) => {
  const channelLink = generateChannelLink(channelName);

  return (
    <div className='flex flex-col sm:flex-row gap-4 items-start py-4 border-b border-t border-gray-600 my-4'>
      <Link href={`/${channelLink}`} className='flex-shrink-0'>
        <Image
          src={channelAvatar}
          alt={channelName}
          width={40}
          height={40}
          className='rounded-full shrink-0 grow-0'
        />
      </Link>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex item-center gap-4'>
            <div>
              <Link href={`/${channelLink}`}>
                <h3 className='font-medium text-white'>{channelName}</h3>
              </Link>
              <p className='text-sm text-gray-400'>1.2M subscribers</p>
            </div>
          </div>
          <SubscribeButton />
        </div>
        <p className='text-sm text-white'>
          Chris Fisher, also known as the Blind Woodturner, learned his craft by
          listening to hundreds of hours of YouTube videos and experimenting in
          his workshop. Now he&apos;s a YouTube creator himself, sells his
          products worldwide, and does demonstrations all around the country.
        </p>
        <div className='w-fit text-sm text-gray-400 hover:text-white rounded-md cursor-pointer'>
          Show More
        </div>
      </div>
    </div>
  );
};

export default ChannelNameTag;
