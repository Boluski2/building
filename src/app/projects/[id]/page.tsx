'use client';


// import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Award, ArrowLeft, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'golden-gate-extension': {
      title: "Golden Gate Extension Bridge",
      location: "Lagos, Nigeria",
      duration: "2020-2023",
      budget: "#250M",
      category: "Transportation",
      status: "Completed",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=600&fit=crop",
      highlights: [
        "Seismic isolation technology",
        "Smart traffic control systems",
        "Sustainable materials usage",
        "LEED Gold certification"
      ],
      overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      challenges: [
        "Complex seismic requirements due to San Francisco's geological conditions",
        "Environmental impact mitigation for the bay ecosystem",
        "Traffic flow optimization during construction phases",
        "Integration with existing transportation infrastructure"
      ],
      solutions: [
        "Advanced base isolation systems to protect against earthquakes",
        "Eco-friendly construction materials and methods",
        "Phased construction approach to minimize traffic disruption",
        "Smart traffic management system with real-time optimization"
      ],
      specifications: {
        "Total Length": "1.2 miles (1.93 km)",
        "Main Span": "800 feet (244 m)",
        "Tower Height": "350 feet (107 m)",
        "Daily Capacity": "150,000 vehicles",
        "Construction Duration": "36 months",
        "Environmental Rating": "LEED Gold"
      },
      team: [
        { role: "Project Manager", name: "Opeyemi" },
        { role: "Lead Structural Engineer", name: "Opeyemi" },
        { role: "Environmental Specialist", name: "Opeyemi" },
        { role: "Traffic Engineer", name: "Opeyemi" }
      ]
    },
    'metro-water-treatment': {
      title: "Metro Water Treatment Facility",
      location: "Benin, Nigeria",
      duration: "2019-2022",
      budget: "#180M",
      category: "Water Resources",
      status: "Completed",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      // description: "State-of-the-art water treatment plant serving 800,000 residents with advanced filtration and smart monitoring systems.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=600&fit=crop",
      highlights: [
        "Advanced membrane filtration",
        "Real-time quality monitoring",
        "Energy-efficient design",
        "Capacity for future expansion"
      ],
      overview: "This cutting-edge water treatment facility represents the future of municipal water processing, incorporating the latest in membrane technology and automated monitoring systems to ensure the highest quality water for Denver residents.",
      challenges: [
        "Meeting stringent water quality standards",
        "Designing for future population growth",
        "Minimizing environmental impact",
        "Optimizing energy efficiency"
      ],
      solutions: [
        "Multi-stage membrane filtration system",
        "Modular design for easy expansion",
        "Solar panel integration and energy recovery systems",
        "Advanced SCADA monitoring and control"
      ],
      specifications: {
        "Daily Capacity": "50 million gallons",
        "Population Served": "800,000 residents",
        "Filtration Technology": "Reverse osmosis membrane",
        "Energy Efficiency": "40% reduction vs. conventional plants",
        "Automation Level": "95% automated processes",
        "Environmental Rating": "LEED Platinum"
      },
      team: [
        { role: "Project Manager", name: "Opeyemi" },
        { role: "Water Treatment Engineer", name: "Opeyemi" },
        { role: "Process Engineer", name: "Opeyemi" },
        { role: "Environmental Engineer", name: "Opeyemi" }
      ]
    },
    'i95-corridor': {
      title: "Interstate 95 Corridor Improvement",
      location: "Abuja, Nigeria",
      duration: "2021-2024",
      budget: "#320M",
      category: "Transportation",
      status: "In Progress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      // description: "25-mile highway expansion project including new interchanges, smart lighting, and dedicated electric vehicle lanes.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&h=600&fit=crop",
      highlights: [
        "Electric vehicle infrastructure",
        "Adaptive traffic signals",
        "Noise reduction barriers",
        "Wildlife crossing bridges"
      ],
      overview: "The I-95 Corridor Improvement project is transforming one of America's busiest highways into a smart, sustainable transportation corridor that anticipates the needs of future mobility while addressing current congestion challenges.",
      challenges: [
        "Managing traffic during construction on a major interstate",
        "Integrating electric vehicle charging infrastructure",
        "Minimizing noise impact on surrounding communities",
        "Protecting wildlife migration patterns"
      ],
      solutions: [
        "Innovative construction sequencing to maintain traffic flow",
        "Solar-powered EV charging stations at regular intervals",
        "Advanced noise barrier technology with aesthetic design",
        "Wildlife overpasses and underpasses at key crossing points"
      ],
      specifications: {
        "Project Length": "25 miles (40 km)",
        "New Lanes Added": "6 lanes (3 each direction)",
        "EV Charging Stations": "15 locations",
        "Smart Traffic Signals": "45 intersections",
        "Wildlife Crossings": "8 structures",
        "Noise Barriers": "12 miles of barriers"
      },
      team: [
        { role: "Program Manager", name: "Opeyemi" },
        { role: "Highway Engineer", name: "Opeyemi" },
        { role: "Traffic Systems Engineer", name: "Opeyemi" },
        { role: "Environmental Manager", name: "Opeyemi" }
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 animate-fade-in">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 animate-slide-in-left">
            <Button asChild variant="outline" className="text-black border-white hover:bg-white hover:text-gray-900">
              <Link href="/project">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-white border-white">
                {project.category}
              </Badge>
              <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">{project.location}</div>
              <div className="text-gray-600">Location</div>
            </div>
            <div className="text-center animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">{project.duration}</div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="text-center animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">{project.budget}</div>
              <div className="text-gray-600">Budget</div>
            </div>
            <div className="text-center animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-2">{project.team.length}</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{project.overview}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Image
                src={project.image} 
                alt={project.title}
                 width={800}
                      height={800}
                className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solutions</h3>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${0.1 * index + 0.2}s` }}>
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(project.specifications).map(([key, value], index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-bounce-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">{key}</h4>
                  <p className="text-2xl font-bold text-blue-600">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Project Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experienced team bring your vision to life with innovative engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-900">
              <Link href="/projects">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
