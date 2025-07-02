// // import { Card, CardContent } from '@/components/ui/card';
// // import { ArrowRight } from 'lucide-react';
// // import { TeamMember } from './types';
// // import { TeamMemberCard } from './TeamMemberCard';
// // import { Button } from '@/components/ui/button';
// // import Link from 'next/link';

// // interface AboutTeamProps {
// //   team: TeamMember[];
// //   onMemberClick: (member: TeamMember) => void;
// // }

// // export const AboutTeam = ({ team, onMemberClick }: AboutTeamProps) => (
// //   <section className="py-12 lg:py-20 bg-gray-50">
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <div className="text-center mb-8 lg:mb-16 animate-fade-in">
// //                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Leadership Team</h2>
// //          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
// //               Meet the visionary leaders driving our engineering excellence
// //             </p>
// //       </div>
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12 animate-fade-in-up">
// //         {team.map((member, index) => (
// //           <TeamMemberCard 
// //             key={index}
// //             member={member}
// //             index={index}
// //             onClick={() => onMemberClick(member)}
// //           />
// //         ))}
// //       </div>
      
// //        <div className="text-center mt-8 lg:mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
// //         <button className="group inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-105">
// //           <Link href="/team">
// //           View All Team Members
// //           </Link>
// //           <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
// //         </button>
// //       </div> 
       
// //     </div>

// //   </section>



// // );


// 'use client';



// import { useState } from 'react';
// import { Linkedin, Twitter, Mail } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// // import { Link } from 'react-router-dom';
// import TeamMemberModal from '@/components/TeamMemberModal';
// import Link from 'next/link';
// import Image from 'next/image';

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   experience: string;
//   specialization: string;
//   education: string[];
//   bio: string;
//   achievements: string[];
//   email: string;
//   linkedin: string;
// }

// const LeadershipTeam = () => {
//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
//   const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

//   const teamMembers: TeamMember[] = [
//     {
//       id: 1,
//       name: "Dr. Sarah Johnson",
//       role: "Chief Executive Officer",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&fit=crop",
//       experience: "25+ years",
//       specialization: "Structural Engineering",
//       education: ["PhD Civil Engineering, MIT", "MS Structural Engineering, Stanford"],
//       bio: "Dr. Sarah Johnson is a visionary leader with over 25 years of experience in civil engineering. She has led the company to become one of the most respected engineering firms in the industry, overseeing major infrastructure projects worth over $2 billion.",
//       achievements: [
//         "Led design of award-winning Golden Gate Extension Bridge",
//         "Pioneered sustainable engineering practices in the industry",
//         "Published 50+ research papers in top engineering journals",
//         "Received ASCE Outstanding Projects Award 3 times"
//       ],
//       email: "sarah.johnson@civiltecheng.com",
//       linkedin: "https://linkedin.com/in/sarahjohnson"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Chief Technology Officer",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
//       experience: "20+ years",
//       specialization: "Smart Infrastructure",
//       education: ["MS Computer Engineering, Stanford", "BS Electrical Engineering, UC Berkeley"],
//       bio: "Michael Chen brings cutting-edge technology solutions to traditional engineering challenges. His expertise in smart infrastructure and IoT integration has revolutionized how we approach modern engineering projects.",
//       achievements: [
//         "Developed proprietary BIM integration platform",
//         "Led digital transformation initiatives",
//         "Expert in AI-powered structural analysis",
//         "Speaker at 20+ international tech conferences"
//       ],
//       email: "michael.chen@civiltecheng.com",
//       linkedin: "https://linkedin.com/in/michaelchen"
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Director of Operations",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//       experience: "18+ years",
//       specialization: "Project Management",
//       education: ["MBA Operations, Wharton", "BS Industrial Engineering, Georgia Tech"],
//       bio: "Emily Rodriguez ensures operational excellence across all our projects. Her systematic approach to project management and quality control has resulted in a 98% on-time delivery rate and exceptional client satisfaction.",
//       achievements: [
//         "Implemented lean project management processes",
//         "Reduced project delivery time by 30%",
//         "Maintained 98% client satisfaction rate",
//         "Led cross-functional teams of 200+ professionals"
//       ],
//       email: "emily.rodriguez@civiltecheng.com",
//       linkedin: "https://linkedin.com/in/emilyrodriguez"
//     }
//   ];

//   const handleCloseTeamModal = () => {
//     setIsTeamModalOpen(false);
//     setSelectedMember(null);
//   };

//   const handleMemberClick = (member: TeamMember) => {
//     setSelectedMember(member);
//     setIsTeamModalOpen(true);
//   };

