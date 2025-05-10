import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const imageSrc =
    "https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
  const fallbackImage =
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80";

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] relative z-10">
              {!imageLoaded && !imageError && (
                <Skeleton className="w-full h-full rounded-md absolute inset-0" />
              )}
              <img
                src={imageError ? fallbackImage : imageSrc}
                alt="Флористическая мастерская"
                className={`w-full h-full object-cover rounded-md shadow-lg ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
            <div className="absolute top-8 -right-4 w-24 h-24 md:w-32 md:h-32 border border-gold rounded-full z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-40 md:h-40 border border-gold rounded-full z-0"></div>
          </div>

          {/* Text Side */}
          <div className="md:pl-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles size={16} className="text-accent" />
              <span>Наша цветочная история</span>
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-6 leading-tight">
              Искусство и природа <br />в каждом букете
            </h2>

            <div className="prose prose-primary max-w-none mb-8">
              <p>
                В "Оливии" мы верим, что цветы говорят на языке чувств. Наши
                флористы с душой подходят к созданию каждой композиции,
                тщательно подбирая оттенки и формы цветов для передачи нужного
                настроения.
              </p>
              <p>
                Мы работаем только с свежими сезонными цветами, чтобы каждый
                букет радовал вас как можно дольше. Каждая композиция становится
                особенным посланием, которое говорит больше, чем слова.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-playfair text-burgundy font-bold mb-2">
                  7+
                </div>
                <p className="text-forest-green">Лет создаем красоту</p>
              </div>
              <div>
                <div className="text-3xl font-playfair text-burgundy font-bold mb-2">
                  5000+
                </div>
                <p className="text-forest-green">Счастливых клиентов</p>
              </div>
              <div>
                <div className="text-3xl font-playfair text-burgundy font-bold mb-2">
                  24/7
                </div>
                <p className="text-forest-green">Доставка по городу</p>
              </div>
              <div>
                <div className="text-3xl font-playfair text-burgundy font-bold mb-2">
                  100%
                </div>
                <p className="text-forest-green">Гарантия свежести</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
