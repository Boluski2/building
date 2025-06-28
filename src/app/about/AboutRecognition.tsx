import { Award, CheckCircle, Users } from 'lucide-react';

export const AboutRecognition = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 lg:mb-20 animate-fade-in">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Recognition & Excellence</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <RecognitionItem 
          icon={Award}
          title="ASCE Excellence Award"
          description="Outstanding Civil Engineering Achievement 2023"
          gradient="from-yellow-400 to-orange-400"
          delay={0}
        />
        <RecognitionItem 
          icon={CheckCircle}
          title="ISO 9001:2015 Certified"
          description="Quality Management System Certification"
          gradient="from-green-400 to-emerald-400"
          delay={0.1}
        />
        <RecognitionItem 
          icon={Users}
          title="Professional Engineers"
          description="100% Licensed Professional Engineering Staff"
          gradient="from-blue-400 to-cyan-400"
          delay={0.2}
        />
      </div>
    </div>
  </section>
);

const RecognitionItem = ({ icon: Icon, title, description, gradient, delay }: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}) => (
  <div className="text-center animate-bounce-in" style={{ animationDelay: `${delay}s` }}>
    <div className={`inline-flex items-center justify-center w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r ${gradient} rounded-2xl mb-4 lg:mb-6 hover:scale-110 transition-transform`}>
      <Icon className="h-8 lg:h-10 w-8 lg:w-10 text-white" />
    </div>
    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">{title}</h3>
    <p className="text-blue-200 text-sm lg:text-base">{description}</p>
  </div>
);