//   return (
//     <>
//       <section className="py-12 lg:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 lg:mb-16">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Leadership Team</h2>
//             <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
//               Meet the visionary leaders driving our engineering excellence
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
//             {teamMembers.map((member, index) => (
//               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
//                     onClick={() => handleMemberClick(member)}>
//                 <CardContent className="p-0">
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-48 sm:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                   <div className="p-4 lg:p-6">
//                     <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                       {member.name}
//                     </h3>
//                     <p className="text-blue-600 font-medium mb-2 text-sm lg:text-base">{member.role}</p>
//                     <p className="text-gray-600 text-xs lg:text-sm mb-3">{member.experience} • {member.specialization}</p>
//                     <div className="flex gap-2">
//                       <Linkedin className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
//                       <Twitter className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
//                       <Mail className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-green-600 transition-colors cursor-pointer" />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
          
//           <div className="text-center">
//             <Link href="/team">
//               <Button 
//                 size="lg" 
//                 variant="outline"
//                 className="hover:bg-blue-50 hover:border-blue-300 text-sm lg:text-base"
//               >
//                 View All Team Members
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <TeamMemberModal 
//         member={selectedMember}
//         isOpen={isTeamModalOpen}
//         onClose={handleCloseTeamModal}
//       />
//     </>
//   );
// };

// export default LeadershipTeam;


// 'use client';


// import { useState } from 'react';
// import { Linkedin, Twitter, Mail } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// // import { Link } from 'react-router-dom';
// import TeamMemberModal from '@/components/TeamMemberModal';
// import Link from 'next/link';
// import Image from 'next/image';

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   experience: string;
//   specialization: string;
//   education: string[];
//   bio: string;
//   achievements: string[];
//   email: string;
//   linkedin: string;
// }

// const LeadershipTeam = () => {
//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
//   const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

//   const teamMembers: TeamMember[] = [
//     {
//       id: 1,
//       name: "Dr. Sarah Johnson",
//       role: "Chief Executive Officer",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&fit=crop",
//       experience: "25+ years",
//       specialization: "Structural Engineering",
//       education: ["PhD Civil Engineering, MIT", "MS Structural Engineering, Stanford"],
//       bio: "Dr. Sarah Johnson is a visionary leader with over 25 years of experience in civil engineering. She has led the company to become one of the most respected engineering firms in the industry, overseeing major infrastructure projects worth over $2 billion.",
//       achievements: [
//         "Led design of award-winning Golden Gate Extension Bridge",
//         "Pioneered sustainable engineering practices in the industry",
//         "Published 50+ research papers in top engineering journals",
//         "Received ASCE Outstanding Projects Award 3 times"
//       ],
//       email: "sarah.johnson@civiltecheng.com",
//       linkedin: "https://linkedin.com/in/sarahjohnson"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Chief Technology Officer",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
//       experience: "20+ years",
//       specialization: "Smart Infrastructure",
//       education: ["MS Computer Engineering, Stanford", "BS Electrical Engineering, UC Berkeley"],
//       bio: "Michael Chen brings cutting-edge technology solutions to traditional engineering challenges. His expertise in smart infrastructure and IoT integration has revolutionized how we approach modern engineering projects.",
//       achievements: [
//         "Developed proprietary BIM integration platform",
//         "Led digital transformation initiatives",
//         "Expert in AI-powered structural analysis",
//         "Speaker at 20+ international tech conferences"
//       ],
//       email: "michael.chen@civiltecheng.com",
//       linkedin: "https://linkedin.com/in/michaelchen"
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Director of Operations",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//       experience: "18+ years",
//       specialization: "Project Management",
//       education: ["MBA Operations, Wharton", "BS Industrial Engineering, Georgia Tech"],
//       bio: "Emily Rodriguez ensures operational excellence across all our projects. Her systematic approach to project management and quality control has resulted in a 98% on-time delivery rate and exceptional client satisfaction.",
//       achievements: [
//         "Implemented lean project management processes",
//         "Reduced project delivery time by 30%",
//         "Maintained 98% client satisfaction rate",
//         "Led cross-functional teams of 200+ professionals"
//       ],
//       email: "emily.rodriguez@civiltecheng.com",
//       linkedin: "https://linkedin.com/in/emilyrodriguez"
//     }
//   ];

//   const handleCloseTeamModal = () => {
//     setIsTeamModalOpen(false);
//     setSelectedMember(null);
//   };

//   const handleMemberClick = (member: TeamMember) => {
//     setSelectedMember(member);
//     setIsTeamModalOpen(true);
//   };

