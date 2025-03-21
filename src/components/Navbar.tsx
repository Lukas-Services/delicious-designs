import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/b84a9740-d59b-4d4f-9831-e836b3bf6c54.png" alt="Das Kuchenhaus" className="h-12 md:h-16" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary/90 hover:text-primary">Home</Link>
          <Link to="/contact" className="text-primary/90 hover:text-primary">Kontakt</Link>
          <Link to="/impressum" className="text-primary/90 hover:text-primary">Impressum</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-white flex flex-col p-6">
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-xl text-primary hover:text-primary-dark" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/contact" className="text-xl text-primary hover:text-primary-dark" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</Link>
            <Link to="/impressum" className="text-xl text-primary hover:text-primary-dark" onClick={() => setIsMobileMenuOpen(false)}>Impressum</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
