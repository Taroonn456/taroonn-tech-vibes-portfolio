
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform hover:scale-110 transition-transform duration-300">
            Taroonn Koyilada
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transform hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mb-4 transform animate-slide-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 text-left transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 text-left transition-colors duration-200"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 text-left transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-blue-600 text-left transition-colors duration-200"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 text-left transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 text-left transition-colors duration-200"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
