'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin,  } from 'lucide-react';
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from '@/components/ui/dialog';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  location: string;
  duration: string;
  budget: string;
  category: string;
  status: string;
  description: string;
  image: string;
  highlights: string[];
}

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const featuredProjects: Project[] = [
    {
      id: 'golden-gate-extension',
      title: 'Golden Gate Extension Bridge',
      location: 'Lagos',
      duration: '2020-2023',
      budget: '#250M',
      category: 'Transportation',
      status: 'Completed',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?',
      // description:
      //   'A revolutionary cable-stayed bridge spanning 1.2 miles, featuring earthquake-resistant design and smart traffic management systems.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOCyq84DhcEOR2N5xfEiUUmvigTK_oyWLyw&s',
      highlights: [
        'Seismic isolation technology',
        'Smart traffic control systems',
        'Sustainable materials usage',
        'LEED Gold certification',
      ],
    },
    {
      id: 'metro-water-treatment',
      title: 'Metro Water Treatment Facility',
      location: 'Abuja',
      duration: '2019-2022',
      budget: '#180M',
      category: 'Water Resources',
      status: 'Completed',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?',
      // description:
      //   'State-of-the-art water treatment plant serving 800,000 residents with advanced filtration and smart monitoring systems.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_163ZGY7uX6k9qAPQkag7PC1S9qt2l4Y-g&s',
      highlights: [
        'Advanced membrane filtration',
        'Real-time quality monitoring',
        'Energy-efficient design',
        'Capacity for future expansion',
      ],
    },
    {
      id: 'i95-corridor',
      title: 'Interstate 95 Corridor Improvement',
      location: 'Benin City',
      duration: '2021-2024',
      budget: '#320M',
      category: 'Transportation',
      status: 'In Progress',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?',
      // description:
      //   '25-mile highway expansion project including new interchanges, smart lighting, and dedicated electric vehicle lanes.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl9zR27NwFEsKdlCMsO_B7W-P5FZ2fAT0-w&s',
      highlights: [
        'Electric vehicle infrastructure',
        'Adaptive traffic signals',
        'Noise reduction barriers',
        'Wildlife crossing bridges',
      ],
    },
  ];


   useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  

   const handleProjectLearnMore = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

   const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
     <section 
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-24 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Featured Building Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 lg:mb-6"></div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most innovative and impactful building engineering achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="h-48 lg:h-56 bg-cover bg-center relative overflow-hidden" style={{backgroundImage: `url(${project.image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="outline" className="text-white border-white mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4 lg:p-6">
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">{project.description}l</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="hover:scale-105 transition-transform cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
                      onClick={() => handleProjectLearnMore(project)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.location}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Duration</p>
                  <p>{selectedProject.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Budget</p>
                  <p>{selectedProject.budget}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <Badge variant="outline">{selectedProject.status}</Badge>
                </div>
              </div>
              <p>{selectedProject.description}</p>
              <div>
                <h4 className="font-medium mb-2">Project Highlights:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={`${selectedProject.id}-highlight-${i}`}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog> */}

        <ProjectModal 
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
      />
    </>
  );
};

export default FeaturedProjects;