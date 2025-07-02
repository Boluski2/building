'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
}

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid = ({ projects, onProjectClick }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {projects.map((project) => (
        <Card 
          key={project.id} 
          className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
          onClick={() => onProjectClick(project)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden aspect-video">
              <Image
                src={project.images[0]}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority={project.id <= 3}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                {project.images.length} photos
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 py-1 rounded-full">
                {project.category}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;