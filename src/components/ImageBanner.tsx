import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner-shop.jpg";

export const ImageBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 container px-4 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Elevate Your Sound
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover the perfect audio companion for every moment
        </p>
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-medium rounded-full transition-smooth"
        >
          SHOP NOW
        </Button>
      </div>
    </section>
  );
};