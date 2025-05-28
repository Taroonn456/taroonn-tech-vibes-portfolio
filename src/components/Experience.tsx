
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Summer Research Internship",
      company: "Symbiosis Institute of Technology Hyderabad",
      duration: "May 2025 - Present",
      type: "Research",
      description: "Currently working on research projects in advanced technology domains.",
      skills: ["Research", "Technology Innovation", "Data Analysis"],
      status: "current"
    },
    {
      title: "Web Development Intern",
      company: "Collegetips.in",
      duration: "May 2025 - Present",
      type: "Development",
      description: "Summer internship focused on full-stack web development and creating user-centric solutions.",
      skills: ["React", "Node.js", "Full-Stack Development", "UI/UX"],
      status: "current"
    },
    {
      title: "Artificial Intelligence Internship",
      company: "Intrainz",
      duration: "Oct 2024 - Dec 2024",
      type: "AI/ML",
      description: "Gained hands-on experience in AI technologies, machine learning algorithms, and practical implementation of AI solutions.",
      skills: ["Python", "Machine Learning", "AI Development", "Data Science"],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Professional experience and internships that have shaped my journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-lg border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-y-2 hover:scale-102 group perspective-1000"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 mt-4 md:mt-0">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      exp.status === 'current' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {exp.status === 'current' ? 'Current' : 'Completed'}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="transform group-hover:translate-z-4">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium transform hover:scale-110 transition-transform duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
