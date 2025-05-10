
import React, { useState } from "react";
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
    <Card className="overflow-hidden border border-olive-light/20 hover:border-rose-light/50 transition-all duration-300 group">
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
        <h3 className="font-playfair text-xl text-olive-DEFAULT mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{composition}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium text-olive-dark">
            {price.toLocaleString()} ₽
          </p>
          <Button
            size="sm"
            className="bg-olive-DEFAULT hover:bg-olive-dark text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
