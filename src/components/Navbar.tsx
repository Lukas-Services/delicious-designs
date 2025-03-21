
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-semibold animate-fade-in">Das Kuchenhaus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link py-2 animate-fade-down ${location.pathname === '/' ? 'nav-link-active' : ''}`} 
              style={{ animationDelay: '100ms' }}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`nav-link py-2 animate-fade-down ${location.pathname === '/menu' ? 'nav-link-active' : ''}`}
              style={{ animationDelay: '200ms' }}
            >
              Menü
            </Link>
            <Link 
              to="/about" 
              className={`nav-link py-2 animate-fade-down ${location.pathname === '/about' ? 'nav-link-active' : ''}`}
              style={{ animationDelay: '300ms' }}
            >
              Über Uns
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link py-2 animate-fade-down ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
              style={{ animationDelay: '400ms' }}
            >
              Kontakt
            </Link>
            <Link 
              to="/impressum" 
              className={`nav-link py-2 animate-fade-down ${location.pathname === '/impressum' ? 'nav-link-active' : ''}`}
              style={{ animationDelay: '500ms' }}
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
              className="text-foreground/80 hover:text-foreground transition-colors animate-fade-down"
              style={{ animationDelay: '500ms' }}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="tel:+492234 59561" 
              className="text-foreground/80 hover:text-foreground transition-colors animate-fade-down"
              style={{ animationDelay: '600ms' }}
            >
              <Phone className="h-5 w-5" />
            </a>
            <a 
              href="mailto:cafe.frechen@gmail.com" 
              className="text-foreground/80 hover:text-foreground transition-colors animate-fade-down"
              style={{ animationDelay: '700ms' }}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white flex flex-col animate-fade-in" style={{ top: '60px' }}>
          <div className="container mx-auto px-4 py-8 flex-grow overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className={`text-xl font-serif ${location.pathname === '/' ? 'text-primary font-medium' : 'text-foreground/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
                style={{ animationDelay: '100ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className={`text-xl font-serif ${location.pathname === '/menu' ? 'text-primary font-medium' : 'text-foreground/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
                style={{ animationDelay: '150ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menü
              </Link>
              <Link 
                to="/about" 
                className={`text-xl font-serif ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-foreground/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
                style={{ animationDelay: '200ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über Uns
              </Link>
              <Link 
                to="/contact" 
                className={`text-xl font-serif ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-foreground/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
                style={{ animationDelay: '250ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link 
                to="/impressum" 
                className={`text-xl font-serif ${location.pathname === '/impressum' ? 'text-primary font-medium' : 'text-foreground/90'} hover:text-primary py-2 transition-colors animate-fade-down flex items-center justify-center`}
                style={{ animationDelay: '300ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Impressum
              </Link>
            </nav>
            
            <div className="flex justify-center items-center space-x-8 mt-12 pt-8 border-t border-gray-100">
              <a 
                href="https://www.instagram.com/cafefrechen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors animate-fade-in"
                style={{ animationDelay: '350ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                  <Instagram className="h-6 w-6" />
                </div>
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="tel:+492234 59561" 
                className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors animate-fade-in"
                style={{ animationDelay: '400ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="text-sm">Anrufen</span>
              </a>
              <a 
                href="mailto:cafe.frechen@gmail.com" 
                className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors animate-fade-in"
                style={{ animationDelay: '450ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-2">
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
