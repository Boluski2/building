
// import { X, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';

// interface ProjectModalProps {
//   project: any;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
//   if (!isOpen || !project) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
//       <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
//         <div className="relative">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
//           >
//             <X className="h-5 w-5" />
//           </button>
          
//           {/* Project Header Image */}
//           <div className="h-64 lg:h-80 bg-cover bg-center relative" style={{backgroundImage: `url(${project.image})`}}>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//             <div className="absolute bottom-6 left-6 text-white">
//               <div className="flex items-center gap-2 mb-4">
//                 <Badge variant="outline" className="text-white border-white">
//                   {project.category}
//                 </Badge>
//                 <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
//                   {project.status}
//                 </Badge>
//               </div>
//               <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
//               <div className="flex items-center space-x-4 text-sm">
//                 <div className="flex items-center space-x-1">
//                   <MapPin className="h-4 w-4" />
//                   <span>{project.location}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Calendar className="h-4 w-4" />
//                   <span>{project.duration}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Award className="h-4 w-4" />
//                   <span>{project.budget}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <CardContent className="p-6 lg:p-8">
//             {/* Project Description */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
//               <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
//             </div>

//             {/* Key Highlights */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {project.highlights.map((project, index) => (
//                   <div key={index} className="flex items-start space-x-3">
//                     <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
//                     <span className="text-gray-600">{project}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Technical Specifications */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-gray-900 mb-2">Project Scale</h4>
//                   <p className="text-gray-600">Large-scale infrastructure development</p>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-gray-900 mb-2">Technology Used</h4>
//                   <p className="text-gray-600">Advanced BIM modeling, 3D visualization</p>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
//                   <p className="text-gray-600">LEED certified, eco-friendly materials</p>
//                 </div>
//               </div>
//             </div>

//             {/* Project Timeline */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Timeline</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
//                   <div>
//                     <p className="font-semibold">Planning & Design Phase</p>
//                     <p className="text-gray-600 text-sm">6 months of comprehensive planning and engineering design</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-3 h-3 bg-green-600 rounded-full"></div>
//                   <div>
//                     <p className="font-semibold">Construction Phase</p>
//                     <p className="text-gray-600 text-sm">24 months of construction with ongoing monitoring</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
//                   <div>
//                     <p className="font-semibold">Final Inspection & Handover</p>
//                     <p className="text-gray-600 text-sm">3 months of testing, inspection, and project handover</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Call to Action */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
//                 Contact Us About This Project
//               </Button>
//               <Button variant="outline" size="lg">
//                 View Similar Projects
//               </Button>
//             </div>
//           </CardContent>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default ProjectModal;


'use client';

import { X, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface TechnicalSpecs {
  scale?: string;
  technology?: string;
  sustainability?: string;
}

interface TimelineItem {
  phase: string;
  duration: string;
  description: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'Cancelled';
  location: string;
  duration: string;
  budget: string;
  highlights: string[];
  technicalSpecs?: TechnicalSpecs;
  timeline?: TimelineItem[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
    >
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Project Header Image */}
          <div className="h-64 lg:h-80 bg-gray-200 relative">
            <Image
              src={project.image}
              alt={`${project.title} project image`}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/project-fallback.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="text-white border-white">
                  {project.category}
                </Badge>
                <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>
              <h2 id="project-modal-title" className="text-3xl font-bold mb-2">
                {project.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>{project.budget}</span>
                </div>
              </div>
            </div>
          </div>

          <CardContent className="p-6 lg:p-8">
            {/* Project Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
            </div>

            {/* Key Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            {project.technicalSpecs && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.technicalSpecs.scale && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Project Scale</h4>
                      <p className="text-gray-600">{project.technicalSpecs.scale}</p>
                    </div>
                  )}
                  {project.technicalSpecs.technology && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Technology Used</h4>
                      <p className="text-gray-600">{project.technicalSpecs.technology}</p>
                    </div>
                  )}
                  {project.technicalSpecs.sustainability && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                      <p className="text-gray-600">{project.technicalSpecs.sustainability}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Project Timeline */}
            {project.timeline && project.timeline.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Timeline</h3>
                <div className="space-y-4">
                  {project.timeline.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: item.color || '#3b82f6' }}
                      ></div>
                      <div>
                        <p className="font-semibold">{item.phase}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        {item.duration && (
                          <p className="text-gray-500 text-xs mt-1">Duration: {item.duration}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us About This Project
              </Button>
              <Button variant="outline" size="lg">
                View Similar Projects
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default ProjectModal;