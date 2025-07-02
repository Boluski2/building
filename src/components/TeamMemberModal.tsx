import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Mail, Phone, Linkedin, Award, Building2 } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
  education: string[];
  achievements: string[];
  email: string;
  phone?: string;
  linkedin: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberModal = ({ member, isOpen, onClose }: TeamMemberModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{member.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href={`mailto:${member.email}`} className="text-sm hover:underline">
                  {member.email}
                </a>
              </div>
              {member.phone && (
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">{member.phone}</span>
                </div>
              )}
              <div className="flex items-center space-x-3 text-gray-600">
                <Linkedin className="h-4 w-4 text-blue-600" />
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Details */}
          <div className="md:col-span-2 space-y-6 overflow-y-auto max-h-[70vh]">
            {/* Basic Info */}
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{member.role}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Experience:</span>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Specialization:</span>
                  <p className="text-gray-600">{member.specialization}</p>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Building2 className="h-4 w-4 mr-2 text-blue-600" />
                Professional Background
              </h4>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
            
            {/* Education */}
            {member.education.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                <ul className="space-y-2">
                  {member.education.map((edu, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Achievements */}
            {member.achievements.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-blue-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;