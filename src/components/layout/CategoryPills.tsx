'use client';

import { useRef } from 'react';

interface CategoryPillsProps {
  categories: string[];
  selectedCategory?: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryPill = ({
  category,
  selectedCategory,
  onSelectCategory,
}: {
  category: string;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) => {
  return (
    <button
      key={category}
      className={`px-3 py-1.5 rounded-full whitespace-nowrap text-sm ${
        category === selectedCategory
          ? 'bg-white text-black'
          : 'bg-[#272727] text-white hover:bg-[#3f3f3f]'
      }`}
      onClick={() => onSelectCategory(category)}
    >
      {category}
    </button>
  );
};

export const CategoryPills = ({
  categories,
  selectedCategory = 'All',
  onSelectCategory,
}: CategoryPillsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 400;
    }
  }

  return (
    <div className='sticky top-14 w-full bg-[#0f0f0f] z-40'>
      <div className='relative flex'>
        <div 
          ref={containerRef}
          className='flex gap-3 px-4 overflow-x-auto pb-4 pt-3 scrollbar-hide scroll-smooth'
        >
          {categories.map((category) => (
            <CategoryPill
              key={category}
              category={category}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>
        <div className='absolute right-0 top-0 h-full flex items-center bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f] to-transparent w-24 justify-end pr-4'>
          <button
            onClick={handleScroll}
            className='p-2 hover:bg-[#272727]'
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
