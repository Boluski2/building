import { Card, CardContent } from '@/components/ui/card';
import { Target, Globe } from 'lucide-react';

export const AboutMission = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="text-center mb-12 lg:mb-16 animate-fade-in">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Purpose</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <MissionCard 
          icon={Target}
          title="Our Mission"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?"
          // description="To provide innovative, sustainable, and cost-effective civil engineering solutions that enhance communities and improve quality of life."
          gradient="from-blue-600 to-blue-800"
        />
        <MissionCard 
          icon={Globe}
          title="Our Vision"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?"
          // description="To be the premier civil engineering firm recognized for excellence in design, innovation in practice, and commitment to creating resilient infrastructure."
          gradient="from-cyan-600 to-blue-600"
        />
      </div>
    </div>
  </section>
);

const MissionCard = ({ icon: Icon, title, description, gradient }: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}) => (
  <Card className="relative overflow-hidden border-0 shadow-xl animate-slide-in-left">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>
    <CardContent className="relative p-8 lg:p-12 text-white">
      <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-white/20 rounded-2xl mb-6 lg:mb-8">
        <Icon className="h-6 lg:h-8 w-6 lg:w-8" />
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">{title}</h3>
      <p className="text-blue-100 leading-relaxed text-base lg:text-lg">
        {description}
      </p>
    </CardContent>
  </Card>
);