//   return (
//     <>
//       <section className="py-12 lg:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 lg:mb-16">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Leadership Team</h2>
//             <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
//               Meet the visionary leaders driving our engineering excellence
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
//             {teamMembers.map((member, index) => (
//               <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
//                     onClick={() => handleMemberClick(member)}>
//                 <CardContent className="p-0">
//                   <div className="relative overflow-hidden">
//                      <Image
//                        src={member.image}
//                        alt={member.name}
//                        width={100}
//                        height={100}
//                        className="w-full h-48 sm:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
//                      />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   </div>
//                   <div className="p-4 lg:p-6">
//                     <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                       {member.name}
//                     </h3>
//                     <p className="text-blue-600 font-medium mb-2 text-sm lg:text-base">{member.role}</p>
//                     <p className="text-gray-600 text-xs lg:text-sm mb-3">{member.experience} • {member.specialization}</p>
//                     <div className="flex gap-2">
//                       <Linkedin className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
//                       <Twitter className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
//                       <Mail className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-green-600 transition-colors cursor-pointer" />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
          
//           <div className="text-center">
//             <Link href="/team">
//               <Button 
//                 size="lg" 
//                 variant="outline"
//                 className="hover:bg-blue-50 hover:border-blue-300 text-sm lg:text-base"
//               >
//                 View All Team Members
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <TeamMemberModal 
//         member={selectedMember}
//         isOpen={isTeamModalOpen}
//         onClose={handleCloseTeamModal}
//       />
//     </>
//   );
// };

// export default LeadershipTeam;



'use client';

import { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TeamMemberModal from '@/components/TeamMemberModal';
import Link from 'next/link';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialization: string;
  education: string[];
  bio: string;
  achievements: string[];
  email: string;
  linkedin: string;
}

const LeadershipTeam = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const teamMembers: TeamMember[] = [
     {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=400&h=400&fit=crop",
      experience: "25+ years",
      specialization: "Structural Engineering",
      education: ["PhD Civil Engineering, MIT", "MS Structural Engineering, Stanford"],
      bio: "Dr. Sarah Johnson is a visionary leader with over 25 years of experience in civil engineering. She has led the company to become one of the most respected engineering firms in the industry, overseeing major infrastructure projects worth over $2 billion.",
      achievements: [
        "Led design of award-winning Golden Gate Extension Bridge",
        "Pioneered sustainable engineering practices in the industry",
        "Published 50+ research papers in top engineering journals",
        "Received ASCE Outstanding Projects Award 3 times"
      ],
      email: "sarah.johnson@civiltecheng.com",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      experience: "20+ years",
      specialization: "Smart Infrastructure",
      education: ["MS Computer Engineering, Stanford", "BS Electrical Engineering, UC Berkeley"],
      bio: "Michael Chen brings cutting-edge technology solutions to traditional engineering challenges. His expertise in smart infrastructure and IoT integration has revolutionized how we approach modern engineering projects.",
      achievements: [
        "Developed proprietary BIM integration platform",
        "Led digital transformation initiatives",
        "Expert in AI-powered structural analysis",
        "Speaker at 20+ international tech conferences"
      ],
      email: "michael.chen@civiltecheng.com",
      linkedin: "https://linkedin.com/in/michaelchen"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      experience: "18+ years",
      specialization: "Project Management",
      education: ["MBA Operations, Wharton", "BS Industrial Engineering, Georgia Tech"],
      bio: "Emily Rodriguez ensures operational excellence across all our projects. Her systematic approach to project management and quality control has resulted in a 98% on-time delivery rate and exceptional client satisfaction.",
      achievements: [
        "Implemented lean project management processes",
        "Reduced project delivery time by 30%",
        "Maintained 98% client satisfaction rate",
        "Led cross-functional teams of 200+ professionals"
      ],
      email: "emily.rodriguez@civiltecheng.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    }
  ];

  const handleCloseTeamModal = () => {
    setIsTeamModalOpen(false);
    setSelectedMember(null);
  };

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsTeamModalOpen(true);
  };

  return (
    <>
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Leadership Team</h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Meet the visionary leaders driving our engineering excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 lg:mb-12">
            {teamMembers.map((member) => (
              <Card 
                key={member.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => handleMemberClick(member)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2 text-sm lg:text-base">{member.role}</p>
                    <p className="text-gray-600 text-xs lg:text-sm mb-3">{member.experience} • {member.specialization}</p>
                    <div className="flex gap-2">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Linkedin className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-blue-600 transition-colors" />
                      </a>
                      <a href={`https://twitter.com`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Twitter className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-blue-400 transition-colors" />
                      </a>
                      <a href={`mailto:${member.email}`} onClick={(e) => e.stopPropagation()}>
                        <Mail className="h-3 w-3 lg:h-4 lg:w-4 text-gray-400 hover:text-green-600 transition-colors" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/team" legacyBehavior>
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-blue-50 hover:border-blue-300 text-sm lg:text-base"
              >
                View All Team Members
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TeamMemberModal 
        member={selectedMember}
        isOpen={isTeamModalOpen}
        onClose={handleCloseTeamModal}
      />
    </>
  );
};

export default LeadershipTeam;