import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Gift, Star } from "lucide-react";
import headphonesImage from "@/assets/headphones-product.jpg";
import earbudsImage from "@/assets/earbuds-red.jpg";
import speakerImage from "@/assets/speaker-product.jpg";

export default function GiftGuide() {
  const giftCategories = [
    {
      title: "For Athletes",
      description: "Sweat-resistant and secure-fit options",
      icon: <Star className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      title: "For Music Lovers",
      description: "Premium sound quality and comfort",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-purple-500"
    },
    {
      title: "For Commuters",
      description: "Noise cancellation and long battery life",
      icon: <Gift className="h-6 w-6" />,
      color: "bg-green-500"
    }
  ];

  const featuredGifts = [
    {
      image: earbudsImage,
      title: "Powerbeats Pro 2",
      price: "$249.99",
      reason: "Perfect for workouts"
    },
    {
      image: headphonesImage,
      title: "Beats Studio Pro",
      price: "$349.99",
      reason: "Studio-quality sound"
    },
    {
      image: speakerImage,
      title: "Beats Pill",
      price: "$149.99",
      reason: "Portable party starter"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-beats-red to-red-600 text-white py-20">
          <div className="container px-4 text-center">
            <div className="animate-fade-in">
              <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
                Holiday 2024
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Gift Guide</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Find the perfect Beats for everyone on your list. Premium audio experiences that make unforgettable gifts.
              </p>
            </div>
          </div>
        </section>

        {/* Gift Categories */}
        <section className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Shop By Lifestyle</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {giftCategories.map((category, index) => (
                <Card 
                  key={category.title}
                  className="p-8 hover:shadow-premium transition-all duration-300 cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Gifts */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Top Gift Picks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredGifts.map((gift, index) => (
                <div 
                  key={gift.title}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <Badge className="absolute top-4 left-4 z-10 bg-beats-red text-white">
                      Gift Pick
                    </Badge>
                    <ProductCard {...gift} featured />
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground italic">
                        {gift.reason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Holiday Special */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <Gift className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Free Holiday Wrapping</h2>
              <p className="text-xl mb-8 opacity-90">
                Make your gift extra special with complimentary holiday wrapping on all orders over $150.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-accent text-accent-foreground px-6 py-3 text-lg">
                  Free Shipping
                </Badge>
                <Badge className="bg-accent text-accent-foreground px-6 py-3 text-lg">
                  Extended Returns
                </Badge>
                <Badge className="bg-accent text-accent-foreground px-6 py-3 text-lg">
                  Gift Wrapping
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}