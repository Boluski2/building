'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base cursor-pointer"
          size={windowSize.width < 640 ? "sm" : "default"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;