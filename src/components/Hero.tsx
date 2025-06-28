'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Future leading",
    subtitle1: "architecture, planning,",
    subtitle2: "and engineering firm",
    description: "We design sustainable spaces that inspire and endure. Our interdisciplinary approach combines cutting-edge technology with timeless design principles.",
    bgImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    cardImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    badgeText: "Best Architecture Firm",
    mobileBgImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Innovative",
    subtitle1: "interior design",
    subtitle2: "and space planning",
    description: "Transforming interiors into functional works of art. Our designs blend aesthetics with practicality for spaces that truly inspire.",
    bgImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    cardImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    badgeText: "Top Interior Design Studio",
    mobileBgImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
  },
  {
    id: 3,
    title: "Sustainable",
    subtitle1: "urban development",
    subtitle2: "and landscape design",
    description: "Creating green spaces that harmonize with urban environments. Our eco-friendly designs promote sustainability and community.",
    bgImage: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2110&q=80",
    cardImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    badgeText: "Green Architecture Award",
    mobileBgImage: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentData = slides[currentSlide];

  return (
    <div className="w-full min-h-screen bg-gray-500 relative overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay - Responsive */}
      <div className="absolute inset-0 z-0 w-full h-full ">
        {/* Desktop Background */}
        <Image
          src={currentData.bgImage}
          alt="Modern architecture"
           width={100}
          height={100}
          className={`hidden md:block w-full h-full object-cover object-center transition-opacity  duration-500 ${fade ? 'opacity-20' : 'opacity-40'}`}
        />
        {/* Mobile Background */}
        <Image
          src={currentData.mobileBgImage}
          alt="Modern architecture"
           width={100}
                      height={100}
          className={`md:hidden w-full h-full object-cover object-center transition-opacity duration-500 ${fade ? 'opacity-20' : 'opacity-40'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      {/* Hero Content - Responsive Container */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center ">
       <div className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-25 ">
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Mobile First */}
            <div className={`text-white transition-opacity animate-fade-in duration-500 ${fade ? 'opacity-50' : 'opacity-100'}`}>
              <div className="mb-4 sm:mb-6 md:mb-8">
                <span className="text-xs sm:text-sm font-semibold text-amber-400 tracking-widest uppercase">
                  0{currentSlide + 1}. WE ARE INNOVATIVE
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8  animate-fade-in">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-white">
                  {currentData.title}
                </span>
                <br />
                <span className="text-white">{currentData.subtitle1}</span>
                <br />
                <span className="text-gray-300">{currentData.subtitle2}</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-lg leading-relaxed">
                {currentData.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="px-6 py-3 sm:px-8 sm:py-4">
                  <Link href="/contact" className="bg-amber-500 text-gray-900 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                    Get started
                  </Link>
                </Button>
                <Button variant="outline" asChild className="px-6 py-3 sm:px-8 sm:py-4">
                 <Link href="/project" className="bg-white text-gray-900 rounded-full font-semibold px-6 py-3 hover:bg-amber-400 transition-all duration-300 shadow-md hover:shadow-amber-400/30">
                View Portfolio
                </Link>

                </Button>
              </div>
            </div>
            
            {/* Right Images - Floating Card (Hidden on mobile) */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[28rem] lg:h-[32rem]">
                <div className={`absolute -right-8 -top-8 w-full h-full bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl transition-opacity duration-500 ${fade ? 'opacity-50' : 'opacity-100'}`}></div>
                <div className="absolute right-0 top-0 w-full h-full">
                  <Image
                    src={currentData.cardImage}
                    alt="Modern architecture"
                     width={800}
                      height={100}
                    className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${fade ? 'opacity-50' : 'opacity-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Floating Badge */}
                <div className={`absolute -left-8 -bottom-8 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl w-56 sm:w-64 transition-opacity duration-500 ${fade ? 'opacity-50' : 'opacity-100'}`}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-amber-400 p-2 sm:p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">AWARD WINNING</p>
                      <p className="text-sm sm:text-base font-bold text-gray-900">{currentData.badgeText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Mobile Responsive */}
      {/* <div className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setFade(false);
              }, 500);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-amber-400 w-4 sm:w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
      </div>
    </div>
  );
};

export default Hero;