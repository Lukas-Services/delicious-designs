
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavLogoProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

const NavLogo: React.FC<NavLogoProps> = ({ onNavClick }) => {
  return (
    <a 
      href="/"
      onClick={(e) => onNavClick(e, '/')} 
      className="flex items-center"
    >
      <img 
        src="/lovable-uploads/60d23e8d-8cc4-4752-a722-176d8b333469.png" 
        alt="Kuchenhaus" 
        className="h-14 md:h-16"
      />
    </a>
  );
};

export default NavLogo;
