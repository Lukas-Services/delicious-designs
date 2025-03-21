
import React from 'react';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Kontakt</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefon</p>
                      <a href="tel:+492234 59561" className="font-medium hover:text-primary transition-colors">
                        02234 59561
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-Mail</p>
                      <a href="mailto:cafe.frechen@gmail.com" className="font-medium hover:text-primary transition-colors">
                        cafe.frechen@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram</p>
                      <a 
                        href="https://www.instagram.com/cafefrechen" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        @cafefrechen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Öffnungszeiten</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Montag - Freitag
                    </span>
                    <span className="font-medium">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Samstag
                    </span>
                    <span className="font-medium">09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Sonntag
                    </span>
                    <span className="font-medium">09:00 - 17:00</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Adresse</h2>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Das Kuchenhaus</p>
                    <p className="text-muted-foreground">Hauptstraße 115</p>
                    <p className="text-muted-foreground">50226 Frechen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full w-full rounded-xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.7471352308731!2d6.806397175822296!3d50.909733393667054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf3bd14df34ae7%3A0x20595b3da005c64a!2sDAS%20KUCHENHAUS!5e0!3m2!1sde!2sde!4v1742556423107!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
