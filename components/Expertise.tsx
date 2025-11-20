
import React from 'react';
import { ShieldAlert, Code, Lock, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.ElementType } = {
  ShieldAlert,
  Code,
  Lock,
  Server
};

const Expertise: React.FC = () => {
  const { content } = useLanguage();
  const { services, ui } = content;

  return (
    <section id="expertise" className="py-20 bg-zinc-950 relative border-t border-zinc-900">
       {/* Decorative background element */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-bold font-['Oswald'] text-white uppercase mb-4">{ui.expertise.title}</h2>
           <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light italic">
             {ui.expertise.subtitle}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            
            return (
              <div 
                key={index} 
                className="group bg-black border border-zinc-800 p-8 md:p-10 rounded-xl hover:border-yellow-600/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,138,4,0.1)] flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0 p-4 bg-zinc-900 rounded-lg text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black transition-colors duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold font-['Oswald'] text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
