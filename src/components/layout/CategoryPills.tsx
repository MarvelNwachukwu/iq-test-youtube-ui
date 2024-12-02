'use client';

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
  return (
    <div className='sticky top-14 w-full bg-[#0f0f0f] z-40'>
      <div className='flex gap-3 px-4 overflow-x-auto pb-4 pt-3 scrollbar-hide'>
        {categories.map((category) => (
          <CategoryPill
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </div>
    </div>
  );
};
