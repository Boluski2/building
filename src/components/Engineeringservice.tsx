import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Engineeringservice = () => {

   const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

     const services = [
    {
      title: "Structural Engineering",
      // description: "Comprehensive structural design and analysis for buildings, bridges, and infrastructure projects.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore nihil. Sit ad cupiditate fugit optio incidunt minus, a sapiente.",
      icon: "🏗️"
    },
    {
      title: "Transportation Engineering",
      // description: "Highway design, traffic analysis, and transportation infrastructure planning.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore nihil. Sit ad cupiditate fugit optio incidunt",
      icon: "🛣️"
    },
    {
      title: "Water Resources",
      // description: "Hydraulic design, drainage systems, and water management solutions.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore nihil. Sit ad cupiditate fugit optio ",
      icon: "💧"
    },
    {
      title: "Geotechnical Engineering",
      // description: "Soil analysis, foundation design, and ground improvement strategies.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore nihil. Sit ad cupiditate fugit ",
      icon: "🌍"
    }
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


  return (
  // Services Section
  <section 
  ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-24 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Engineering Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive civil engineering solutions tailored to meet your project needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group animate-scale-in"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12 animate-fade-in-up">
        <Button asChild size="lg" className="group hover:bg-blue-700 transition-all duration-300">
          <Link href="/services" className="inline-flex items-center">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
}

export default Engineeringservice
