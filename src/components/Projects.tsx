import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Amazon Sales Performance Dashboard",
      description: "Comprehensive sales insights for Amazon using Power BI. Analyzes trends, products, and regions with interactive visualizations.",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      image: "https://i.postimg.cc/PrXTNwSq/Amazon-Latest-Sales-Report-page-0001.jpg",
      githubLink: "https://github.com/ashishjha1304/Amazon-Sales-Report-Analysis",
      featured: true,
      date: "2025",
      category: "Analytics"
    },
    {
      title: "Ola Ride Analysis Dashboard",
      description: "Provides deep insights into ride behavior, revenue trends, and geospatial metrics with interactive maps and charts.",
      technologies: ["Power BI", "Geospatial Analysis", "SQL"],
      image: "https://i.postimg.cc/L8hS3MKK/Ola-Project-page-0001.jpg",
      githubLink: "https://github.com/ashishjha1304/Ola-Ride-Analysis-Dashboard",
      featured: false,
      date: "2025",
      category: "Analytics"
    },
    {
      title: "Virat Kohli Career Statistics Dashboard",
      description: "Interactive dashboard analyzing the cricket legend's statistics across all formats and conditions with detailed visualizations.",
      technologies: ["Power BI", "Sports Analytics", "DAX"],
      image: "https://i.postimg.cc/BZgGWvJf/Virat-Kohli-Career-Statistics-Analysis-page-0001.jpg",
      githubLink: "https://github.com/ashishjha1304/kohli-career-analysis",
      featured: false,
      date: "2025",
      category: "Analytics"
    },
    {
      title: "Papollo Hospital Data Analysis",
      description: "This Power BI project analyzes hospital operations using real-time data from Papollo Hospital. The dashboard visualizes key aspects like patient admissions, diagnosis patterns, bed usage, billing, insurance, and doctor feedback. The goal is to assist hospital management in making data-informed decisions to improve efficiency and care quality.",
      technologies: ["Power BI", "Excel", "DAX", "Power Query", "Data Modeling", "Healthcare Analytics"],
      image: "https://i.postimg.cc/vZXpbR0X/Papollo-Hospital-page-0001.jpg",
      githubLink: "https://github.com/ashishjha1304/Papollo-Hospital-Dashboard",
      featured: true,
      date: "2025",
      category: "Healthcare"
    }
  ];

  const getTechnologyColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Power BI": "bg-yellow-600/20 text-yellow-400 border-yellow-600/30",
      "DAX": "bg-orange-600/20 text-orange-400 border-orange-600/30",
      "SQL": "bg-blue-600/20 text-blue-400 border-blue-600/30",
      "Excel": "bg-green-600/20 text-green-400 border-green-600/30",
      "Data Modeling": "bg-purple-600/20 text-purple-400 border-purple-600/30",
      "Geospatial Analysis": "bg-teal-600/20 text-teal-400 border-teal-600/30",
      "Sports Analytics": "bg-red-600/20 text-red-400 border-red-600/30",
      "Healthcare Analytics": "bg-pink-600/20 text-pink-400 border-pink-600/30",
      "Power Query": "bg-indigo-600/20 text-indigo-400 border-indigo-600/30"
    };
    return colors[tech] || "bg-blue-600/20 text-blue-400 border-blue-600/30";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Showcasing my expertise in data visualization and analytics through real-world projects that deliver actionable insights and drive business decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-gray-800/80 backdrop-blur-sm border-gray-700/50 overflow-hidden group relative transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/50 ${
                project.featured ? 'ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/10' : ''
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                    <Star size={12} className="mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge variant="outline" className="bg-gray-900/80 border-gray-600 text-gray-300">
                  {project.category}
                </Badge>
              </div>

              {/* Project Image */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent group-hover:from-gray-900/40 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm ml-4 flex-shrink-0">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className={`text-xs px-3 py-1.5 transition-all duration-300 hover:scale-105 ${getTechnologyColor(tech)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-lg"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 px-8 py-3"
            onClick={() => window.open('https://github.com/ashishjha1304', '_blank')}
          >
            <Github size={16} className="mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
