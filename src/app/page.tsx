'use client';

import { CategoryPills } from '@/components/layout/CategoryPills';
import { useMemo, useState } from 'react';
import { VideoCard } from '@/components/features/videos/VideoCard';
import mockVideos from '@/utils/mockVideos';
import { useSidebar } from '@/contexts/SidebarContext';
import { useSearchQuery } from "@/contexts/SearchQueryContext";

const categories = [
  'All',
  'Gaming',
  'Rockstar Games',
  'Space Marine',
  'Science fiction',
  'Music',
  'Superheroes',
  'Engines',
  'Mixes',
  'Trailers',
  'Stealth games',
  'Audio commentaries',
  'Simulations',
  'Wealth',
  'Live',
  'Thrillers',
  'Frontend Development',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Chakra UI',
  'Web Development',
  'JavaScript',
  'TypeScript',
  'CSS Tricks',
  'HTML5',
  'UI/UX Design',
  'Design Systems',
  'Figma',
  'Web Animations',
  'Node.js',
  'Firebase',
  'AWS',
  'Web Performance',
  'Agile Development',
  'DevOps',
  'Git & GitHub',
  'Open Source Projects',
  'Web Accessibility',
  'Responsive Design',
  'GraphQL',
  'Web Security',
  'Frontend Frameworks',
  'Jamstack',
  'Software Architecture',
  'Web3',
  'Crypto Development',
  'Machine Learning for Web',
  'AI-Powered Websites',
  'Tech News',
  'Programming Tutorials',
  'Coding Challenges',
  'Code Reviews',
  'Productivity Hacks',
  'Startup Culture',
  'Tech Conferences',
  'Podcasts for Developers',
  'OpenAI & GPT',
  'Software Testing',
  'Jest & Testing Libraries',
  'Career Advice for Developers',
  'Freelancing Tips',
  'Digital Nomad Lifestyle',
];

export default function Home() {
  const { isCollapsed } = useSidebar();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { searchQuery } = useSearchQuery();
  

  const filteredVideos = useMemo(() => {
    return mockVideos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channelName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' ||
        video.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        video.channelName
          .toLowerCase()
          .includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main
      className={`pt-14 transition-all duration-300 ${
        isCollapsed ? 'md:pl-20' : 'md:pl-64'
      }`}
    >
      <CategoryPills
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {filteredVideos.length === 0 ? (
          <div className='text-center text-gray-400 mt-8'>
            No videos found matching your search criteria
          </div>
        ) : (
          <>
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}
