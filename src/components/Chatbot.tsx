
import React, { useState } from 'react';
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

  const predefinedResponses: Record<string, string> = {
    'skills': "I'm proficient in Python, JavaScript, Java, React, Node.js, and AI/ML technologies like PyTorch and TensorFlow. I also have experience with databases like MySQL and MongoDB.",
    'projects': "I've built a Smart Tourism Portal called Vizag Explorer with GPS navigation and AI chatbot, and the CollegeTips.in Gallery Project for student communities. Both showcase my full-stack development skills.",
    'experience': "I'm a computer science student with hands-on experience in web development, AI/ML, and modern frameworks. I'm also a member of IEEE Computer Society.",
    'contact': "You can reach out to me through the contact section below or connect with me on my social media profiles.",
    'education': "I'm currently pursuing my studies in Computer Science with a focus on web development and artificial intelligence technologies.",
    'ai': "I have experience with Machine Learning, Deep Learning, PyTorch, and TensorFlow. I enjoy working on AI projects and implementing intelligent solutions.",
    'web': "I specialize in full-stack web development using React, Node.js, Express.js, and modern frameworks. I also work with databases and cloud technologies.",
    'default': "I'd be happy to help! You can ask me about my skills, projects, experience, education, or anything else you'd like to know about my background."
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseMessage.includes(key)) {
        return response;
      }
    }
    
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      return "Hello! Nice to meet you. What would you like to know about my background?";
    }
    
    if (lowercaseMessage.includes('python')) {
      return "Python is one of my strongest programming languages! I use it for web development, data analysis, and AI/ML projects. I'm also proficient with frameworks like Django and Flask.";
    }
    
    if (lowercaseMessage.includes('react')) {
      return "I love working with React! I've built several projects using React, including the Vizag Explorer tourism portal. I'm comfortable with hooks, state management, and modern React patterns.";
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
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
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-40">
          <Card className="h-full flex flex-col shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5" />
                Ask me anything!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
