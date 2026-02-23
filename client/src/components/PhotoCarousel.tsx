import { useState, useEffect } from 'react';

interface PhotoCarouselProps {
  images: string[];
  autoScrollInterval?: number;
}

export default function PhotoCarousel({ images, autoScrollInterval = 4000 }: PhotoCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [images.length, autoScrollInterval]);

  return (
    <section className="w-full py-12 bg-background overflow-hidden">
      <div className="relative w-full">
        {/* Main carousel - Full width fade transition */}
        <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Carousel slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop carousel - 3 items visible */}
        <div className="hidden md:flex gap-4 mt-8 px-4 max-w-7xl mx-auto justify-center">
          {images.slice(0, 3).map((image, idx) => (
            <div
              key={idx}
              className="flex-1 h-48 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setCurrentSlide(idx)}
            >
              <img
                src={image}
                alt={`Carousel item ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide
                  ? 'bg-primary w-8'
                  : 'bg-border w-2 hover:bg-muted-foreground'
              }`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
