import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  featured?: boolean;
}

export const ProductCard = ({ image, title, price, featured = false }: ProductCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-premium ${featured ? 'border-beats-red' : ''}`}>
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-2xl font-bold mb-4">{price}</p>
        <Button 
          variant={featured ? "default" : "outline"} 
          className={`w-full transition-smooth ${featured ? 'bg-beats-red hover:bg-beats-red/90' : ''}`}
        >
          Shop Now
        </Button>
      </div>
    </Card>
  );
};