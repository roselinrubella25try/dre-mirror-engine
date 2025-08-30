import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./ProductCard";
import headphonesImg from "@/assets/headphones-product.jpg";
import earbudsImg from "@/assets/earbuds-red.jpg";
import speakerImg from "@/assets/speaker-product.jpg";

const products = [
  {
    id: 1,
    title: "Beats Studio Pro",
    price: "$349.95",
    image: headphonesImg,
  },
  {
    id: 2,
    title: "Beats Fit Pro",
    price: "$199.95", 
    image: earbudsImg,
  },
  {
    id: 3,
    title: "Beats Pill",
    price: "$149.95",
    image: speakerImg,
  },
  {
    id: 4,
    title: "Beats Solo4",
    price: "$199.95",
    image: headphonesImg,
  },
  {
    id: 5,
    title: "Beats Studio Buds+",
    price: "$179.95",
    image: earbudsImg,
  }
];

export const ProductCarousel = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest collection of premium audio products
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ProductCard {...product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};