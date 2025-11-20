import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Certificates: React.FC = () => {
  const { content } = useLanguage();
  const { certificates, ui } = content;

  return (
    <section id="certificates" className="py-20 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-bold font-['Oswald'] text-white uppercase mb-4">{ui.certificates.title}</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">{ui.certificates.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-zinc-900/30 rounded-xl border border-zinc-800 p-6 hover:border-yellow-500/50 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden">
              
              {/* Background Glow - Added pointer-events-none to prevent blocking clicks */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-all"></div>
                {/* Using image URL if available, otherwise icon */}
                <img src={cert.imageUrl} alt={cert.name} className="w-full h-full object-contain relative z-10 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-['Oswald'] uppercase">{cert.name}</h3>
              <p className="text-yellow-600 text-sm font-bold tracking-widest mb-6">{cert.issuer}</p>

              {/* Added relative z-10 to ensure button is clickable */}
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noreferrer"
                className="mt-auto flex items-center gap-2 px-5 py-2 border border-zinc-700 rounded-full text-sm text-gray-300 hover:border-yellow-500 hover:text-white hover:bg-yellow-600 transition-all relative z-10"
              >
                <span>{ui.certificates.verifyBtn}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;