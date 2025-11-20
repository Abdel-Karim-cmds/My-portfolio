
import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import avatar from '../images/avatar.png';

const About: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, interests, ui } = content;

  return (
    <section id="about" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          <div className="md:w-1/3 relative w-full max-w-md mx-auto md:mx-0">
            <div className="aspect-[3/4] bg-zinc-900 border-2 border-yellow-600/30 rounded-lg overflow-hidden relative shadow-2xl shadow-yellow-900/10 group">
               {/* Placeholder for user image since none provided, using a tech/abstract image */}
               <img 
                src={avatar} 
                alt="Baschirou Abdel Karim" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-yellow-500"></div>
              <h2 className="text-3xl md:text-5xl font-bold font-['Oswald'] text-white uppercase">{ui.about.title}</h2>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none mb-10">
              <p className="text-gray-300 leading-relaxed border-l-4 border-yellow-600 pl-6 italic">
                "{personalInfo.profile}"
              </p>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-yellow-600/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-yellow-500">
                <Heart size={24} />
                <h3 className="text-xl font-bold uppercase font-['Oswald']">{ui.about.interestsTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map(interest => (
                  <span key={interest} className="px-4 py-2 bg-zinc-800 text-gray-300 text-sm rounded-full border border-zinc-700 hover:text-white hover:border-yellow-600 transition-colors">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
