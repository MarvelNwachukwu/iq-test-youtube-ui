type ChannelCategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const ChannelCategories = ({
  selectedCategory,
  setSelectedCategory,
}: ChannelCategoriesProps) => {
  const channelCategories = [
    'Home',
    'Videos',
    'Playlists',
    'Community',
    'Channels',
    'About',
  ];

  return (
    <div className='flex flex-row gap-4'>
      {channelCategories.map((category) => (
        <button
          key={category}
          className={`py-4 px-4 font-bold uppercase ${
            selectedCategory === category
              ? 'border-b-2 border-gray-400 text-white'
              : 'text-gray-400'
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ChannelCategories;
