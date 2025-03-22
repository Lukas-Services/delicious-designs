
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Control body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    
    if (path === '/contact') {
      if (location.pathname === '/') {
        // If we're already on the home page, just scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on another page, navigate to home and then scroll to contact
        navigate('/', { state: { scrollToContact: true } });
      }
    } else {
      navigate(path);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="/"
            onClick={(e) => handleNavClick(e, '/')} 
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/8c556cb5-5a1c-477b-beb9-ba11812bedce.png" 
              alt="Das Kuchenhaus" 
              className="h-12 md:h-14"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className={`nav-link py-2 animate-fade-down text-primary/90 hover:text-primary after:bg-primary ${location.pathname === '/' ? 'nav-link-active' : ''}`} 
              style={{ animationDelay: '100ms' }}
            >
              Home
            </a>
            <a 
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className={`nav-link py-2 animate-fade-down text-primary/90 hover:text-primary after:bg-primary`}
              style={{ animationDelay: '400ms' }}
            >
              Kontakt
            </a>
            <a 
              href="/impressum"
              onClick={(e) => handleNavClick(e, '/impressum')}
              className={`nav-link py-2 animate-fade-down text-primary/90 hover:text-primary after:bg-primary ${location.pathname === '/impressum' ? 'nav-link-active' : ''}`}
              style={{ animationDelay: '500ms' }}
            >
              Impressum
            </a>
          </nav>

          {/* Social Media Icons - Desktop */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-white/95 text-primary flex flex-col animate-fade-in" 
          style={{ top: isMobile ? '56px' : '64px' }}
        >
          <div className="container mx-auto px-4 py-8 flex-grow overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              <a 
                href="/"
                onClick={(e) => handleNavClick(e, '/')}
                className={`text-xl ${location.pathname === '/' ? 'text-primary font-medium' : 'text-primary/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
                style={{ animationDelay: '100ms' }}
              >
                Home
              </a>
              <a 
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className="text-xl text-primary/90 hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center"
                style={{ animationDelay: '250ms' }}
              >
                Kontakt
              </a>
              <a 
                href="/impressum"
                onClick={(e) => handleNavClick(e, '/impressum')}
                className={`text-xl ${location.pathname === '/impressum' ? 'text-primary font-medium' : 'text-primary/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
                style={{ animationDelay: '300ms' }}
              >
                Impressum
              </a>
            </nav>
            
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
