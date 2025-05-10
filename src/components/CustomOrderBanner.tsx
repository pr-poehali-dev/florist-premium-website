import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomOrderBanner = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  const bgImageUrl =
    "https://images.unsplash.com/photo-1553708881-112abc53fe54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  const fallbackImageUrl =
    "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  // Предзагрузка фонового изображения
  React.useEffect(() => {
    const img = new Image();
    img.src = bgImageUrl;
    img.onload = () => setBgLoaded(true);
    img.onerror = () => {
      // Если основное изображение не загрузилось, попробуем fallback
      const fallbackImg = new Image();
      fallbackImg.src = fallbackImageUrl;
      fallbackImg.onload = () => setBgLoaded(true);
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(85, 107, 47, 0.85), rgba(85, 107, 47, 0.85)), url(${bgLoaded ? bgImageUrl : fallbackImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: bgLoaded ? 1 : 0.5,
        }}
      ></div>

      {/* Placeholder background while loading */}
      {!bgLoaded && (
        <div className="absolute inset-0 z-0 bg-olive-DEFAULT/70"></div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 h-20 w-20 border-t-2 border-l-2 border-rose-light opacity-60"></div>
      <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-rose-light opacity-60"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="md:max-w-2xl">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Создадим букет вашей мечты
          </h2>

          <p className="text-cream/90 text-lg mb-8">
            Расскажите нам о своей идее, и наши флористы воплотят её в жизнь.
            Эксклюзивная композиция для особенного случая или уникальный
            подарок, передающий ваши чувства.
          </p>

          <Button className="bg-rose-light text-olive-dark hover:bg-white group">
            <span>Заказать индивидуальный букет</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderBanner;
