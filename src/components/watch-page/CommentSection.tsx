import Image from 'next/image';
import SortIcon from '../../../public/icons/sort';
import Comment from "./Comments";

interface CommentI {
  id: number;
  avatar: string;
  name: string;
  timeAgo: string;
  text: string;
  likes: number;
}

const comments: CommentI[] = [
  {
    id: 1,
    avatar: '/avatars/James.png',
    name: 'James Gouse',
    timeAgo: '8 hours ago',
    text: 'Wow, world is full of different skills',
    likes: 3,
  },
  {
    id: 2,
    avatar: '/avatars/Alan.png',
    name: 'Alan Cooper',
    timeAgo: '4 days ago',
    text: 'Can you provide?',
    likes: 0,
  },
];

export const CommentSection = () => {
  return (
    <section className='mt-8'>
      <header className='flex items-center gap-8 mb-8'>
        <h2 className='text-lg font-medium text-white'>286 Comments</h2>
        <button className='text-sm text-white hover:text-white rounded-md cursor-pointer flex items-center gap-1 uppercase font-bold'>
          <SortIcon className='w-4 h-4' />
          <span>Sort by</span>
        </button>
      </header>
      <form className='flex items-center gap-4 mb-6'>
        <Image
          src='/avatars/1.svg'
          alt='Your Avatar'
          width={40}
          height={40}
          className='rounded-full shrink-0 grow-0'
        />
        <input
          type='text'
          placeholder='Add a public comment...'
          className='flex-1 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none'
        />
      </form>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          avatar={comment.avatar}
          name={comment.name}
          timeAgo={comment.timeAgo}
          text={comment.text}
          likes={comment.likes}
        />
      ))}
    </section>
  );
};
