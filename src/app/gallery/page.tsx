// 'use client';


// import { useState } from 'react';
// import { X, ChevronLeft, ChevronRight, Camera, Grid3X3, Eye } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import Image from 'next/image';

// const Gallery = () => {
//   const [selectedProject, setSelectedProject] = useState<any>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const galleryProjects = [
//     {
//       id: 1,
//       title: "Bridge Construction",
//       category: "Bridges",
//       images: [
//         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOCyq84DhcEOR2N5xfEiUUmvigTK_oyWLyw&s",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_163ZGY7uX6k9qAPQkag7PC1S9qt2l4Y-g&s",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl9zR27NwFEsKdlCMsO_B7W-P5FZ2fAT0-w&s"
//       ]
//     },
//     {
//       id: 2,
//       title: "Highway Infrastructure",
//       category: "Roads",
//       images: [
//         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
//       ]
//     },
//     {
//       id: 3,
//       title: "Building Systems",
//       category: "Building Systems",
//       images: [
//         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
//       ]
//     },
//     {
//       id: 4,
//       title: "Commercial Building",
//       category: "Structures",
//       images: [
//         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
//       ]
//     },
//     {
//       id: 5,
//       title: "Modern Architecture",
//       category: "Structures",
//       images: [
//         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
//       ]
//     },
//     {
//       id: 6,
//       title: "Residential Complex",
//       category: "Structures",
//       images: [
//         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
//       ]
//     }
//   ];

//   const categories = ["All", "Bridges", "Roads", "Building Systems", "Structures"];
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects = activeCategory === "All" 
//     ? galleryProjects 
//     : galleryProjects.filter(project => project.category === activeCategory);

//   const nextImage = () => {
//     if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   const openLightbox = (project: any) => {
//     setSelectedProject(project);
//     setCurrentImageIndex(0);
//   };

//   const closeLightbox = () => {
//     setSelectedProject(null);
//     setCurrentImageIndex(0);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       {/* Enhanced Hero Section */}
//       <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white py-20 lg:py-32 overflow-hidden animate-fade-in">
//         {/* Background Grid Pattern */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
//         {/* Animated Background Elements */}
//         <div className="absolute top-16 left-16 w-24 h-24 bg-blue-500/20 rounded-lg rotate-45 animate-spin-slow"></div>
//         <div className="absolute top-32 right-24 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse-slow"></div>
//         <div className="absolute bottom-24 left-1/3 w-20 h-20 bg-green-500/20 rounded-lg rotate-12 animate-float"></div>
//         <div className="absolute bottom-16 right-16 w-12 h-12 bg-orange-500/20 rounded-full animate-twinkle"></div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="animate-fade-in-up">
//             <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8 shadow-xl">
//               <Camera className="h-5 w-5 mr-3 text-blue-400" />
//               <span className="text-lg font-medium">Visual Portfolio</span>
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Project
//               </span>
//               <br />
//               <span className="text-white">Gallery</span>
//             </h1>
            
//             <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
//               Explore our stunning collection of completed civil engineering projects through 
//               detailed photographs showcasing innovation, craftsmanship, and engineering excellence.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <div className="flex items-center space-x-6 text-gray-300">
//                 <div className="flex items-center space-x-2">
//                   <Grid3X3 className="h-5 w-5 text-blue-400" />
//                   <span className="text-lg">{galleryProjects.length} Projects</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Eye className="h-5 w-5 text-purple-400" />
//                   <span className="text-lg">{galleryProjects.reduce((total, project) => total + project.images.length, 0)} Photos</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Decorative Bottom Section */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <div className="h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-12 sm:py-16 lg:py-20 cursor-pointer">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={activeCategory === category ? "default" : "outline"}
//                 onClick={() => setActiveCategory(category)}
//                 className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base cursor-pointer"
//                 size={window.innerWidth < 640 ? "sm" : "default"}
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>

