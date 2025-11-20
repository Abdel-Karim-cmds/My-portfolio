
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-black min-h-screen text-white selection:bg-yellow-500 selection:text-black">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
