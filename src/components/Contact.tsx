
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This will point to the resume file in the public folder
    link.download = 'Taroonn_Koyilada_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "koyiladataroonn456@gmail.com",
      href: "mailto:koyiladataroonn456@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7416053489",
      href: "tel:+917416053489"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/koyilada-taroonn-6b26a728b?utm_source=",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      href: "https://github.com/Taroonn456",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-0 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                  
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600 transform hover:rotate-12 hover:scale-110 transition-all duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                        <a 
                          href={contact.href}
                          className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                  
                  {/* Social Links */}
                  <div className="pt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-lg ${social.color}`}
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Resume Download & CTA */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Work Together</h3>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <p className="text-gray-700 mb-4">
                      Interested in my work? Download my resume to learn more about my experience and projects.
                    </p>
                    <Button 
                      onClick={downloadResume}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      size="lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg transform hover:translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">What I'm Looking For</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Internship opportunities</li>
                      <li>• Open source collaborations</li>
                      <li>• Freelance projects</li>
                      <li>• Technical discussions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600 transform hover:scale-105 transition-transform duration-300">
          © 2024 Taroonn Koyilada. Built with passion and code. 🚀
        </p>
      </div>
    </section>
  );
};

export default Contact;
