import { ArrowDown, Sparkles, Brain, Database, Cpu, Zap, Code2, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-[85vh] md:min-h-[90vh] flex items-start md:items-center justify-center relative overflow-hidden py-4 md:py-8">
      {/* Modern AI-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/80">
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] bg-[size:100px_100px] md:bg-[size:150px_150px]"></div>
        </div>
        
        {/* Floating AI Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Particles */}
          <div className="absolute top-[10%] left-[15%] w-1 h-1 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-[20%] right-[20%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-[70%] left-[10%] w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" style={{
          animationDelay: '0.5s'
        }}></div>
          <div className="absolute top-[60%] right-[60%] w-1 h-1 bg-violet-400 rounded-full animate-ping" style={{
          animationDelay: '1.5s'
        }}></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-[25%] left-[80%] opacity-20">
            <div className="w-6 h-6 md:w-8 md:h-8 border border-cyan-400 rotate-45 animate-spin" style={{
            animationDuration: '8s'
          }}></div>
          </div>
          <div className="absolute bottom-[40%] left-[20%] opacity-20">
            <div className="w-4 h-4 md:w-6 md:h-6 border border-purple-400 animate-pulse"></div>
          </div>
          <div className="absolute top-[80%] right-[30%] opacity-20">
            <div className="w-5 h-5 md:w-7 md:h-7 border border-blue-400 rounded-full animate-spin" style={{
            animationDuration: '12s'
          }}></div>
          </div>
        </div>
        
        {/* Enhanced Neural Network */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge> 
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Neural connections */}
            <path d="M100,150 Q300,100 500,150 T900,150" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" className="animate-pulse" />
            <path d="M200,300 Q400,250 600,300 T1000,300" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" className="animate-pulse" style={{
            animationDelay: '1s'
          }} />
            <path d="M150,450 Q350,400 550,450 T850,450" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" className="animate-pulse" style={{
            animationDelay: '2s'
          }} />
            <path d="M50,600 Q250,550 450,600 T750,600" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" filter="url(#glow)" className="animate-pulse" style={{
            animationDelay: '0.5s'
          }} />
            
            {/* Neural nodes */}
            <circle cx="100" cy="150" r="3" fill="#3b82f6" className="animate-ping" />
            <circle cx="500" cy="150" r="3" fill="#8b5cf6" className="animate-ping" style={{
            animationDelay: '1s'
          }} />
            <circle cx="900" cy="150" r="3" fill="#06b6d4" className="animate-ping" style={{
            animationDelay: '2s'
          }} />
          </svg>
        </div>
        
        {/* Multi-layered Glow Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-gradient-radial from-purple-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 w-40 h-40 md:w-60 md:h-60 bg-gradient-radial from-cyan-500/8 to-transparent rounded-full blur-2xl"></div>
        
        {/* Mouse Follow Effect (Desktop Only) */}
        {isClient && <div className="hidden md:block absolute w-96 h-96 bg-gradient-radial from-blue-400/5 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out" style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192
      }} />}
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10 max-w-6xl">
        <div className="animate-fade-in">
          {/* Enhanced AI-themed icons */}
          <div className="flex justify-center items-center space-x-3 md:space-x-6 mb-3 md:mb-4">
            <div className="flex items-center space-x-1 opacity-70">
              <Brain className="text-cyan-400 animate-pulse" size={20} />
              <span className="hidden sm:block text-xs text-cyan-400/70">AI</span>
            </div>
            <div className="flex items-center space-x-1 opacity-70">
              <Database className="text-blue-400 animate-pulse" size={20} style={{
              animationDelay: '0.5s'
            }} />
              <span className="hidden sm:block text-xs text-blue-400/70">Data</span>
            </div>
            <div className="flex items-center space-x-1 opacity-70">
              <LineChart className="text-purple-400 animate-pulse" size={20} style={{
              animationDelay: '1s'
            }} />
              <span className="hidden sm:block text-xs text-purple-400/70">Analytics</span>
            </div>
            <div className="flex items-center space-x-1 opacity-70">
              <Code2 className="text-emerald-400 animate-pulse" size={20} style={{
              animationDelay: '1.5s'
            }} />
              <span className="hidden sm:block text-xs text-emerald-400/70">Code</span>
            </div>
          </div>
          
          {/* Dynamic Tech Stack */}
          <div className="mb-2 md:mb-3">
            <div className="flex justify-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-400/60 font-mono">
              <span className="animate-pulse">Python</span>
              <span className="animate-pulse" style={{
              animationDelay: '0.2s'
            }}>•</span>
              <span className="animate-pulse" style={{
              animationDelay: '0.4s'
            }}>SQL</span>
              <span className="animate-pulse" style={{
              animationDelay: '0.6s'
            }}>•</span>
              <span className="animate-pulse" style={{
              animationDelay: '0.8s'
            }}>Machine Learning</span>
              <span className="animate-pulse" style={{
              animationDelay: '1s'
            }}>•</span>
              <span className="animate-pulse" style={{
              animationDelay: '1.2s'
            }}>Visualization</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-3 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
              Hello, I'm{" "}
            </span>
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              Ashish Jha
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-2 md:mb-3 font-light">
            Aspiring{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">
              Data Analyst
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-4 md:mb-5 max-w-xs sm:max-w-2xl mx-auto leading-relaxed px-2">
            Transforming data into decisions through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">
              AI-powered insights
            </span>{" "}
            and modern visualization techniques.
          </p>
          
          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4">
              <div className="text-lg md:text-2xl font-bold text-cyan-400">10+</div>
              <div className="text-xs md:text-sm text-slate-400">Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4">
              <div className="text-lg md:text-2xl font-bold text-blue-400">1+</div>
              <div className="text-xs md:text-sm text-slate-400">Years Learning</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4">
              <div className="text-lg md:text-2xl font-bold text-purple-400">10+</div>
              <div className="text-xs md:text-sm text-slate-400">Technologies</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4">
              <div className="text-lg md:text-2xl font-bold text-emerald-400">100%</div>
              <div className="text-xs md:text-sm text-slate-400">Dedication</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-4 md:mb-6 px-4 sm:px-0">
            <Button onClick={() => scrollToSection("projects")} className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 shadow-lg shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 text-base md:text-lg border-0 rounded-lg font-medium">
              <Sparkles className="mr-2 group-hover:animate-spin" size={18} />
              View Projects
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" className="group border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-6 md:px-8 py-3 text-base md:text-lg backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300 rounded-lg font-medium">
              <Zap className="mr-2 group-hover:animate-pulse" size={18} />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block">
          
        </div>
      </div>
    </section>;
};