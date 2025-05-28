
import { Code, Database, Wrench, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "C", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 }
  ];

  const technologies = [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 82 },
    { name: "Angular", level: 75 },
    { name: "Vue.js", level: 70 },
    { name: "Bootstrap", level: 85 },
    { name: "MySQL", level: 75 },
    { name: "Firebase", level: 80 },
    { name: "MongoDB", level: 75 }
  ];

  const aiTools = [
    { name: "PyTorch", level: 80 },
    { name: "TensorFlow", level: 78 },
    { name: "Machine Learning", level: 85 },
    { name: "Deep Learning", level: 75 }
  ];

  const tools = [
    { name: "GitHub", level: 90 },
    { name: "Figma", level: 85 },
    { name: "Canva", level: 88 }
  ];

  const SkillCard = ({ title, skills, icon }: { title: string, skills: Array<{name: string, level: number}>, icon: React.ReactNode }) => (
    <Card className="bg-white shadow-lg border-0 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 hover:scale-105 perspective-1000 group">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-y-12 transition-all duration-500">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="transform group-hover:translate-z-4">
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2 transform hover:translate-x-2 transition-transform duration-300">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out transform hover:scale-x-105"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transform hover:scale-x-150 transition-transform duration-300"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            title="Programming Languages"
            skills={programmingLanguages}
            icon={<Code className="w-12 h-12 text-blue-600" />}
          />
          
          <SkillCard 
            title="Web Technologies"
            skills={technologies}
            icon={<Database className="w-12 h-12 text-purple-600" />}
          />
          
          <SkillCard 
            title="AI & Machine Learning"
            skills={aiTools}
            icon={<Brain className="w-12 h-12 text-green-600" />}
          />
          
          <SkillCard 
            title="Tools & Platforms"
            skills={tools}
            icon={<Wrench className="w-12 h-12 text-indigo-600" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