//           {/* Project Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//             {filteredProjects.map((project, index) => (
//               <Card 
//                 key={project.id} 
//                 className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
//                 onClick={() => openLightbox(project)}
//               >
//                 <CardContent className="p-0">
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={project.images[0]}
//                       alt={project.title}
//                       className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//                     <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
//                       {project.images.length} photos
//                     </div>
//                   </div>
//                   <div className="p-4 sm:p-6">
//                     <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                       {project.title}
//                     </h3>
//                     <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 py-1 rounded-full">
//                       {project.category}
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Lightbox Modal with Image Navigation */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
//           <div className="relative max-w-5xl max-h-full w-full">
//             {/* Close Button */}
//             <Button
//               variant="outline"
//               size="icon"
//               className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white hover:bg-gray-100 cursor-pointer"
//               onClick={closeLightbox}
//             >
//               <X className="h-4 w-4" />
//             </Button>

//             {/* Navigation Buttons */}
//             {currentImageIndex > 0 && (
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 cursor-pointer"
//                 onClick={prevImage}
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>
//             )}

//             {currentImageIndex < selectedProject.images.length - 1 && (
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 cursor-pointer"
//                 onClick={nextImage}
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             )}

//             {/* Main Image */}
//             <div className="text-center">
//               <Image
//                 src={selectedProject.images[currentImageIndex]}
//                 alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
//                 className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain mx-auto "
//               />
              
//               {/* Image Info */}
//               <div className="mt-4 text-white text-center">
//                 <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.title}</h3>
//                 <p className="text-blue-300">
//                   {currentImageIndex + 1} of {selectedProject.images.length}
//                 </p>
//               </div>

//               {/* Thumbnail Navigation */}
//               <div className="flex justify-center gap-1 sm:gap-2 mt-4 overflow-x-auto px-4 ">
//                 {selectedProject.images.map((image: string, index: number) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentImageIndex(index)}
//                     className={`flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
//                       index === currentImageIndex 
//                         ? 'border-blue-400 scale-110' 
//                         : 'border-transparent hover:border-white'
//                     }`}
//                   >
//                     <Image
//                       src={image}
//                       alt={`Thumbnail ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

    
//     </div>
//   );
// };

// export default Gallery;


'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Grid3X3, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface GalleryProject {
  id: number;
  title: string;
  category: string;
  images: string[];
}

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryProjects: GalleryProject[] = [
  {
       id: 1,
       title: "Bridge Construction",
       category: "Bridges",
       images: [
         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOCyq84DhcEOR2N5xfEiUUmvigTK_oyWLyw&s",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_163ZGY7uX6k9qAPQkag7PC1S9qt2l4Y-g&s",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAl9zR27NwFEsKdlCMsO_B7W-P5FZ2fAT0-w&s"
       ]
     },
     {
       id: 2,
       title: "Highway Infrastructure",
       category: "Roads",
       images: [
         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
       ]
     },
     {
       id: 3,
       title: "Building Systems",
       category: "Building Systems",
       images: [
         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
       ]
     },
     {
       id: 4,
       title: "Commercial Building",
       category: "Structures",
       images: [
         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
       ]
     },
     {
       id: 5,
       title: "Modern Architecture",
       category: "Structures",
       images: [
         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
       ]
     },
     {
       id: 6,
       title: "Residential Complex",
       category: "Structures",
       images: [
         "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&"
       ]
     }
    // Other projects...
  ];

  const categories = ["All", "Bridges", "Roads", "Building Systems", "Structures"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === activeCategory);

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const openLightbox = (project: GalleryProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background elements... */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Hero content... */}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                size={windowSize.width < 640 ? "sm" : "default"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
                onClick={() => openLightbox(project)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} thumbnail`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      quality={75}
                      priority={project.id <= 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
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
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full h-full flex flex-col">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white hover:bg-gray-100"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Main Image */}
            <div className="flex-grow flex items-center justify-center">
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                width={1600}
                height={900}
                className="max-w-full max-h-[70vh] object-contain"
                quality={90}
                priority
              />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <Button
                variant="outline"
                size="icon"
                className={`ml-2 sm:ml-4 pointer-events-auto bg-white hover:bg-gray-100 ${currentImageIndex === 0 ? 'invisible' : ''}`}
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`mr-2 sm:mr-4 pointer-events-auto bg-white hover:bg-gray-100 ${currentImageIndex === selectedProject.images.length - 1 ? 'invisible' : ''}`}
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Image Info */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-blue-300">
                {currentImageIndex + 1} of {selectedProject.images.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-4 flex justify-center gap-2 overflow-x-auto py-2">
              {selectedProject.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'border-blue-400 scale-110' 
                      : 'border-transparent hover:border-white'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
