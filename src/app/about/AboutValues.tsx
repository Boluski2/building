import { Card, CardContent } from '@/components/ui/card';
import { CoreValue } from './types';

interface AboutValuesProps {
  values: CoreValue[];
}

export const AboutValues = ({ values }: AboutValuesProps) => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 lg:mb-20 animate-fade-in">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Our Values</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {values.map((value, index) => (
          <ValueCard key={index} value={value} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const ValueCard = ({ value, index }: { value: CoreValue; index: number }) => {
  const Icon = value.icon;
  return (
    <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in animate-fade-in-up" 
      style={{ animationDelay: `${0.1 * index}s` }}>
      <CardContent className="p-6 lg:p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
          <Icon className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">{value.title}</h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{value.description}</p>
      </CardContent>
    </Card>
  );
};