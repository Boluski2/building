// 'use client';

// import { Users, Award, Target, Globe, CheckCircle, ArrowRight, Building2, Calendar, MapPin, Badge } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import TeamMemberModal from '@/components/TeamMemberModal';

// const About = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const values = [
//     {
//       icon: Target,
//       title: "Excellence",
//       description: "Committed to delivering the highest quality engineering solutions."
//     },
//     {
//       icon: CheckCircle,
//       title: "Integrity", 
//       description: "Building trust through honest communication and ethical practices."
//     },
//     {
//       icon: Globe,
//       title: "Innovation",
//       description: "Embracing cutting-edge technology and sustainable practices."
//     },
//     {
//       icon: Users,
//       title: "Collaboration",
//       description: "Working closely with clients and communities for lasting impact."
//     }
//   ];

//   const team = [
//     {
//       name: "Dr. Sarah Johnson",
//       role: "Principal Engineer & CEO",
//       experience: "20+ years",
//       specialization: "Structural Engineering",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
//       bio: "Dr. Sarah Johnson is a visionary leader with over two decades of experience in structural engineering. She has led the design and implementation of numerous high-profile infrastructure projects across North America. Her expertise in seismic design and sustainable construction has earned her recognition as one of the industry's top professionals.",
//       education: [
//         "Ph.D. in Structural Engineering, MIT",
//         "M.S. in Civil Engineering, Stanford University",
//         "B.S. in Civil Engineering, UC Berkeley"
//       ],
//       achievements: [
//         "ASCE Outstanding Structural Engineer Award 2022",
//         "Led design team for $2B infrastructure project",
//         "Published 50+ peer-reviewed research papers",
//         "Licensed Professional Engineer in 12 states"
//       ],
//       email: "s.johnson@engineeringfirm.com",
//       phone: "+1 (555) 123-4567",
//       linkedin: "linkedin.com/in/sarahjohnson"
//     },
//     {
//       name: "Michael Chen", 
//       role: "Senior Transportation Engineer",
//       experience: "15+ years",
//       specialization: "Highway & Traffic Design",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
//       bio: "Michael Chen specializes in transportation engineering with a focus on sustainable mobility solutions. He has designed traffic management systems for major metropolitan areas and has been instrumental in implementing smart city technologies in transportation infrastructure.",
//       education: [
//         "M.S. in Transportation Engineering, UC Davis",
//         "B.S. in Civil Engineering, UCLA"
//       ],
//       achievements: [
//         "ITE Transportation Engineer of the Year 2021",
//         "Designed traffic systems for 3 major cities",
//         "Expert in intelligent transportation systems",
//         "PTOE (Professional Traffic Operations Engineer) certified"
//       ],
//       email: "m.chen@engineeringfirm.com",
//       phone: "+1 (555) 234-5678",
//       linkedin: "linkedin.com/in/michaelchen"
//     },
//     {
//       name: "Dr. Emily Rodriguez",
//       role: "Water Resources Director", 
//       experience: "18+ years",
//       specialization: "Hydraulic Engineering",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
//       bio: "Dr. Emily Rodriguez is an expert in water resources management and hydraulic engineering. She has led numerous flood control and water treatment projects, with a particular focus on climate-resilient infrastructure and sustainable water management practices.",
//       education: [
//         "Ph.D. in Hydraulic Engineering, Colorado State University",
//         "M.S. in Environmental Engineering, University of Texas",
//         "B.S. in Civil Engineering, Rice University"
//       ],
//       achievements: [
//         "ASCE Water Resources Engineer Award 2023",
//         "Led $500M flood control project",
//         "Expert witness in water rights litigation",
//         "Board member of International Water Association"
//       ],
//       email: "e.rodriguez@engineeringfirm.com",
//       phone: "+1 (555) 345-6789",
//       linkedin: "linkedin.com/in/emilyrodriguez"
//     },
//     {
//       name: "David Thompson",
//       role: "Geotechnical Manager",
//       experience: "12+ years", 
//       specialization: "Foundation Design",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
//       bio: "David Thompson brings extensive experience in geotechnical engineering and foundation design. He has worked on challenging projects involving difficult soil conditions and has developed innovative solutions for deep foundation systems in urban environments.",
//       education: [
//         "M.S. in Geotechnical Engineering, Georgia Tech",
//         "B.S. in Civil Engineering, Virginia Tech"
//       ],
//       achievements: [
//         "DFI Young Professor Award recipient",
//         "Designed foundations for 50+ high-rise buildings",
//         "Published research on pile foundation optimization",
//         "Certified Professional Engineer in Geotechnical Engineering"
//       ],
//       email: "d.thompson@engineeringfirm.com",
//       phone: "+1 (555) 456-7890",
//       linkedin: "linkedin.com/in/davidthompson"
//     }
//   ];

//   const stats = [
//     { number: "25+", label: "Years of Excellence", icon: Calendar },
//     { number: "500+", label: "Projects Completed", icon: Building2 },
//     { number: "150+", label: "Expert Engineers", icon: Users },
//     { number: "50+", label: "Global Locations", icon: MapPin }
//   ];

