import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { ui } = content;

  return (
    <footer className="bg-black py-8 border-t border-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Baschirou Abdel Karim. {ui.footer.rights}
        </p>
        <p className="text-gray-700 text-xs mt-2">
          {ui.footer.designed}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
