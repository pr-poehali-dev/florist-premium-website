import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  composition: string;
}

const products: ProductCardProps[] = [
  {
    id: 1,
    name: "Любовные розы",
    price: 5900,
    image:
      "https://cdn.poehali.dev/files/f95d937b-6867-4772-a586-dc44f1a07415.png",
    composition: "Розы, пионы, эвкалипт",
  },
  {
    id: 2,
    name: "Розовое облако",
    price: 4700,
    image:
      "https://cdn.poehali.dev/files/c55bf421-fbdb-4da5-baff-939f01211404.png",
    composition: "Пионы, розы, гипсофила",
  },
  {
    id: 3,
    name: "Нежный рассвет",
    price: 6200,
    image:
      "https://cdn.poehali.dev/files/7b13b4c5-eee3-4e93-ae0a-a2bd7a57d22e.png",
    composition: "Ранункулюсы, розы, эвкалипт",
  },
  {
    id: 4,
    name: "Весенний шепот",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    composition: "Тюльпаны, нарциссы, вербена",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  composition,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage =
    "https://images.unsplash.com/photo-1545165375-8be7215aadba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <Card className="overflow-hidden border border-muted hover:border-gold/30 transition-all duration-300 group">
      <div className="relative overflow-hidden h-64">
        {!isLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
            <span className="sr-only">Загрузка...</span>
          </div>
        )}

        <img
          src={imageError ? fallbackImage : image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setImageError(true);
            setIsLoaded(true);
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-playfair text-xl text-forest-green mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{composition}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium text-forest-green">
            {price.toLocaleString()} ₽
          </p>
          <Button
            size="sm"
            className="bg-forest-green hover:bg-forest-green/90"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const BestSellers = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl text-olive-dark mb-2">
              Наши хиты сезона
            </h2>
            <p className="text-muted-foreground">
              Самые популярные букеты, созданные с любовью
            </p>
          </div>
          <Button
            variant="link"
            className="text-rose-dark font-medium fancy-link"
          >
            Смотреть все
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
