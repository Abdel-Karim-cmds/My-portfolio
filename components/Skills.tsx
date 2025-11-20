
import React from 'react';
import { Zap, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SkillDot: React.FC<{ filled: boolean }> = ({ filled }) => (
  <div className={`w-3 h-3 rounded-full ${filled ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]' : 'bg-zinc-800'} transition-all duration-300`}></div>
);

const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { skillsTech, skillsSoft, languages, ui } = content;

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(253,224,71,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Technical Skills */}
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-bold font-['Oswald'] text-white uppercase mb-4">{ui.skills.technicalTitle} <span className="text-yellow-500">{ui.skills.techSubtitle}</span></h2>
           <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-20">
          {skillsTech.map((skill) => (
            <div key={skill.name} className="flex justify-between items-center border-b border-zinc-800 pb-2 group hover:border-yellow-600/50 transition-colors">
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <SkillDot key={level} filled={level <= skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Soft Skills */}
          <div>
             <h3 className="text-2xl md:text-3xl font-bold font-['Oswald'] text-white uppercase mb-8 text-center md:text-left flex items-center gap-3">
               <Zap className="text-yellow-500" />
               {ui.skills.softTitle} <span className="text-yellow-500">{ui.skills.softSubtitle}</span>
             </h3>
             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               {skillsSoft.map((skill) => (
                 <div key={skill} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full flex items-center gap-2 text-gray-300 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300 hover:-translate-y-1">
                   <span className="uppercase tracking-wider text-sm font-bold">{skill}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* Languages */}
          <div>
             <h3 className="text-2xl md:text-3xl font-bold font-['Oswald'] text-white uppercase mb-8 text-center md:text-left flex items-center gap-3">
               <Globe className="text-yellow-500" />
               {ui.skills.languagesTitle}
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {languages.map((lang) => (
                 <div key={lang} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-between group hover:border-yellow-500/50 transition-colors">
                    <span className="text-gray-300 font-bold uppercase tracking-wider group-hover:text-white">{lang}</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
