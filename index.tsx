import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Gamepad2, Layers, Zap } from 'lucide-react';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Full Stack Software Developer';
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Gandaria",
      category: "Web Application",
      description: "Modern web application with responsive design",
      tech: ["Next.js", "React", "Tailwind"],
      link: "https://gandaria.vercel.app/"
    },
    {
      title: "Portfolio App",
      category: "Personal Website",
      description: "Creative portfolio showcasing development work",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://portfolio-app-alomgir.vercel.app/"
    },
    {
      title: "Our Gandaria",
      category: "Community Platform",
      description: "Community-focused web application",
      tech: ["Next.js", "Vercel", "React"],
      link: "https://ourgandaria.vercel.app/"
    },
    {
      title: "GitHub Repositories",
      category: "Open Source",
      description: "Collection of development projects and code",
      tech: ["Various", "Git", "Open Source"],
      link: "https://github.com/Developer-Alomgir?tab=repositories"
    },
    {
      title: "ArtStation Portfolio",
      category: "Design Showcase",
      description: "Professional artwork and design portfolio",
      tech: ["3D Art", "Design", "Graphics"],
      link: "https://www.artstation.com/alomgirhossen"
    }
  ];

  const skills = [
    { name: "React.js", icon: <Code className="w-6 h-6" /> },
    { name: "Next.js", icon: <Zap className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Layers className="w-6 h-6" /> },
    { name: "HTML", icon: <Code className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Gamepad2 className="w-6 h-6" /> },
    { name: "Node.js", icon: <Zap className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "MySQL", icon: <Layers className="w-6 h-6" /> },
    { name: "Kotlin", icon: <Zap className="w-6 h-6" /> },
    { name: "CSS", icon: <Code className="w-6 h-6" /> },
    { name: "Git", icon: <Gamepad2 className="w-6 h-6" /> }
  ];

  const experience = [
    {
      role: "Full Stack Software Engineer",
      company: "NextCodex Software",
      period: "Present",
      description: "Experienced full stack developer specializing in modern web technologies. Expert in React, Node.js, and cloud architecture. Passionate about building scalable applications and mentoring junior developers.",
      skills: ["React.js", "Node.js", "Next.js", "Webflow", "Tailwind CSS", "HTML"]
    },
    {
      role: "Senior Game Developer",
      company: "QuantumFX Systems",
      period: "07/2024 – Present",
      description: "Developed successful video games using Unity 3D, Unreal Engine and Cocos2D"
    },
    {
      role: "Realtime Environment Designer",
      company: "The Artificial Core Game Studio, Inc.",
      period: "04/2023 - Present",
      description: "Designed game features, levels, characters and optimized performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome To My Web Dimension
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
          
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {menuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-purple-500/20">
            <div className="flex flex-col gap-4 p-6">
              <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">About</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Profile Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-purple-400 text-lg animate-fade-in">Assalamu Alaikum 👋</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Alomgir Hossen
                </span>
              </h1>
              <div className="h-12 flex items-center">
                <p className="text-2xl text-purple-300 font-mono">
                  {animatedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Experienced full stack developer specializing in modern web technologies. 
              Passionate about building scalable Dynamic web applications.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://about.me/alomgirhossen" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                <ExternalLink className="w-4 h-4" />
                About Me
              </a>
              <a href="mailto:contact@alomgirhossen.com" 
                className="flex items-center gap-2 px-6 py-3 border border-purple-500/50 rounded-full hover:bg-purple-500/10 transition-all">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-purple-600/50 transition-all border border-purple-500/20">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-purple-600/50 transition-all border border-purple-500/20">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-purple-600/50 transition-all border border-purple-500/20">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image with Animation */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-spin" style={{animationDuration: '3s'}}></div>
              
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900">
                <img 
                  src="https://media.githubusercontent.com/media/Developer-Alomgir/Developer-Alomgir/refs/heads/main/profile.jpg"
                  alt="Alomgir Hossen"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <Code className="w-24 h-24 mx-auto mb-4 text-purple-400 animate-bounce" />
                    <p className="text-lg font-semibold">Web App Developer</p>
                    <p className="text-sm text-gray-400">Full Stack Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Skill Icons */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-purple-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-purple-500/30 animate-float">
              <Code className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-pink-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-pink-500/30 animate-float" style={{animationDelay: '1s'}}>
              <Layers className="w-10 h-10 text-pink-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          
          {/* Scrolling Skills Container */}
          <div className="relative">
            <div className="flex gap-6 animate-scroll-left">
              {/* First set */}
              {skills.map((skill, idx) => (
                <div key={`skill-1-${idx}`} className="group relative flex-shrink-0 px-10 py-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                      {skill.icon}
                    </div>
                    <p className="text-xl font-medium whitespace-nowrap">{skill.name}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {skills.map((skill, idx) => (
                <div key={`skill-2-${idx}`} className="group relative flex-shrink-0 px-10 py-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                      {skill.icon}
                    </div>
                    <p className="text-xl font-medium whitespace-nowrap">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* Projects Section with Loop Animation */}
      <section id="projects" className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Web App Previews
          </h2>
          <p className="text-center text-gray-400 mb-12">Explore live projects and portfolios</p>
          
          {/* Scrolling Projects Container */}
          <div className="relative">
            <div className="flex gap-8 animate-scroll-left-slow">
              {/* First set */}
              {projects.map((project, idx) => (
                <a 
                  key={`project-1-${idx}`} 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-96 overflow-hidden rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer"
                >
                  {/* Animated Preview Card */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-shimmer"></div>
                    
                    {/* Moving Grid Animation */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
                      backgroundSize: '50px 50px',
                      animation: 'moveGrid 20s linear infinite'
                    }}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink className="w-16 h-16 text-purple-400 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white font-semibold flex items-center gap-2">
                        View Project <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-purple-400 mb-1">{project.category}</p>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-purple-500/20 rounded-full border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {projects.map((project, idx) => (
                <a 
                  key={`project-2-${idx}`} 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-96 overflow-hidden rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer"
                >
                  {/* Animated Preview Card */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-shimmer"></div>
                    
                    {/* Moving Grid Animation */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
                      backgroundSize: '50px 50px',
                      animation: 'moveGrid 20s linear infinite'
                    }}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink className="w-16 h-16 text-purple-400 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white font-semibold flex items-center gap-2">
                        View Project <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-purple-400 mb-1">{project.category}</p>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-purple-500/20 rounded-full border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="py-20 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 pb-8 border-l-2 border-purple-500/30 last:pb-0">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <p className="text-sm text-purple-400 mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-lg text-gray-400 mb-3">{exp.company}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in Your mind? Let's bring it to life!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Developer-Alomgir?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              My Git Repository
            </a>
            <a href="mailto:contact@alomgirhossen.com"
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20 bg-slate-950/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 Alomgir Hossen. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Developed by</span>
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                Claude AI
              </a>
              <span className="text-purple-500">⚡</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-left-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.6; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        
        .animate-scroll-left-slow {
          animation: scroll-left-slow 40s linear infinite;
        }
        
        .animate-scroll-left-slow:hover {
          animation-play-state: paused;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out infinite;
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
