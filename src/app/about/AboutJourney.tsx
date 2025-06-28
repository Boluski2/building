// import Image from "next/image";

// export const AboutJourney = () => {
//   const journeyImages = [
//     {
//       src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
//       alt: "Our team collaboration",
//       title: "Team Collaboration",
//       subtitle: "Working together towards excellence",
//       colSpan: "lg:col-span-2 lg:row-span-2"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
//       alt: "Engineering precision",
//       title: "Precision Engineering",
//       subtitle: "Every detail matters"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
//       alt: "Engineering precision",
//       title: "Precision Engineering",
//       subtitle: "Every detail matters"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
//       alt: "Engineering precision",
//       title: "Precision Engineering",
//       subtitle: "Every detail matters"
//     },
//     {
//       src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
//       alt: "Engineering precision",
//       title: "Precision Engineering",
//       subtitle: "Every detail matters"
//     },
//     // Add other images similarly
//   ];

//   return (
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="text-center mb-12 lg:mb-16 animate-fade-in">
//           <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Journey</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 lg:mb-8"></div>
//           <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
//             {/* From a 3-person startup to a powerhouse of engineering excellence with 150+ passionate professionals. */}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?
//           </p>
//         </div>
        
//         <div className="grid gap-4 auto-rows-[200px] lg:auto-rows-[150px]" 
//           style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          
//           {journeyImages.map((image, index) => (
//             <div key={index} className={`${image.colSpan || ''} relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in`} 
//               style={{ animationDelay: `${0.1 * index}s` }}>
//               <Image 
//                 src={image.src} 
//                 alt={image.alt}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white">
//                 <h3 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">{image.title}</h3>
//                 <p className="text-white/90 text-sm lg:text-base">{image.subtitle}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 lg:mt-16 max-w-4xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
//           <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed">
//             <p>
//               {/* Over 25 years of innovation, delivering iconic infrastructure that 
//               transforms communities and defines the future. */}
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?
//             </p>
//             <p>
//               {/* We stand at the forefront of civil engineering, where cutting-edge 
//               technology meets time-honored principles of excellence and integrity. */}
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import Image from "next/image";

export const AboutJourney = () => {
  const journeyImages = [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      alt: "Our team collaboration",
      title: "Team Collaboration",
      subtitle: "Working together towards excellence",
      colSpan: "lg:col-span-2 lg:row-span-2",
      width: 800,
      height: 600
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      alt: "Engineering precision",
      title: "Precision Engineering",
      subtitle: "Every detail matters",
      width: 600,
      height: 400
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      alt: "Engineering precision",
      title: "Precision Engineering",
      subtitle: "Every detail matters",
      width: 600,
      height: 400
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      alt: "Engineering precision",
      title: "Precision Engineering",
      subtitle: "Every detail matters",
      width: 600,
      height: 400
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      alt: "Engineering precision",
      title: "Precision Engineering",
      subtitle: "Every detail matters",
      width: 600,
      height: 400
    },
    // Add other images with their actual dimensions
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 lg:mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident?
          </p>
        </div>
        
        <div className="grid gap-4 auto-rows-[200px] lg:auto-rows-[150px]" 
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          
          {journeyImages.map((image, index) => (
            <div 
              key={index} 
              className={`${image.colSpan || ''} relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in`} 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white">
                <h3 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">{image.title}</h3>
                <p className="text-white/90 text-sm lg:text-base">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 max-w-4xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};