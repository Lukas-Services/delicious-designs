
import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent text-accent-foreground rounded-full mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Besuchen Sie uns
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Wir freuen uns auf Ihren Besuch im Kuchen-Haus Frechen. Reservieren Sie einen Tisch oder kontaktieren Sie uns für spezielle Anlässe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <a 
              href="mailto:cafe.frechen@gmail.com"
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                <Mail className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Email</h3>
              <p className="text-muted-foreground">cafe.frechen@gmail.com</p>
            </a>
            
            <a 
              href="https://www.instagram.com/cafefrechen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                <Instagram className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Instagram</h3>
              <p className="text-muted-foreground">@cafefrechen</p>
            </a>
            
            <a 
              href="tel:+492234 59561"
              className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: '600ms' }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                <Phone className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Telefon</h3>
              <p className="text-muted-foreground">+49 2234 59561</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
