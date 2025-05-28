
import { GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-600">Taroonn</span>, a Computer Science Engineering student with a passion 
              for innovation, leadership, and building solutions that make a difference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience in full-stack development, AI, and app building, 
              I'm always exploring opportunities that challenge me to grow and create meaningful impact through technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in the power of code to transform ideas into reality and am constantly learning 
              new technologies to stay at the forefront of innovation.
            </p>
          </div>
          
          <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                    <p className="text-gray-600">Bachelor of Technology – CSE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Institution</h3>
                    <p className="text-gray-600">Anil Neerukonda Institute of Technology and Sciences (ANITS), Visakhapatnam</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <p className="text-center text-gray-700">
                    <span className="font-semibold">Expected Graduation:</span> 2027
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
