
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/59b0f9d2-0ff5-4573-9b77-c7f1d43124ad.png",
    title: "Willkommen im Kuchenhaus",
    description: "Genießen Sie unsere köstlichen Torten und Kuchen"
  },
  {
    id: 2,
    image: "/lovable-uploads/edf2ffac-59cf-4c35-a9bb-171399f9105c.png",
    title: "Hausgemachte Spezialitäten",
    description: "Handgefertigt mit den besten Zutaten"
  },
  {
    id: 3,
    image: "/lovable-uploads/60d23e8d-8cc4-4752-a722-176d8b333469.png",
    title: "Gemütliches Ambiente",
    description: "Der perfekte Ort zum Entspannen und Genießen"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Preload images
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

  const handleScrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
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
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10"></div>
          
          {/* Image */}
          <div className="absolute inset-0 w-full h-full">
            <div className={isLoading && currentSlide === index ? "w-full h-full image-loading" : "hidden"}></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center"
              style={{ opacity: imagesLoaded[index] ? 1 : 0, transition: 'opacity 1000ms ease' }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center text-white px-4 [text-shadow:_1px_1px_1px_rgba(0,0,0,0.5)]">
            <div className="max-w-4xl text-center">
              <h1 
                className="text-4xl md:text-6xl font-serif font-semibold mb-4 animate-fade-up [text-shadow:_1px_1px_1px_rgba(0,0,0,0.5)]"
                style={{ animationDelay: '300ms' }}
              >
                {slide.title}
              </h1>
              <p 
                className="text-xl md:text-2xl opacity-90 mb-8 animate-fade-up"
                style={{ animationDelay: '500ms' }}
              >
                {slide.description}
              </p>
              <div className="animate-fade-up" style={{ animationDelay: '700ms' }}>
                <button
                  onClick={handleScrollToFeatures}
                  className="inline-flex items-center bg-white text-foreground px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
                >
                  Unser Angebot
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
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
