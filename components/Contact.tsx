
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { content } = useLanguage();
  const { personalInfo, references, ui } = content;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const response = await fetch('https://portfolio-backend-jet-pi.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset after 3 seconds
        setTimeout(() => setFormState('idle'), 3000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative border-t border-yellow-600/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold font-['Oswald'] text-white uppercase mb-8">
              {ui.contact.titleGet} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">{ui.contact.titleTouch}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              {ui.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{ui.contact.emailLabel}</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-xl text-white font-bold hover:text-yellow-500 transition-colors">{personalInfo.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{ui.contact.phoneLabel}</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-xl text-white font-bold hover:text-yellow-500 transition-colors">{personalInfo.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{ui.contact.locationLabel}</p>
                  <p className="text-xl text-white font-bold">{ui.contact.locationValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-zinc-800">
               <h3 className="text-2xl font-bold font-['Oswald'] text-white mb-6">{ui.contact.referencesTitle}</h3>
               <div className="space-y-6">
                 {references.map((ref, i) => (
                   <div key={i} className="text-sm">
                      <p className="text-yellow-500 font-bold text-lg">{ref.name}</p>
                      <p className="text-white">{ref.title}</p>
                      <p className="text-gray-500 italic mb-1">{ref.institution}</p>
                      <p className="text-gray-400">{ref.contact}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">{ui.contact.formTitle}</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{ui.contact.nameLabel}</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                    placeholder={ui.contact.namePlaceholder}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{ui.contact.emailLabel}</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{ui.contact.msgLabel}</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all resize-none"
                    placeholder={ui.contact.messagePlaceholder}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting' || formState === 'success'}
                  className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                    formState === 'success' ? 'bg-green-600 text-white' :
                    formState === 'error' ? 'bg-red-600 text-white' :
                    'bg-gradient-to-r from-yellow-500 to-yellow-700 text-black hover:from-yellow-400 hover:to-yellow-600'
                  }`}
                >
                  {formState === 'submitting' ? (
                    <span className="animate-pulse">{ui.contact.sendingBtn}</span>
                  ) : formState === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      <span>{ui.contact.sentBtn}</span>
                    </>
                  ) : formState === 'error' ? (
                    <>
                      <AlertCircle size={20} />
                      <span>Error</span>
                    </>
                  ) : (
                    <>
                      <span>{ui.contact.sendBtn}</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
