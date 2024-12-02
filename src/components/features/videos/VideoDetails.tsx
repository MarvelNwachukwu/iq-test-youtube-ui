import { formatDistance } from 'date-fns';
import { MoreHorizontal } from 'lucide-react';
import SaveIcon from '../../../../public/icons/save';
import ThumbsDown from '../../../../public/icons/thumbs-down';
import ThumbsUp from '../../../../public/icons/thumbs-up';
import ShareIcon from "../../../../public/icons/share";

const VideoDetails = ({
  title,
  views,
  uploadedAt,
}: {
  title: string;
  views: number;
  uploadedAt: Date;
}) => {
  return (
    <section className='mt-4 flex flex-col gap-2'>
      <h1 className='text-xl font-medium text-white'>{title}</h1>

      <div className='flex items-center justify-between'>
        <div>
          <p className='text-gray-400 text-lg font-medium'>
            {views.toLocaleString()} Views .{' '}
            {formatDistance(uploadedAt, new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>

        <nav className='flex items-center gap-2'>
          <div className='flex rounded-full'>
            <button className='flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] rounded-l-full' aria-label="Like">
              <ThumbsUp className='w-5 h-5' />
              <span className='font-bold'>1.7K</span>
            </button>
            <button className='flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] rounded-r-full' aria-label="Dislike">
              <ThumbsDown className='w-5 h-5' />
              <span className='font-bold '>632</span>
            </button>
          </div>
          <button className='flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] rounded-full' aria-label="Share">
            <ShareIcon className='w-5 h-5' />
            <span>Share</span>
          </button>
          <button className='flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] rounded-full' aria-label="Save">
            <SaveIcon className='w-5 h-5' />
            <span>SAVE</span>
          </button>
          <button className='p-2 hover:bg-[#3f3f3f] rounded-full' aria-label="More options">
            <MoreHorizontal className='w-5 h-5' />
          </button>
        </nav>
      </div>
    </section>
  );
};

export default VideoDetails;
