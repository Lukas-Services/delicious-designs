
import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

interface SocialIconsProps {
  isMobile?: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex justify-center items-center space-x-8 mt-12 pt-8 border-t border-primary/20">
        <a 
          href="https://www.instagram.com/cafefrechen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center text-primary/80 hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: '350ms' }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-2">
            <Instagram className="h-6 w-6" />
          </div>
          <span className="text-sm">Instagram</span>
        </a>
        <a 
          href="tel:+492234 59561" 
          className="flex flex-col items-center text-primary/80 hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-2">
            <Phone className="h-6 w-6" />
          </div>
          <span className="text-sm">Anrufen</span>
        </a>
        <a 
          href="mailto:cafe.frechen@gmail.com" 
          className="flex flex-col items-center text-primary/80 hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: '450ms' }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-2">
            <Mail className="h-6 w-6" />
          </div>
          <span className="text-sm">Email</span>
        </a>
      </div>
    );
  }
  
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a 
        href="https://www.instagram.com/cafefrechen" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary/80 hover:text-primary transition-colors animate-fade-down"
        style={{ animationDelay: '500ms' }}
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a 
        href="tel:+492234 59561" 
        className="text-primary/80 hover:text-primary transition-colors animate-fade-down"
        style={{ animationDelay: '600ms' }}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a 
        href="mailto:cafe.frechen@gmail.com" 
        className="text-primary/80 hover:text-primary transition-colors animate-fade-down"
        style={{ animationDelay: '700ms' }}
      >
        <Mail className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialIcons;
