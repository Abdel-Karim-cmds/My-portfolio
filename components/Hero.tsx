import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, ui } = content;

  // Helper to render animated letters
  const renderAnimatedText = (text: string, isGradient: boolean, startDelay: number) => {
    return (
      <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6 mb-4">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="flex whitespace-nowrap">
            {word.split("").map((char, charIndex) => {
              // Calculate staggered delay
              const delay = startDelay + (wordIndex * 0.2) + (charIndex * 0.05);
              
              return (
                <span
                  key={charIndex}
                  className={`
                    text-5xl md:text-7xl lg:text-9xl font-bold font-['Oswald'] 
                    tracking-tighter leading-none inline-block opacity-0 animate-fall-in
                    ${isGradient 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800' 
                      : 'text-white'}
                  `}
                  style={{ animationDelay: `${delay}s` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-yellow-500 font-bold tracking-[0.5em] text-sm md:text-base mb-6 animate-pulse uppercase opacity-0 animate-fall-in" style={{ animationDelay: '0s' }}>
          {ui.hero.portfolio}
        </h2>
        
        {/* Animated Name */}
        <div className="mb-6">
          {renderAnimatedText("BASCHIROU", false, 0.2)}
          {renderAnimatedText("ABDEL KARIM", true, 0.8)}
        </div>
        
        <p 
          className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-light opacity-0 animate-fall-in"
          style={{ animationDelay: '2s' }}
        >
          {personalInfo.title}
        </p>

        <div 
          className="flex flex-wrap justify-center gap-6 mb-12 opacity-0 animate-fall-in"
          style={{ animationDelay: '2.4s' }}
        >
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 px-8 py-3 border border-yellow-600/50 rounded-full hover:bg-yellow-600 hover:text-black transition-all duration-300"
          >
            <Github size={20} />
            <span className="font-bold uppercase tracking-wider text-sm">{ui.hero.github}</span>
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 px-8 py-3 border border-yellow-600/50 rounded-full hover:bg-yellow-600 hover:text-black transition-all duration-300"
          >
            <Linkedin size={20} />
            <span className="font-bold uppercase tracking-wider text-sm">{ui.hero.linkedin}</span>
          </a>
          <a 
            href={personalInfo.resume} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 px-8 py-3 border border-yellow-600/50 rounded-full hover:bg-yellow-600 hover:text-black transition-all duration-300"
          >
            <FileText size={20} />
            <span className="font-bold uppercase tracking-wider text-sm">{ui.hero.resumeBtn}</span>
          </a>
          <a 
            href="#contact"
            className="group flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full hover:bg-yellow-400 transition-all duration-300 font-bold uppercase tracking-wider text-sm"
          >
            <Mail size={20} />
            <span>{ui.hero.contactBtn}</span>
          </a>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-yellow-500/50 opacity-0 animate-fall-in"
        style={{ animationDelay: '3s' }}
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;