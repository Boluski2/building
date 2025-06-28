
import { Users, Mail, Phone, Linkedin, Award, Building2, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import TeamMemberModal from '@/components/TeamMemberModal';
import Image from 'next/image';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const allTeamMembers = [
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
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Senior Structural Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      experience: "15+ years",
      specialization: "Bridge Design",
      education: ["PhD Structural Engineering, UC Berkeley", "MS Civil Engineering, Stanford"],
      bio: "Dr. James Wilson specializes in complex bridge design and seismic analysis. His innovative approaches to earthquake-resistant structures have been adopted worldwide.",
      achievements: [
        "Designed 25+ major bridge projects",
        "Expert in seismic isolation technology",
        "Published research on earthquake-resistant design",
        "Consultant for international bridge projects"
      ],
      email: "james.wilson@civiltecheng.com",
      linkedin: "https://linkedin.com/in/jameswilson"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Environmental Engineer",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      experience: "12+ years",
      specialization: "Sustainable Design",
      education: ["MS Environmental Engineering, MIT", "BS Chemical Engineering, Caltech"],
      bio: "Lisa Park leads our sustainability initiatives and environmental impact assessments. Her work ensures all projects meet the highest environmental standards.",
      achievements: [
        "LEED certification expert",
        "Reduced project carbon footprint by 40%",
        "Environmental impact assessment specialist",
        "Green building design innovator"
      ],
      email: "lisa.park@civiltecheng.com",
      linkedin: "https://linkedin.com/in/lisapark"
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Transportation Engineer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      experience: "14+ years",
      specialization: "Highway Design",
      education: ["MS Transportation Engineering, Georgia Tech", "BS Civil Engineering, UCLA"],
      bio: "Robert Martinez oversees all transportation infrastructure projects. His expertise in traffic flow optimization and smart highway systems has improved mobility for millions.",
      achievements: [
        "Designed 100+ miles of highway systems",
        "Traffic optimization specialist",
        "Smart transportation systems expert",
        "Urban mobility planning leader"
      ],
      email: "robert.martinez@civiltecheng.com",
      linkedin: "https://linkedin.com/in/robertmartinez"
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      role: "Geotechnical Engineer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      experience: "16+ years",
      specialization: "Foundation Design",
      education: ["PhD Geotechnical Engineering, Stanford", "MS Geological Engineering, Colorado School of Mines"],
      bio: "Dr. Amanda Foster specializes in complex foundation systems and soil mechanics. Her expertise ensures stable foundations for our most challenging projects.",
      achievements: [
        "Foundation design for 200+ structures",
        "Soil stabilization expert",
        "Deep foundation specialist",
        "Geotechnical risk assessment leader"
      ],
      email: "amanda.foster@civiltecheng.com",
      linkedin: "https://linkedin.com/in/amandafoster"
    },
    {
      id: 8,
      name: "David Kim",
      role: "Water Resources Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      experience: "13+ years",
      specialization: "Water Treatment Systems",
      education: ["MS Water Resources Engineering, UC Davis", "BS Environmental Engineering, Northwestern"],
      bio: "David Kim leads our water infrastructure projects. His innovative water treatment solutions provide clean water access to communities worldwide.",
      achievements: [
        "Designed 50+ water treatment facilities",
        "Water quality management expert",
        "Sustainable water systems specialist",
        "International water project consultant"
      ],
      email: "david.kim@civiltecheng.com",
      linkedin: "https://linkedin.com/in/davidkim"
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsTeamModalOpen(true);
  };

  const handleCloseTeamModal = () => {
    setIsTeamModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">Our Team</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experienced engineers and professionals brings decades of expertise 
              to every project, ensuring innovative solutions and exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {allTeamMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                    onClick={() => handleMemberClick(member)}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.experience} • {member.specialization}</p>
                    <div className="flex gap-2">
                      <Mail className="h-4 w-4 text-gray-400 hover:text-green-600 transition-colors" />
                      <Linkedin className="h-4 w-4 text-gray-400 hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <TeamMemberModal 
        member={selectedMember}
        isOpen={isTeamModalOpen}
        onClose={handleCloseTeamModal}
      />
    </div>
  );
};

export default Team;
