
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
        src="/lovable-uploads/8c556cb5-5a1c-477b-beb9-ba11812bedce.png" 
        alt="Kuchenhaus" 
        className="h-14 md:h-16"
      />
    </a>
  );
};

export default NavLogo;
