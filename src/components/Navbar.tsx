
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-semibold animate-fade-in">Kuchen-Haus Frechen</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link py-2 animate-fade-down" style={{ animationDelay: '100ms' }}>
              Home
            </Link>
            <Link to="/menu" className="nav-link py-2 animate-fade-down" style={{ animationDelay: '200ms' }}>
              Menü
            </Link>
            <Link to="/about" className="nav-link py-2 animate-fade-down" style={{ animationDelay: '300ms' }}>
              Über Uns
            </Link>
            <Link to="/contact" className="nav-link py-2 animate-fade-down" style={{ animationDelay: '400ms' }}>
              Kontakt
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
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground/90 hover:text-foreground py-2 transition-colors animate-fade-down"
                style={{ animationDelay: '100ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-foreground/90 hover:text-foreground py-2 transition-colors animate-fade-down"
                style={{ animationDelay: '150ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menü
              </Link>
              <Link 
                to="/about" 
                className="text-foreground/90 hover:text-foreground py-2 transition-colors animate-fade-down"
                style={{ animationDelay: '200ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über Uns
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground/90 hover:text-foreground py-2 transition-colors animate-fade-down"
                style={{ animationDelay: '250ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <a 
                href="https://www.instagram.com/cafefrechen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors animate-fade-in"
                style={{ animationDelay: '300ms' }}
              >
                <Instagram className="h-5 w-5" />
                <span className="ml-2 text-sm">Instagram</span>
              </a>
              <a 
                href="tel:+492234 59561" 
                className="text-foreground/80 hover:text-foreground transition-colors animate-fade-in"
                style={{ animationDelay: '350ms' }}
              >
                <Phone className="h-5 w-5" />
                <span className="ml-2 text-sm">Anrufen</span>
              </a>
              <a 
                href="mailto:cafe.frechen@gmail.com" 
                className="text-foreground/80 hover:text-foreground transition-colors animate-fade-in"
                style={{ animationDelay: '400ms' }}
              >
                <Mail className="h-5 w-5" />
                <span className="ml-2 text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
