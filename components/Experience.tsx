import React from 'react';
import { Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { content } = useLanguage();
  const { experience, volunteering, education, ui } = content;

  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education & Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-yellow-600 rounded-lg text-black">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold font-['Oswald'] text-white uppercase">{ui.experience.workTitle}</h2>
            </div>

            <div className="space-y-12 relative border-l border-zinc-800 ml-4 pl-8 md:ml-6 md:pl-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-black border-4 border-yellow-600"></div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-lg text-yellow-500 font-['Oswald'] mb-1">{exp.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{exp.dates}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-12 mt-16">
              <div className="p-3 bg-white text-black rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold font-['Oswald'] text-white uppercase">{ui.experience.eduTitle}</h2>
            </div>

            <div className="space-y-12 relative border-l border-zinc-800 ml-4 pl-8 md:ml-6 md:pl-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-black border-4 border-white"></div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-300 font-['Oswald'] mb-1">{edu.institution}</h4>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span>{edu.dates}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-yellow-600 rounded-lg text-black">
                <HeartHandshake size={24} />
              </div>
              <h2 className="text-3xl font-bold font-['Oswald'] text-white uppercase">{ui.experience.volTitle}</h2>
            </div>

            <div className="space-y-6">
              {volunteering.map((vol, idx) => (
                <div key={idx} className="bg-black border border-zinc-800 p-6 rounded-lg hover:border-yellow-600 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-lg font-bold text-white">{vol.role}</h3>
                     <span className="text-xs text-yellow-600 font-bold border border-yellow-600/30 px-2 py-1 rounded">{vol.dates}</span>
                  </div>
                  <h4 className="text-md text-gray-400 font-['Oswald'] mb-3">{vol.organization}</h4>
                  <p className="text-sm text-gray-500">{vol.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
