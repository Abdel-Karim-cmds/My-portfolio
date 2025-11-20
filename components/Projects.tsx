import React from 'react';
import { FolderGit2, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { projects, ui } = content;

  return (
    <section id="projects" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-['Oswald'] text-white uppercase text-right">
            {ui.projects.featured} <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-700">{ui.projects.title}</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-black border border-zinc-800 p-8 hover:border-yellow-600/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-900 rounded-lg text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                  <Calendar size={12} />
                  <span>{project.dates}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-['Oswald'] text-white mb-4 group-hover:text-yellow-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack?.map((tech) => (
                  <span key={tech} className="text-xs font-bold text-yellow-600/80 bg-yellow-900/10 px-2 py-1 rounded border border-yellow-900/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
