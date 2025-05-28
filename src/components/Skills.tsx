
import { Code, Database, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 }
  ];

  const technologies = [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Firebase", level: 80 },
    { name: "MongoDB", level: 75 }
  ];

  const tools = [
    { name: "GitHub", level: 90 },
    { name: "Figma", level: 85 },
    { name: "Canva", level: 88 }
  ];

  const SkillCard = ({ title, skills, icon }: { title: string, skills: Array<{name: string, level: number}>, icon: React.ReactNode }) => (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            title="Programming Languages"
            skills={programmingLanguages}
            icon={<Code className="w-12 h-12 text-blue-600" />}
          />
          
          <SkillCard 
            title="Technologies & Frameworks"
            skills={technologies}
            icon={<Database className="w-12 h-12 text-purple-600" />}
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
