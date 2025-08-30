import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import cableImage from "@/assets/beats-cable.jpg";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer">
            <img 
              src={cableImage} 
              alt="Beats Cable and Accessories" 
              className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Perfect Connection
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Discover how our premium cables and accessories enhance your listening experience. 
              From fast charging to premium audio quality, every detail matters.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Watch our latest film showcasing the craftsmanship and innovation behind 
              every Beats accessory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-full"
              >
                SHOP ACCESSORIES
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-lg font-medium rounded-full"
              >
                <Play className="w-5 h-5 mr-2" />
                WATCH FILM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};