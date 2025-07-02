'use client';

import { useState } from 'react';
import GalleryHero from './gallerys/GalleryHero';
import CategoryFilter from './gallerys/CategoryFilter';
import ProjectGrid from './gallerys/ProjectGrid';
import ImageLightbox from './gallerys/ImageLightbox';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryProjects = [
    {
      id: 1,
      title: "Metro Bridge Construction",
      category: "Bridges",
      images: [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Highway Infrastructure",
      category: "Roads",
      images: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516832970803-325be7a92aa5?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Water Treatment Plant",
      category: "Water Systems",
      images: [
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Commercial Building",
      category: "Structures",
      images: [
        "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Modern Architecture",
      category: "Structures",
      images: [
        "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Residential Complex",
      category: "Structures",
      images: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
      ]
    }
  ];

  const categories = ["All", "Bridges", "Roads", "Water Systems", "Structures"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === activeCategory);

  const totalPhotos = galleryProjects.reduce((total, project) => total + project.images.length, 0);

  const openLightbox = (project: any) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setIsLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <GalleryHero 
        projectCount={galleryProjects.length}
        totalPhotos={totalPhotos}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <ProjectGrid 
            projects={filteredProjects}
            onProjectClick={openLightbox}
          />
        </div>
      </section>

      <ImageLightbox 
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />

    </div>
  );
};

export default Gallery;
