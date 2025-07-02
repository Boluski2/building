'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[];
}

interface ImageLightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ project, isOpen, onClose }: ImageLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // Preload adjacent images when lightbox opens
  useEffect(() => {
    if (!isOpen || !project) return;

    const preloadImages = () => {
      const imagesToPreload = [
        currentImageIndex - 1,
        currentImageIndex,
        currentImageIndex + 1
      ].filter(index => index >= 0 && index < project.images.length);

      imagesToPreload.forEach(index => {
        if (!loadedImages[index]) {
          const img = new window.Image();
          img.src = project.images[index];
          img.onload = () => {
            setLoadedImages(prev => ({ ...prev, [index]: true }));
          };
        }
      });
    };

    preloadImages();
  }, [isOpen, project, currentImageIndex, loadedImages]);

  const nextImage = useCallback(() => {
    if (project && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(prev => {
        const newIndex = prev + 1;
        // Preload next images
        if (project.images[newIndex + 1]) {
          const img = new window.Image();
          img.src = project.images[newIndex + 1];
        }
        return newIndex;
      });
    }
  }, [project, currentImageIndex]);

  const prevImage = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => {
        const newIndex = prev - 1;
        // Preload previous images
        if (project?.images[newIndex - 1]) {
          const img = new window.Image();
          img.src = project.images[newIndex - 1];
        }
        return newIndex;
      });
    }
  }, [currentImageIndex, project]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, nextImage, prevImage, onClose]);

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setLoadedImages({});
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-5xl max-h-full w-full">
        {/* Close Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white hover:bg-gray-100"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Navigation Buttons */}
        {currentImageIndex > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        {currentImageIndex < project.images.length - 1 && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Main Image */}
        <div className="text-center">
          <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center">
            {loadedImages[currentImageIndex] ? (
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                width={1600}
                height={900}
                className="max-w-full max-h-full object-contain"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse bg-gray-800 rounded-lg w-full h-full"></div>
              </div>
            )}
          </div>
          
          {/* Image Info */}
          <div className="mt-4 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-blue-300">
              {currentImageIndex + 1} of {project.images.length}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-4 overflow-x-auto px-4">
            {project.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  // Preload this image if not already loaded
                  if (!loadedImages[index]) {
                    const img = new window.Image();
                    img.src = image;
                    img.onload = () => {
                      setLoadedImages(prev => ({ ...prev, [index]: true }));
                    };
                  }
                }}
                className={`flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
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
    </div>
  );
};

export default ImageLightbox;