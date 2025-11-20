
import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const navLinks = [
    { name: content.ui.nav.about, href: '#about' },
    { name: content.ui.nav.expertise, href: '#expertise' },
    { name: content.ui.nav.skills, href: '#skills' },
    { name: content.ui.nav.projects, href: '#projects' },
    { name: content.ui.nav.experience, href: '#experience' },
    { name: content.ui.nav.certificates, href: '#certificates' },
    { name: content.ui.nav.testimonials, href: '#testimonials' },
    { name: content.ui.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-yellow-600/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-['Oswald'] tracking-widest flex items-center gap-2 text-white">
          <ShieldCheck className="text-yellow-500" />
          <span>ABDEL <span className="text-yellow-500">KARIM</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 border border-yellow-600/50 rounded-full hover:bg-yellow-600/20 text-white transition-all"
            aria-label="Toggle Language"
          >
            <Globe size={16} className="text-yellow-500" />
            <span className="text-xs font-bold uppercase">{language}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
           <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 border border-yellow-600/50 rounded-full hover:bg-yellow-600/20 text-white transition-all"
          >
            <span className="text-xs font-bold uppercase">{language}</span>
          </button>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-yellow-500" /> : <Menu className="text-yellow-500" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-yellow-600/30 py-6 px-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg uppercase font-bold text-white hover:text-yellow-500 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
