// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import ProjectsHero from '@/components/projects/ProjectsHero';
// import FeaturedProjects from '@/components/projects/FeaturedProjects';
// import ProjectCategories from '@/components/projects/ProjectCategories';
// import RecentProjects from '@/components/projects/RecentProjects';

import FeaturedProjects from "./projectinfo/FeaturedProjects";
import ProjectCategories from "./projectinfo/ProjectCategories";
import ProjectsHero from "./projectinfo/ProjectsHero";
import RecentProjects from "./projectinfo/RecentProjects";

const Projects = () => {
  
  


  const featuredProjects = [
    {
      id: "golden-gate-extension",
      title: "Golden Gate Extension Bridge",
      location: "San Francisco, CA",
      duration: "2020-2023",
      budget: "$250M",
      category: "Transportation",
      status: "Completed",
      description: "A revolutionary cable-stayed bridge spanning 1.2 miles, featuring earthquake-resistant design and smart traffic management systems.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=500&fit=crop",
      highlights: [
        "Seismic isolation technology",
        "Smart traffic control systems",
        "Sustainable materials usage",
        "LEED Gold certification"
      ]
    },
    {
      id: "metro-water-treatment",
      title: "Metro Water Treatment Facility",
      location: "Denver, CO",
      duration: "2019-2022",
      budget: "$180M",
      category: "Water Resources",
      status: "Completed",
      description: "State-of-the-art water treatment plant serving 800,000 residents with advanced filtration and smart monitoring systems.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=500&fit=crop",
      highlights: [
        "Advanced membrane filtration",
        "Real-time quality monitoring",
        "Energy-efficient design",
        "Capacity for future expansion"
      ]
    },
    {
      id: "i95-corridor",
      title: "Interstate 95 Corridor Improvement",
      location: "Philadelphia, PA",
      duration: "2021-2024",
      budget: "$320M",
      category: "Transportation",
      status: "In Progress",
      description: "25-mile highway expansion project including new interchanges, smart lighting, and dedicated electric vehicle lanes.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=500&fit=crop",
      highlights: [
        "Electric vehicle infrastructure",
        "Adaptive traffic signals",
        "Noise reduction barriers",
        "Wildlife crossing bridges"
      ]
    }
  ];

  const projectCategories = [
    { name: "Transportation", count: 45, color: "bg-blue-500" },
    { name: "Structural", count: 38, color: "bg-green-500" },
    { name: "Water Resources", count: 32, color: "bg-cyan-500" },
    { name: "Geotechnical", count: 28, color: "bg-orange-500" },
    { name: "Environmental", count: 22, color: "bg-purple-500" },
    { name: "Utilities", count: 18, color: "bg-red-500" }
  ];

  const recentProjects = [
    {
      title: "Downtown Transit Hub",
      location: "Seattle, WA",
      year: "2023",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
    },
    {
      title: "Riverside Flood Control",
      location: "Austin, TX",
      year: "2023",
      category: "Water Resources",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    },
    {
      title: "Green Energy Campus",
      location: "Portland, OR",
      year: "2023",
      category: "Structural",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Parking Structure",
      location: "Miami, FL",
      year: "2023",
      category: "Structural",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop"
    },
    {
      title: "Solar Panel Installation",
      location: "Phoenix, AZ",
      year: "2023",
      category: "Environmental",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop"
    },
    {
      title: "Underground Utility Network",
      location: "Chicago, IL",
      year: "2023",
      category: "Utilities",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <ProjectsHero />
      
      <FeaturedProjects projects={featuredProjects} />
      
      <ProjectCategories categories={projectCategories} />
      
      <RecentProjects projects={recentProjects} />
      
    
    </div>
  );
};

export default Projects;