//   const handleMemberClick = (member) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedMember(null);
//   };

//   return (
//     <div >
//       {/* Modern Hero Section with Grid - Mobile Responsive */}
//       <section className="relative py-16 sm:py-20 lg:py-28 min-h-[500px] flex items-center justify-center bg-white overflow-hidden">
//   {/* Background building image - subtle and clear */}
//   <div className="absolute inset-0 z-0">
//     <img
//       src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&h=1200&fit=crop"
//       alt="Modern building background"
//       className="w-full h-full object-cover opacity-80"
//     />
//      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/10"></div>
//   </div>

//   {/* Centered content */}
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//     <div className="space-y-6 lg:space-y-8">
//       {/* <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm lg:text-base">
//         About CivilTech Engineering
//       </Badge> */}
      
//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//         Building the <span className="text-blue-600">Future</span> Through Innovation
//       </h1>
      
//       <p className="text-lg lg:text-xl text-gray-1200 leading-relaxed max-w-3xl mx-auto">
//         For over 25 years, CivilTech Engineering has been at the forefront of civil engineering innovation, 
//         delivering exceptional infrastructure solutions that shape communities and drive progress.
//       </p>
      
//       {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
//         <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
//           Our Projects
//         </Button>
//         <Button variant="outline" size="lg" className="px-8 border-gray-300">
//           Meet Our Team
//         </Button>
//       </div> */}
//     </div>
//   </div>
// </section>

//       {/* Story Section with Multiple Images Grid - Mobile Responsive */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 lg:mb-16 animate-fade-in">
//             <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Journey</h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 lg:mb-8"></div>
//             <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
//               From a 3-person startup to a powerhouse of engineering excellence with 150+ passionate professionals.
//             </p>
//           </div>
          
//           {/* Mobile-first Grid Layout */}
//           <div className="grid gap-4 auto-rows-[200px] lg:auto-rows-[150px]" 
//             style={{
//               gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
//             }}>
            
//             {/* Main large image - spans more on larger screens */}
//             <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group animate-scale-in">
//               <img 
//                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
//                 alt="Our team collaboration"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white">
//                 <h3 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2">Team Collaboration</h3>
//                 <p className="text-white/90 text-sm lg:text-base">Working together towards excellence</p>
//               </div>
//             </div>

//             {/* Other images */}
//             <div className="relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in" style={{ animationDelay: '0.1s' }}>
//               <img 
//                 src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop" 
//                 alt="Engineering precision"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-white">
//                 <h3 className="text-sm lg:text-lg font-bold mb-1">Precision Engineering</h3>
//                 <p className="text-white/90 text-xs lg:text-sm">Every detail matters</p>
//               </div>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               <img 
//                 src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop" 
//                 alt="Modern architecture"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-white">
//                 <h3 className="text-sm lg:text-lg font-bold mb-1">Modern Design</h3>
//                 <p className="text-white/90 text-xs lg:text-sm">Innovative solutions</p>
//               </div>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in" style={{ animationDelay: '0.3s' }}>
//               <img 
//                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
//                 alt="Team planning"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-white">
//                 <h3 className="text-sm lg:text-lg font-bold mb-1">Strategic Planning</h3>
//                 <p className="text-white/90 text-xs lg:text-sm">Building the future</p>
//               </div>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in" style={{ animationDelay: '0.4s' }}>
//               <img 
//                 src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
//                 alt="Technology integration"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-white">
//                 <h3 className="text-sm lg:text-lg font-bold mb-1">Technology</h3>
//                 <p className="text-white/90 text-xs lg:text-sm">Cutting-edge tools</p>
//               </div>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in" style={{ animationDelay: '0.5s' }}>
//               <img 
//                 src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop" 
//                 alt="Architectural innovation"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 text-white">
//                 <h3 className="text-sm lg:text-lg font-bold mb-1">Innovation</h3>
//                 <p className="text-white/90 text-xs lg:text-sm">Pushing boundaries</p>
//               </div>
//             </div>
//           </div>

//           {/* Story content below the grid */}
//           <div className="mt-12 lg:mt-16 max-w-4xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
//             <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed">
//               <p>
//                 Over 25 years of innovation, delivering iconic infrastructure that 
//                 transforms communities and defines the future.
//               </p>
//               <p>
//                 We stand at the forefront of civil engineering, where cutting-edge 
//                 technology meets time-honored principles of excellence and integrity.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Grid - Mobile Responsive */}
//       <section className="py-16 lg:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 lg:mb-16 animate-fade-in">
//             <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Purpose</h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//             <Card className="relative overflow-hidden border-0 shadow-xl animate-slide-in-left">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
//               <CardContent className="relative p-8 lg:p-12 text-white">
//                 <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-white/20 rounded-2xl mb-6 lg:mb-8">
//                   <Target className="h-6 lg:h-8 w-6 lg:w-8" />
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Our Mission</h3>
//                 <p className="text-blue-100 leading-relaxed text-base lg:text-lg">
//                   To provide innovative, sustainable, and cost-effective civil engineering 
//                   solutions that enhance communities and improve quality of life.
//                 </p>
//               </CardContent>
//             </Card>
            
