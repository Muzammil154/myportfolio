import { Card, CardContent } from '@/components/ui/card.jsx';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Full-Stack Development",
      description: "Proficient in both frontend and backend technologies, creating complete web solutions from concept to deployment."
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "UI/UX Design",
      description: "Passionate about creating intuitive and visually appealing user interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Performance Optimization",
      description: "Focused on building fast, responsive applications with clean code and optimized performance across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer who loves creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Muzammil Adil, a dedicated full-stack developer with a passion for creating 
                beautiful, functional web applications. My journey in web development started with a 
                curiosity about how websites work, and it has evolved into a deep love for crafting 
                digital experiences that users enjoy.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies including HTML5, CSS3, Bootstrap, JavaScript, 
                Vue.js, WordPress, and React.js. I believe in writing clean, maintainable code and 
                staying up-to-date with the latest industry trends and best practices.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                excited to take on new challenges and collaborate on innovative projects.
              </p>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

