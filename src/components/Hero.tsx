import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/Kuchenhaus_frechen_Pinsa_Flammkuchen_Torten_schmal.jpg",
    title: "Willkommen im Kuchenhaus",
    description: "Genießen Sie unsere köstlichen Torten und Kuchen"
  },
  {
    id: 2,
    image: "/lovable-uploads/Kuchenhaus_frechen_torte_konditor_meisterbetrieb_kuchen_kaffee_fruehstueck_schmal.jpg",
    title: "Hausgemachte Spezialitäten",
    description: "Handgefertigt mit den besten Zutaten"
  },
  {
    id: 3,
    image: "/lovable-uploads/Kuchenhaus_frechen_torten_kaffee_kuchen_snacks_fruehstueck_schmal.jpg",
    title: "Gemütliches Ambiente",
    description: "Der perfekte Ort zum Entspannen und Genießen"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  useEffect(() => {
    setIsLoading(!imagesLoaded[currentSlide]);
  }, [currentSlide, imagesLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10"></div>
          
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center"
              style={{ opacity: imagesLoaded[index] ? 1 : 0, transition: 'opacity 1000ms ease' }}
            />
          </div>
          
          <div className="relative z-20 h-full flex items-center justify-center text-gray-100 px-4">
            <div className="max-w-4xl text-center">
              <h1 
                className="text-5xl md:text-7xl font-serif font-semibold mb-4 drop-shadow-lg animate-fade-up"
                style={{ animationDelay: '300ms', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)' }}
              >
                {slide.title}
              </h1>
              <p 
                className="text-2xl md:text-3xl opacity-90 mb-8 drop-shadow-md animate-fade-up"
                style={{ animationDelay: '500ms', textShadow: '1px 1px 1px rgba(0, 0, 0, 0.7)' }}
              >
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;