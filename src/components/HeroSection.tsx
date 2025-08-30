import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-athlete.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container px-4 lg:px-8">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powerbeats Pro 2
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Featuring Shohei Ohtani
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 transition-smooth px-8 py-6 text-lg font-medium rounded-full"
          >
            SHOP
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-8 bg-white/40"></div>
          <span className="text-sm uppercase tracking-wider">Scroll</span>
        </div>
      </div>
    </section>
  );
};