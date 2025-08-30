import { ProductCard } from "./ProductCard";
import headphonesImage from "@/assets/headphones-product.jpg";
import earbudsImage from "@/assets/earbuds-red.jpg";
import speakerImage from "@/assets/speaker-product.jpg";

export const ProductShowcase = () => {
  const products = [
    {
      image: earbudsImage,
      title: "Powerbeats Pro 2",
      price: "$249.99",
      featured: true
    },
    {
      image: headphonesImage,
      title: "Beats Studio Pro",
      price: "$349.99"
    },
    {
      image: speakerImage,
      title: "Beats Pill",
      price: "$149.99"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Popular Now</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most-loved products designed for superior sound and unmatched performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};