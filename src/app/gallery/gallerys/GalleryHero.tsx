'use client';

import { Camera, Grid3X3, Eye } from 'lucide-react';

interface GalleryHeroProps {
  projectCount: number;
  totalPhotos: number;
}

const GalleryHero = ({ projectCount, totalPhotos }: GalleryHeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white py-20 lg:py-32 overflow-hidden animate-fade-in">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-blue-500/20 rounded-lg rotate-45 animate-spin-slow"></div>
      <div className="absolute top-32 right-24 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-24 left-1/3 w-20 h-20 bg-green-500/20 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute bottom-16 right-16 w-12 h-12 bg-orange-500/20 rounded-full animate-twinkle"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8 shadow-xl">
            <Camera className="h-5 w-5 mr-3 text-blue-400" />
            <span className="text-lg font-medium">Visual Portfolio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Project
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Explore our stunning collection of completed civil engineering projects through 
            detailed photographs showcasing innovation, craftsmanship, and engineering excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Grid3X3 className="h-5 w-5 text-blue-400" />
                <span className="text-lg">{projectCount} Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-purple-400" />
                <span className="text-lg">{totalPhotos} Photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
    </section>
  );
};

export default GalleryHero;