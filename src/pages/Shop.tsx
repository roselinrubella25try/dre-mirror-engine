import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import headphonesImage from "@/assets/headphones-product.jpg";
import earbudsImage from "@/assets/earbuds-red.jpg";
import speakerImage from "@/assets/speaker-product.jpg";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "headphones", label: "Headphones" },
    { id: "earbuds", label: "Earbuds" },
    { id: "speakers", label: "Speakers" }
  ];

  const products = [
    {
      id: 1,
      image: earbudsImage,
      title: "Powerbeats Pro 2",
      price: "$249.99",
      category: "earbuds",
      isNew: true
    },
    {
      id: 2,
      image: headphonesImage,
      title: "Beats Studio Pro",
      price: "$349.99",
      category: "headphones",
      isNew: false
    },
    {
      id: 3,
      image: speakerImage,
      title: "Beats Pill",
      price: "$149.99",
      category: "speakers",
      isNew: false
    },
    {
      id: 4,
      image: headphonesImage,
      title: "Beats Solo 4",
      price: "$199.99",
      category: "headphones",
      isNew: false
    },
    {
      id: 5,
      image: earbudsImage,
      title: "Beats Fit Pro",
      price: "$199.99",
      category: "earbuds",
      isNew: false
    },
    {
      id: 6,
      image: speakerImage,
      title: "Beats Pill+",
      price: "$179.99",
      category: "speakers",
      isNew: false
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Shop Beats</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience premium sound with our collection of headphones, earbuds, and speakers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-smooth"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.isNew && (
                <Badge className="absolute top-4 left-4 z-10 bg-beats-red text-white">
                  New
                </Badge>
              )}
              <ProductCard 
                image={product.image}
                title={product.title}
                price={product.price}
                featured={product.isNew}
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Products
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}