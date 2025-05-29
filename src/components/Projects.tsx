
import { ExternalLink, Github, MapPin, Bot, Navigation, Calendar, Image, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import ThreeScene from "./ThreeScene";

const Projects = () => {
  const projects = [
    {
      title: "Vizag Explorer (Smart Tourism Portal)",
      description: "A full-stack tourism web application offering live weather, local attractions, GPS navigation, bookings, and AI chatbot support.",
      features: [
        { icon: <MapPin className="w-4 h-4" />, text: "GPS Navigation & Local Attractions" },
        { icon: <Bot className="w-4 h-4" />, text: "AI Chatbot Support" },
        { icon: <Navigation className="w-4 h-4" />, text: "Live Weather Integration" },
        { icon: <Calendar className="w-4 h-4" />, text: "Booking System" }
      ],
      technologies: ["React.js", "Node.js", "Firebase", "Tailwind CSS", "TypeScript", "Vite.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "CollegeTips.in Gallery Project",
      description: "An interactive gallery platform for college students to share tips, resources, and experiences with a modern, user-friendly interface.",
      features: [
        { icon: <Image className="w-4 h-4" />, text: "Interactive Image Gallery" },
        { icon: <Users className="w-4 h-4" />, text: "Student Community Platform" },
        { icon: <Navigation className="w-4 h-4" />, text: "Resource Sharing System" },
        { icon: <Bot className="w-4 h-4" />, text: "Smart Content Organization" }
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Node.js", "Express.js"],
      liveLink: "https://collegetips.in",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my technical expertise and problem-solving abilities
          </p>
        </div>
        
        {/* 3D Graphic Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Interactive 3D Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">Explore this 3D visualization - click and drag to interact!</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Suspense fallback={
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg flex items-center justify-center">
                <div className="text-lg text-gray-600 dark:text-gray-300">Loading 3D Scene...</div>
              </div>
            }>
              <ThreeScene />
            </Suspense>
          </div>
        </div>
        
        <div className="grid gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    🌐 {project.title}
                  </CardTitle>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-200"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-700 dark:text-gray-300 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            More exciting projects coming soon! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
