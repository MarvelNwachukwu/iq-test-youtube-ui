import Image from 'next/image';
import ThumbsDown from '../../../public/icons/thumbs-down';
import ThumbsUp from '../../../public/icons/thumbs-up';
import { useState } from 'react';

const Comment = ({
  avatar,
  name,
  timeAgo,
  text,
  likes,
}: {
  avatar: string;
  name: string;
  timeAgo: string;
  text: string;
  likes: number;
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  return (
    <article className='flex flex-col gap-4 mb-6'>
      <header className='flex gap-4 items-start'>
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className='rounded-full'
        />
        <div>
          <div className='flex items-center gap-2'>
            <h3 className='text-sm font-medium text-white'>{name}</h3>
            <time className='text-xs text-gray-400'>{timeAgo}</time>
          </div>
          <p className='text-sm text-white mt-1'>{text}</p>
          <nav className='flex items-center gap-4 mt-2'>
            <button
              className='flex items-center gap-2 text-gray-400 hover:text-white'
              aria-label='Like'
            >
              <ThumbsUp className='w-4 h-4' />
              <span>{likes}</span>
            </button>
            <button
              className='flex items-center gap-1 text-gray-400 hover:text-white'
              aria-label='Dislike'
            >
              <ThumbsDown className='w-4 h-4' />
            </button>
            <button
              className='text-gray-400 hover:text-white uppercase'
              onClick={() => setShowReplyInput(!showReplyInput)}
              aria-label="Reply"
            >
              Reply
            </button>
          </nav>
        </div>
      </header>
      {showReplyInput && (
        <form>
          <input
            type='text'
            placeholder='Add a reply...'
            className='w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none'
          />
        </form>
      )}
    </article>
  );
};

export default Comment;
