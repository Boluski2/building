import { Building, Car, Droplets, Mountain, Shield, Zap, TreePine, Calculator,} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Structural Engineering",
      description: "Comprehensive structural design and analysis for buildings and infrastructure.",
      details: [
        "Building design and analysis",
        "Bridge engineering", 
        // "Seismic design and retrofitting",
        // "Steel and concrete structures"
      ],
      color: "bg-blue-600"
    },
    {
      icon: Car,
      title: "Transportation Engineering",
      description: "Complete transportation infrastructure planning and design solutions.",
      details: [
        "Highway and roadway design",
        "Traffic engineering and analysis",
        // "Intersection design",
        // "Pavement design and rehabilitation"
      ],
      color: "bg-emerald-600"
    },
    {
      icon: Droplets,
      title: "Water Resources Engineering", 
      description: "Sustainable water management systems for municipal and industrial needs.",
      details: [
        "Stormwater management",
        "Water treatment plant design",
        // "Hydraulic modeling",
        // "Flood control systems"
      ],
      color: "bg-cyan-600"
    },
    {
      icon: Mountain,
      title: "Geotechnical Engineering",
      description: "Expert soil and rock mechanics analysis for foundation solutions.",
      details: [
        "Soil investigation and testing",
        "Foundation design",
        // "Slope stability analysis", 
        // "Retaining wall design"
      ],
      color: "bg-amber-600"
    },
    {
      icon: TreePine,
      title: "Environmental Engineering",
      description: "Sustainable solutions for environmental protection projects.",
      details: [
        "Environmental impact assessments",
        "Contaminated site remediation",
        // "Air quality monitoring",
        // "Green infrastructure design"
      ],
      color: "bg-green-600"
    },
    {
      icon: Shield,
      title: "Construction Management",
      description: "Professional construction oversight ensuring quality compliance.",
      details: [
        "Project management",
        "Construction administration",
        // "Quality assurance/control",
        // "Progress monitoring"
      ],
      color: "bg-orange-600"
    },
    {
      icon: Calculator,
      title: "Engineering Analysis",
      description: "Advanced computational analysis for complex engineering challenges.",
      details: [
        "Finite element analysis",
        "Computer modeling",
        // "Risk assessment",
        // "Performance evaluation"
      ],
      color: "bg-purple-600"
    },
    {
      icon: Zap,
      title: "Utility Engineering",
      description: "Comprehensive utility infrastructure design and coordination.",
      details: [
        "Electrical infrastructure",
        "Telecommunications systems",
        // "Gas distribution systems",
        // "Utility coordination"
      ],
      color: "bg-red-600"
    }
  ];

  const processSteps = [
    {
      icon: Building,
      title: "Discovery & Planning",
      description: "Understanding project requirements and site conditions through comprehensive analysis.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Car,
      title: "Design & Engineering",
      description: "Developing innovative solutions using advanced engineering principles and technology.",
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Droplets,
      title: "Review & Approval",
      description: "Thorough quality assurance and regulatory compliance review processes.",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      icon: Mountain,
      title: "Implementation",
      description: "Supporting construction with ongoing technical assistance and project management.",
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Modern Hero Section with Parallax Effect */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')] bg-cover bg-center bg-fixed"
          style={{ 
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
              Expert Engineering Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Building <span className="text-blue-400">Tomorrow </span> Infrastructure Today
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Innovative civil engineering solutions that combine cutting-edge technology 
              with proven methodologies to deliver sustainable, resilient infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all shadow-lg">
                <Link href="/projects">View Our Work</Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:scale-105 transition-all">
                <Link href="/contact">
                  <span>Get Started</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button> */}
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "25+", label: "Years Experience" },
                  { value: "150+", label: "Expert Engineers" },
                  { value: "50+", label: "Global Locations" }
                ].map((stat, index) => (
                  <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${0.1 * index}s` }}>
                    <div className="text-xl sm:text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Floating Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900/10 to-transparent"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Engineering Services</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering services across all major civil engineering disciplines, 
              delivering innovative solutions for complex challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative h-full animate-float-in" 
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100"></div>
                <div className="relative h-full p-6 flex flex-col">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {/* <Button variant="link" className="w-fit p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:underline self-end">
                    <Link href="/contact" className="flex items-center">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Animated Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Engineering Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional engineering solutions with precision and efficiency
            </p>
          </div>

          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index} 
                    className="relative group animate-slide-in-up" 
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    {/* Timeline dot - desktop only */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                      {/* Gradient Header */}
                      <div 
                        className={`h-32 bg-gradient-to-br ${step.color} flex items-center justify-center text-white relative`}
                      >
                        <div className="text-4xl font-bold relative z-10">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        {/* Step number */}
                        <div className="absolute top-4 right-4 bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 pt-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section with Split Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Advanced Engineering Capabilities</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine cutting-edge technology with deep industry expertise to deliver innovative solutions for complex engineering challenges.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "3D",
                    title: "3D Modeling & BIM Integration",
                    description: "Advanced Building Information Modeling for enhanced project visualization and coordination.",
                    color: "bg-blue-100 text-blue-600"
                  },
                  {
                    icon: "♻️",
                    title: "Sustainable Design Solutions",
                    description: "Green engineering practices focused on environmental stewardship and efficiency.",
                    color: "bg-green-100 text-green-600"
                  },
                  {
                    icon: "📋",
                    title: "Regulatory Compliance",
                    description: "Comprehensive knowledge of regulations ensuring smooth project approval processes.",
                    color: "bg-purple-100 text-purple-600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors animate-fade-in" 
                    style={{ animationDelay: `${0.2 + (0.1 * index)}s` }}
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop" 
                  alt="Engineering capabilities"
                  className="w-full h-full object-cover"
                   width={800}
                      height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Innovation in Engineering</h3>
                  <p className="mb-4">Our team leverages the latest technologies to solve complex infrastructure challenges.</p>
                  {/* <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    <Link href="/about" className="flex items-center">
                      Learn about our approach <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button> */}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="hidden lg:block absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blue-500/10 blur-xl z-[-1]"></div>
              <div className="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-emerald-500/10 blur-xl z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of expert engineers is ready to provide tailored solutions for your specific infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
                <Link href="/contact">Get a Consultation</Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:scale-105 transition-all">
                <Link href="/projects" className="flex items-center">
                  View Case Studies <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Services;