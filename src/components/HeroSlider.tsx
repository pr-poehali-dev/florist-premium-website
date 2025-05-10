import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sliderItems = [
  {
    id: 1,
    title: "Осенняя симфония",
    description: "Яркие краски осени в изысканных сочетаниях",
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    btnText: "Выбрать букет",
  },
  {
    id: 2,
    title: "Пастельные мечты",
    description: "Нежные оттенки для создания романтичного настроения",
    image:
      "https://images.unsplash.com/photo-1561181286-d5c92b599ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    btnText: "Смотреть коллекцию",
  },
  {
    id: 3,
    title: "Тропические акценты",
    description: "Экзотические композиции для особенных моментов",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    btnText: "Открыть для себя",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  // Предзагрузка изображений
  useEffect(() => {
    const loadImages = async () => {
      const promises = sliderItems.map((item) => {
        return new Promise<number>((resolve) => {
          const img = new Image();
          img.src = item.image;
          img.onload = () => resolve(item.id);
        });
      });

      const results = await Promise.all(promises);
      const loadedMap = results.reduce(
        (acc, id) => {
          acc[id] = true;
          return acc;
        },
        {} as Record<number, boolean>,
      );

      setImagesLoaded(loadedMap);
    };

    loadImages();
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? sliderItems.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {sliderItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="w-full md:max-w-lg text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 animate-slideUp">
                {item.title}
              </h2>
              <p
                className="text-lg md:text-xl mb-6 animate-slideUp"
                style={{ animationDelay: "0.1s" }}
              >
                {item.description}
              </p>
              <Button
                className="bg-cream text-forest-green hover:bg-cream/90 border border-gold/20 animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                {item.btnText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Fallback Image while loading */}
      {!Object.keys(imagesLoaded).length && (
        <div className="absolute inset-0 flex items-center justify-center bg-forest-green/20">
          <div className="animate-pulse w-16 h-16 rounded-full bg-gold/30" />
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {sliderItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-white"
                : "w-4 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
