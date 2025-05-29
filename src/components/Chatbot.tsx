
import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help answer questions about my skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    'skills': "I'm proficient in Python, JavaScript, Java, C, HTML, CSS, React, Node.js, Express.js, Angular, Vue.js, Bootstrap, MySQL, MongoDB, Firebase, PyTorch, and TensorFlow. I also use GitHub, Figma, and Canva for development and design.",
    'projects': "I've built a Smart Tourism Portal called Vizag Explorer with GPS navigation and AI chatbot, and the CollegeTips.in Gallery Project for student communities. Both showcase my full-stack development skills.",
    'experience': "I'm a computer science student with hands-on experience in web development, AI/ML, and modern frameworks. I'm also a member of IEEE Computer Society.",
    'contact': "You can reach out to me through the contact section below or connect with me on my social media profiles.",
    'education': "I'm currently pursuing my studies in Computer Science with a focus on web development and artificial intelligence technologies.",
    'ai': "I have experience with AI/ML technologies including PyTorch and TensorFlow. I enjoy working on AI projects and implementing intelligent solutions.",
    'web': "I specialize in full-stack web development using React, Node.js, Express.js, Angular, Vue.js, and modern frameworks. I also work with databases like MySQL, MongoDB, and Firebase.",
    'python': "Python is one of my strongest programming languages! I use it for web development, data analysis, and AI/ML projects. I'm proficient with various Python frameworks and libraries.",
    'react': "I love working with React! I've built several projects using React, including modern web applications. I'm comfortable with hooks, state management, and modern React patterns.",
    'ieee': "I'm a proud member of the IEEE Computer Society, which keeps me connected with the latest developments in computer science and technology.",
    'default': "I'd be happy to help! You can ask me about my skills, projects, experience, education, or anything else you'd like to know about my background."
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi') || lowercaseMessage.includes('hey')) {
      return "Hello! Nice to meet you. What would you like to know about my background?";
    }
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== 'default' && lowercaseMessage.includes(key)) {
        return response;
      }
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-40 animate-in slide-in-from-bottom-5 duration-300">
          <Card className="h-full flex flex-col shadow-2xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg p-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5" />
                Ask me anything!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-64">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800 rounded-bl-none'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t bg-gray-50">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question..."
                    className="flex-1 border-gray-200 focus:border-blue-500"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isTyping || !inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
