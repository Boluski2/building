
// import { Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import Link from 'next/link';
// import Image from 'next/image';
// // import { Link } from 'react-router-dom';

// interface FeaturedProject {
//   id: string;
//   title: string;
//   location: string;
//   duration: string;
//   budget: string;
//   category: string;
//   status: string;
//   description: string;
//   image: string;
//   highlights: string[];
//    overview?: string;
//   challenges?: string[];
//   solutions?: string[];
//   specifications?: Record<string, string>;
//   team?: Array<{ role: string; name: string }>;
// }

// interface FeaturedProjectsProps {
//   projects: FeaturedProject[];
// }

// const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
//   return (
//     <section className="py-16 lg:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Explore our most impactful and innovative engineering solutions that demonstrate 
//             our commitment to excellence and sustainable development.
//           </p>
//         </div>

//         <div className="space-y-8">
//           {projects.map((project, index) => (
//             <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
//               <CardContent className="p-0">
//                 <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
//                   <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-64 lg:h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
//                   </div>
                  
//                   <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
//                     <div className="flex items-center gap-3 mb-4">
//                       <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
//                         {project.status}
//                       </Badge>
//                       <span className="text-sm text-gray-500">{project.category}</span>
//                     </div>
                    
//                     <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
//                       {project.title}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {project.description}
//                     </p>
                    
//                     <div className="grid sm:grid-cols-3 gap-4 mb-6">
//                       <div className="flex items-center text-sm text-gray-500">
//                         <MapPin className="h-4 w-4 mr-2 text-blue-500" />
//                         {project.location}
//                       </div>
//                       <div className="flex items-center text-sm text-gray-500">
//                         <Calendar className="h-4 w-4 mr-2 text-green-500" />
//                         {project.duration}
//                       </div>
//                       <div className="flex items-center text-sm text-gray-500">
//                         <DollarSign className="h-4 w-4 mr-2 text-orange-500" />
//                         {project.budget}
//                       </div>
//                     </div>
                    
//                     <div className="mb-6">
//                       <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
//                       <ul className="grid sm:grid-cols-2 gap-2">
//                         {project.highlights.map((highlight, idx) => (
//                           <li key={idx} className="flex items-center text-sm text-gray-600">
//                             <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
//                             {highlight}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <Button asChild className="self-start">
//                       <Link href={`/projects/${project.id}`}>
//                         View Details
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;


import { Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

// In your types file or at the top of your component
export interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  duration: string;
  budget: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Upcoming'; // Make sure this matches your data
  description: string;
  image: string;
  highlights: string[];
  // Optional fields if they exist in some projects
  overview?: string;
  challenges?: string[];
  solutions?: string[];
  specifications?: Record<string, string>;
  team?: Array<{ role: string; name: string }>;
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most impactful and innovative engineering solutions that demonstrate 
            our commitment to excellence and sustainable development.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={project.image}
                      alt={`${project.title} project image`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={85}
                      priority={index < 3} // Prioritize first 3 images
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant={
                        project.status === 'Completed' ? 'default' : 
                        project.status === 'In Progress' ? 'secondary' : 'outline'
                      }>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{project.category}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 mr-2 text-orange-500 flex-shrink-0" />
                        <span>{project.budget}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="outline" className="self-start group-hover:bg-blue-50 group-hover:border-blue-300">
                      <Link href={`/projects/${project.id}`} className="flex items-center">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;