//             <Card className="relative overflow-hidden border-0 shadow-xl animate-slide-in-right">
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600"></div>
//               <CardContent className="relative p-8 lg:p-12 text-white">
//                 <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-white/20 rounded-2xl mb-6 lg:mb-8">
//                   <Globe className="h-6 lg:h-8 w-6 lg:w-8" />
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Our Vision</h3>
//                 <p className="text-cyan-100 leading-relaxed text-base lg:text-lg">
//                   To be the premier civil engineering firm recognized for excellence in design, 
//                   innovation in practice, and commitment to creating resilient infrastructure.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Values Grid - Mobile Responsive */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 lg:px-8">
//           <div className="text-center mb-16 lg:mb-20 animate-fade-in">
//             <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Values</h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {values.map((value, index) => (
//               <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in" style={{ animationDelay: `${0.1 * index}s` }}>
//                 <CardContent className="p-6 lg:p-8 text-center">
//                   <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
//                     <value.icon className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
//                   </div>
//                   <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">{value.title}</h3>
//                   <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Grid - Mobile Responsive */}
//       <section className="py-16 lg:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 lg:px-8">
//           <div className="text-center mb-16 lg:mb-20 animate-fade-in">
//             <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Leadership Team</h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//           </div>
          
//            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {team.map((member, index) => (
//               <Card 
//                 key={index} 
//                 className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in"
//                 style={{ animationDelay: `${0.1 * index}s` }}
//                 onClick={() => handleMemberClick(member)}
//               >
//                 <div className="aspect-square bg-cover bg-center" style={{backgroundImage: `url(${member.image})`}}>
//                   <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                     <span className="text-white font-semibold text-sm lg:text-base">View Profile</span>
//                   </div>
//                 </div>
//                 <CardContent className="p-4 lg:p-6 text-center bg-white">
//                   <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
//                   <p className="text-blue-600 font-semibold mb-2 text-sm lg:text-base">{member.role}</p>
//                   <p className="text-xs lg:text-sm text-gray-600 mb-1">{member.experience}</p>
//                   <p className="text-xs lg:text-sm text-gray-500">{member.specialization}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div> 
          
//           {/* View More Button */}
//           <div className="text-center mt-8 lg:mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
//             <button className="group inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-105">
//               View All Team Members
//               <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Recognition Section - Mobile Responsive */}
//       <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 lg:px-8">
//           <div className="text-center mb-16 lg:mb-20 animate-fade-in">
//             <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Recognition & Excellence</h2>
//             <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             <div className="text-center animate-bounce-in">
//               <div className="inline-flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl mb-4 lg:mb-6 hover:scale-110 transition-transform">
//                 <Award className="h-8 lg:h-10 w-8 lg:w-10 text-white" />
//               </div>
//               <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">ASCE Excellence Award</h3>
//               <p className="text-blue-200 text-sm lg:text-base">Outstanding Civil Engineering Achievement 2023</p>
//             </div>
//             <div className="text-center animate-bounce-in" style={{ animationDelay: '0.1s' }}>
//               <div className="inline-flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl mb-4 lg:mb-6 hover:scale-110 transition-transform">
//                 <CheckCircle className="h-8 lg:h-10 w-8 lg:w-10 text-white" />
//               </div>
//               <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">ISO 9001:2015 Certified</h3>
//               <p className="text-blue-200 text-sm lg:text-base">Quality Management System Certification</p>
//             </div>
//             <div className="text-center animate-bounce-in" style={{ animationDelay: '0.2s' }}>
//               <div className="inline-flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl mb-4 lg:mb-6 hover:scale-110 transition-transform">
//                 <Users className="h-8 lg:h-10 w-8 lg:w-10 text-white" />
//               </div>
//               <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">Professional Engineers</h3>
//               <p className="text-blue-200 text-sm lg:text-base">100% Licensed Professional Engineering Staff</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <Footer /> */}
      
//       <TeamMemberModal 
//         member={selectedMember}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </div>
//   );
// };

// export default About;


// 'use client';

// import { useState } from "react";
import { AboutHero } from "./AboutHero";
import { AboutJourney } from "./AboutJourney";
import { AboutMission } from "./AboutMission";
import { AboutValues } from "./AboutValues";
import { AboutRecognition } from "./AboutRecognition";

import { values,  } from "./data";
import Companystatistics from "./Companystatistics";
// import AboutTeam from "./AboutTeam";
import LeadershipTeam from "./AboutTeam";

const About = () => {
 

  return (
    <div>
      <AboutHero />
      <Companystatistics />
      <AboutJourney />
      <AboutMission />
      <AboutValues values={values} />
      {/* <AboutTeam/> */}
      <LeadershipTeam/>
      <AboutRecognition />
      
    </div>
  );
};

export default About;