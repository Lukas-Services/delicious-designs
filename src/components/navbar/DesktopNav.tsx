
import React from 'react';
import { useLocation } from 'react-router-dom';

interface DesktopNavProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ onNavClick }) => {
  const location = useLocation();
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <a 
        href="/"
        onClick={(e) => onNavClick(e, '/')}
        className={`nav-link py-2 animate-fade-down text-primary/90 hover:text-primary after:bg-primary ${location.pathname === '/' ? 'nav-link-active' : ''}`} 
        style={{ animationDelay: '100ms' }}
      >
        Home
      </a>
      <a 
        href="#features"
        onClick={(e) => onNavClick(e, '#features')}
        className="nav-link py-2 animate-fade-down text-primary/90 hover:text-primary after:bg-primary"
        style={{ animationDelay: '200ms' }}
      >
        Unser Angebot
      </a>
      <a 
        href="/contact"
        onClick={(e) => onNavClick(e, '/contact')}
        className="nav-link py-2 animate-fade-down text-primary/90 hover:text-primary after:bg-primary"
        style={{ animationDelay: '300ms' }}
      >
        Kontakt
      </a>
      <a 
        href="/impressum"
        onClick={(e) => onNavClick(e, '/impressum')}
        className={`nav-link py-2 animate-fade-down text-primary/90 hover:text-primary after:bg-primary ${location.pathname === '/impressum' ? 'nav-link-active' : ''}`}
        style={{ animationDelay: '400ms' }}
      >
        Impressum
      </a>
    </nav>
  );
};

export default DesktopNav;
