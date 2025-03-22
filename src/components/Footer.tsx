
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent py-16 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <img 
              src="/lovable-uploads/8c556cb5-5a1c-477b-beb9-ba11812bedce.png" 
              alt="Kuchenhaus" 
              className="h-16"
            />
            <p className="text-foreground/80 max-w-xs">
              Genießen Sie täglich frische Kuchen, Torten und andere Köstlichkeiten in unserem gemütlichen Café in Frechen.
            </p>
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/cafefrechen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="tel:+492234 59561" 
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="mailto:cafe.frechen@gmail.com" 
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-medium">Öffnungszeiten</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-foreground/70" />
                <span className="text-foreground/80">Montag - Freitag: 09:00 - 17:00</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-foreground/70" />
                <span className="text-foreground/80">Samstag: 09:00 - 16:00</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-foreground/70" />
                <span className="text-foreground/80">Sonntag: 09:00 - 17:00</span>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-foreground/70" />
                <span className="text-foreground/80">
                  Hauptstraße 115<br/>
                  50226 Frechen
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-medium">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Home
              </Link>
              {/* <a 
                href="#features" 
                onClick={(e) => {
                  e.preventDefault();
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Unser Angebot
              </a> */}
              <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Kontakt
              </Link>
              <Link to="/impressum" className="text-foreground/80 hover:text-foreground transition-colors">
                Impressum
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-6 text-center animate-fade-in">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Kuchenhaus, Frechen. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
