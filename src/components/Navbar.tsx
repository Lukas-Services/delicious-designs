
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing routes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b84a9740-d59b-4d4f-9831-e836b3bf6c54.png" 
              alt="Das Kuchenhaus" 
              className="h-12 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link py-2 text-primary/90 hover:text-primary after:bg-primary ${location.pathname === '/' ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link py-2 text-primary/90 hover:text-primary after:bg-primary ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
            >
              Kontakt
            </Link>
            <Link 
              to="/impressum" 
              className={`nav-link py-2 text-primary/90 hover:text-primary after:bg-primary ${location.pathname === '/impressum' ? 'nav-link-active' : ''}`}
            >
              Impressum
            </Link>
          </nav>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/cafefrechen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="tel:+492234 59561" 
              className="text-primary/80 hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a 
              href="mailto:cafe.frechen@gmail.com" 
              className="text-primary/80 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-primary/95 text-white flex flex-col animate-fade-in" style={{ top: '60px' }}>
          <div className="container mx-auto px-4 py-8 flex-grow overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className={`text-xl ${location.pathname === '/' ? 'text-white font-medium' : 'text-white/90'} hover:text-white py-2 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className={`text-xl ${location.pathname === '/contact' ? 'text-white font-medium' : 'text-white/90'} hover:text-white py-2 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link 
                to="/impressum" 
                className={`text-xl ${location.pathname === '/impressum' ? 'text-white font-medium' : 'text-white/90'} hover:text-white py-2 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impressum
              </Link>
            </nav>
            
            <div className="flex justify-center items-center space-x-8 mt-12 pt-8 border-t border-white/20">
              <a 
                href="https://www.instagram.com/cafefrechen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-white/80 hover:text-white transition-colors animate-fade-in"
                style={{ animationDelay: '350ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="tel:+492234 59561" 
                className="flex flex-col items-center text-white/80 hover:text-white transition-colors animate-fade-in"
                style={{ animationDelay: '400ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="text-sm">Anrufen</span>
              </a>
              <a 
                href="mailto:cafe.frechen@gmail.com" 
                className="flex flex-col items-center text-white/80 hover:text-white transition-colors animate-fade-in"
                style={{ animationDelay: '450ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
