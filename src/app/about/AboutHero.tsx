// import { Button } from '@/components/ui/button';

export const AboutHero = () => (
  <section className="relative py-16 sm:py-20 lg:py-28 min-h-[500px] flex items-center justify-center bg-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
      src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1800&q=80"
      // src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80"
        alt="Modern building background"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/10"></div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="space-y-6 lg:space-y-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Building the <span className="text-blue-600">Future</span> Through Innovation
        </h1>
        <p className="text-lg lg:text-xl text-gray-1200 leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?
        </p>
      </div>
    </div>
  </section>
);