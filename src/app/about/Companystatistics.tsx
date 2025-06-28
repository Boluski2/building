// 'use client';

// import { Card, CardContent } from '@/components/ui/card';
// import { Building, Calendar, MapPin, Users } from 'lucide-react';
// import React, { useEffect, useState, useCallback } from 'react';
// import { useInView } from 'react-intersection-observer';

// const Companystatistics = () => {
//   const [counters, setCounters] = useState([0, 0, 0, 0]);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const { ref, inView } = useInView({
//     threshold: 0.7,
//     triggerOnce: true
//   });

//   const stats = [
//     { target: 25, label: "Years of Excellence", icon: Calendar },
//     { target: 500, label: "Projects Completed", icon: Building },
//     { target: 150, label: "Expert Engineers", icon: Users },
//     { target: 50, label: "Global Locations", icon: MapPin }
//   ];

//   const animateCounters = useCallback(() => {
//     const duration = 8000; // Animation duration in ms
//     const startTime = Date.now();

//     const animate = () => {
//       const elapsed = Date.now() - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       // Smooth ease-out function
//       const easeOutProgress = 1 - Math.pow(1 - progress, 3);

//       const newCounters = stats.map((stat) => {
//         return Math.floor(easeOutProgress * stat.target);
//       });

//       setCounters(newCounters);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         // Ensure we reach the exact target numbers
//         setCounters(stats.map(stat => stat.target));
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [stats]); // Add stats as dependency since we use it inside

//   useEffect(() => {
//     if (inView && !hasAnimated) {
//       setHasAnimated(true);
//       animateCounters();
//     }
//   }, [inView, hasAnimated, animateCounters]); // Now includes all dependencies

//   return (
//     <section 
//       ref={ref}
//       className="py-12 lg:py-20 bg-gray-100 overflow-hidden"
//     >
//       {/* Rest of your JSX remains exactly the same */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8 lg:mb-16 animate-fade-in">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
//             Our Impact in Numbers
//           </h2>
//           <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
//             Decades of engineering excellence reflected in our achievements
//           </p>
//         </div>
        
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
//           {stats.map((stat, index) => (
//             <Card 
//               key={index} 
//               className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
//               style={{ 
//                 animationDelay: `${index * 0.1}s`,
//                 animationFillMode: 'both'
//               }}
//             >
//               <CardContent className="p-4 lg:p-8">
//                 <div className="relative inline-block">
//                   <stat.icon 
//                     className="h-8 w-8 lg:h-12 lg:w-12 text-blue-600 mx-auto mb-2 lg:mb-4 animate-float"
//                     style={{ animationDelay: `${index * 0.2}s` }}
//                   />
//                   <div 
//                     className="absolute inset-0 bg-blue-600/10 rounded-full animate-pulse-slow -z-10"
//                     style={{ 
//                       animationDelay: `${index * 0.3}s`,
//                       top: '-10px',
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: '60px',
//                       height: '60px'
//                     }}
//                   />
//                 </div>
                
//                 <div className="text-xl lg:text-4xl font-bold text-gray-900 mb-1 lg:mb-2">
//                   {hasAnimated ? (
//                     <span className="inline-block min-w-[2ch]">
//                       {counters[index]}+
//                     </span>
//                   ) : (
//                     <span className="inline-block min-w-[2ch]">0+</span>
//                   )}
//                 </div>
                
//                 <p className="text-gray-600 font-medium text-sm lg:text-base">
//                   {stat.label}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Companystatistics;

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Building, Calendar, MapPin, Users } from 'lucide-react';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const Companystatistics = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true
  });

  // Memoize the stats array to prevent unnecessary recreations
  const stats = useMemo(() => [
    { target: 25, label: "Years of Excellence", icon: Calendar },
    { target: 500, label: "Projects Completed", icon: Building },
    { target: 150, label: "Expert Engineers", icon: Users },
    { target: 50, label: "Global Locations", icon: MapPin }
  ], []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      animateCounters();
    }
  }, [inView, hasAnimated, ]);

  const animateCounters = useCallback(() => {
    const duration = 8000; // Animation duration in ms
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out function
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      const newCounters = stats.map((stat) => {
        return Math.floor(easeOutProgress * stat.target);
      });

      setCounters(newCounters);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure we reach the exact target numbers
        setCounters(stats.map(stat => stat.target));
      }
    };

    requestAnimationFrame(animate);
  }, [stats]); // Now stats is stable due to useMemo

  return (
    <section 
      ref={ref}
      className="py-12 lg:py-20 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Decades of engineering excellence reflected in our achievements
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-4 lg:p-8">
                <div className="relative inline-block">
                  <stat.icon 
                    className="h-8 w-8 lg:h-12 lg:w-12 text-blue-600 mx-auto mb-2 lg:mb-4 animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                  <div 
                    className="absolute inset-0 bg-blue-600/10 rounded-full animate-pulse-slow -z-10"
                    style={{ 
                      animationDelay: `${index * 0.3}s`,
                      top: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '60px'
                    }}
                  />
                </div>
                
                <div className="text-xl lg:text-4xl font-bold text-gray-900 mb-1 lg:mb-2">
                  {hasAnimated ? (
                    <span className="inline-block min-w-[2ch]">
                      {counters[index]}+
                    </span>
                  ) : (
                    <span className="inline-block min-w-[2ch]">0+</span>
                  )}
                </div>
                
                <p className="text-gray-600 font-medium text-sm lg:text-base">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companystatistics;