
import React from 'react';
import { useLocation } from 'react-router-dom';
import SocialIcons from './SocialIcons';

interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onNavClick }) => {
  const location = useLocation();
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="md:hidden fixed inset-0 z-40 bg-white/95 text-primary flex flex-col animate-fade-in overflow-hidden"
      style={{ 
        top: '70px', // Position below navbar
        height: 'calc(100% - 70px)' // Adjust height to fill remaining space
      }}
    >
      <div className="container mx-auto px-4 py-8 flex-grow overflow-hidden">
        <nav className="flex flex-col space-y-6">
          <a 
            href="/"
            onClick={(e) => onNavClick(e, '/')}
            className={`text-xl ${location.pathname === '/' ? 'text-primary font-medium' : 'text-primary/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
            style={{ animationDelay: '100ms' }}
          >
            Home
          </a>
          <a 
            href="#features"
            onClick={(e) => onNavClick(e, '#features')}
            className="text-xl text-primary/90 hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center"
            style={{ animationDelay: '200ms' }}
          >
            Unser Angebot
          </a>
          <a 
            href="/contact"
            onClick={(e) => onNavClick(e, '/contact')}
            className="text-xl text-primary/90 hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center"
            style={{ animationDelay: '250ms' }}
          >
            Kontakt
          </a>
          <a 
            href="/impressum"
            onClick={(e) => onNavClick(e, '/impressum')}
            className={`text-xl ${location.pathname === '/impressum' ? 'text-primary font-medium' : 'text-primary/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
            style={{ animationDelay: '300ms' }}
          >
            Impressum
          </a>
        </nav>
        
        <SocialIcons isMobile={true} />
      </div>
    </div>
  );
};

export default MobileMenu;
