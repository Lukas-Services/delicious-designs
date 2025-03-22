
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: "/lovable-uploads/60d23e8d-8cc4-4752-a722-176d8b333469.png",
    alt: "Köstliche Torten und Kuchen",
    caption: "Unsere hausgemachten Torten"
  },
  {
    src: "/lovable-uploads/59b0f9d2-0ff5-4573-9b77-c7f1d43124ad.png",
    alt: "Gemütliches Café Ambiente",
    caption: "Unser gemütliches Café"
  },
  {
    src: "/lovable-uploads/edf2ffac-59cf-4c35-a9bb-171399f9105c.png",
    alt: "Frische Flammkuchen",
    caption: "Knusprige Flammkuchen"
  },
  {
    src: "/lovable-uploads/ae7eba97-13e8-4f4f-b8e9-931c2a67016b.png",
    alt: "Frühstücksangebot",
    caption: "Unser reichhaltiges Frühstücksangebot"
  }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white text-accent-foreground rounded-full mb-4">
            Impressionen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Einblicke in unser Café
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Entdecken Sie die Vielfalt unserer Angebote und die gemütliche Atmosphäre unseres Cafés in Frechen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="cafe-card overflow-hidden group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 150 + 300}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden h-60 md:h-72">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in">
          <button 
            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors z-50"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-50"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <div className="relative max-w-5xl max-h-[80vh]">
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-center">{galleryImages[currentImageIndex].caption}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-50"
            onClick={goToNext}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
