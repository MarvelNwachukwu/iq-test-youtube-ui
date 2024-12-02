import { Search } from 'lucide-react';
import { useState } from "react";

type ChannelCategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const ChannelCategories = ({
  selectedCategory,
  setSelectedCategory,
}: ChannelCategoriesProps) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const channelCategories = [
    'Home',
    'Videos',
    'Playlists',
    'Community',
    'Channels',
    'About',
  ];

  return (
    <div className='w-full overflow-x-auto no-scrollbar'>
      <div className='flex flex-row gap-2 sm:gap-4 min-w-max items-center'>
        {channelCategories.map((category) => (
          <button
            key={category}
            className={`py-2 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-bold uppercase whitespace-nowrap
              ${
                selectedCategory === category
                  ? 'border-b-2 border-gray-400 text-white'
                  : 'text-gray-400'
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}{' '}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className='lg:ml-10'
          aria-label='Search'
        >
          <Search className='w-6 h-6 text-gray-400' />
        </button>
        {showSearch && (
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search'
            className='bg-[#0f0f0f] text-white px-4 py-2 rounded-lg'
          />
        )}
      </div>
    </div>
  );
};

export default ChannelCategories;
