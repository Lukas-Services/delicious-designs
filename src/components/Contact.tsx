
import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent text-accent-foreground rounded-full mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Besuchen Sie uns
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Wir freuen uns auf Ihren Besuch im Das Kuchenhaus Frechen. Reservieren Sie einen Tisch oder kontaktieren Sie uns für spezielle Anlässe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
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
          
          <div className="rounded-2xl overflow-hidden shadow-md animate-fade-up mt-6">
            <div className="bg-white p-6 md:p-8">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-2" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-1">Unser Standort</h3>
                  <p className="text-muted-foreground">Hauptstraße 115, 50226 Frechen</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148.22106622617747!2d6.807643264398876!3d50.909655810297984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf3bd14df34ae7%3A0x20595b3da005c64a!2sDAS%20KUCHENHAUS!5e1!3m2!1sde!2sde!4v1742555201135!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Standort Das Kuchenhaus"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
