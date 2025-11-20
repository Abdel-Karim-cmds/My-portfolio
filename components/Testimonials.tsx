import React, { useState } from 'react';
import { Quote, X, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TestimonialItem } from '../types';

const Testimonials: React.FC = () => {
  const { content } = useLanguage();
  const { testimonials, ui } = content;
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialItem | null>(null);

  const MAX_LENGTH = 150;

  return (
    <section id="testimonials" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-bold font-['Oswald'] text-white uppercase mb-4">{ui.testimonials.title}</h2>
           <div className="w-24 h-1 bg-yellow-600 mx-auto mb-4"></div>
           <p className="text-gray-400 max-w-2xl mx-auto">{ui.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => {
            const isLong = item.quote.length > MAX_LENGTH;
            const displayQuote = isLong ? `${item.quote.substring(0, MAX_LENGTH)}...` : item.quote;

            return (
              <div key={index} className="bg-black border border-zinc-800 p-8 rounded-xl relative hover:border-yellow-600/50 transition-colors duration-300 flex flex-col h-full">
                <div className="absolute -top-5 left-8 bg-zinc-900 p-3 rounded-full text-yellow-500 border border-zinc-800">
                  <Quote size={24} />
                </div>
                
                <div className="pt-6 flex-grow">
                  <p className="text-gray-300 italic mb-6 leading-relaxed relative z-10">
                    "{displayQuote}"
                    {isLong && (
                      <button 
                        onClick={() => setSelectedTestimonial(item)}
                        className="ml-2 text-yellow-500 font-bold text-sm hover:underline focus:outline-none"
                      >
                        {ui.testimonials.readMore}
                      </button>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-900">
                  <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-gray-500">
                     <User size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-['Oswald'] uppercase tracking-wide">{item.name}</h4>
                    <p className="text-yellow-600 text-xs font-bold">{item.position}</p>
                    <p className="text-gray-600 text-xs mt-1">{item.organization}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-yellow-600/30 rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl shadow-yellow-900/20">
            <button 
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-yellow-600/10 rounded-full text-yellow-500">
                  <Quote size={32} />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white font-['Oswald'] uppercase">{selectedTestimonial.name}</h3>
                 <p className="text-yellow-600 font-medium">{selectedTestimonial.position}</p>
                 <p className="text-gray-500 text-sm">{selectedTestimonial.organization}</p>
               </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 italic leading-relaxed">
                "{selectedTestimonial.quote}"
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="px-6 py-2 border border-zinc-700 hover:border-yellow-500 rounded-full text-sm font-bold text-white transition-all"
              >
                {ui.testimonials.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;