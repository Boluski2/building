
import { Building2, Clock, DollarSign, MapPin } from 'lucide-react';

const ProjectsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32 overflow-hidden animate-fade-in">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-400/20 rounded-lg rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-lg animate-twinkle"></div>
      <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-cyan-400/20 rounded-lg rotate-12 animate-float"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8 shadow-xl">
            <Building2 className="h-5 w-5 mr-3 text-blue-400" />
            <span className="text-lg font-medium">Engineering Excellence</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="text-white">Projects</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our portfolio of innovative civil engineering projects that shape communities 
            and advance infrastructure development across the nation.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">#2.5B+</div>
              <div className="text-blue-200 text-sm">Total Value</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Building2 className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">150+</div>
              <div className="text-blue-200 text-sm">Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">25</div>
              <div className="text-blue-200 text-sm">States</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <Clock className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-blue-200 text-sm">Years</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
    </section>
  );
};

export default ProjectsHero;
