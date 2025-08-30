import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Tablet } from "lucide-react";
import appleImage from "@/assets/apple-integration.jpg";

export const AppleIntegration = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Seamless Apple Integration
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience effortless connectivity across all your Apple devices. 
              One-touch pairing and automatic switching between iPhone, iPad, and Mac.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">iPhone</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Tablet className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">iPad</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Mac</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-full"
            >
              Learn More
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={appleImage} 
              alt="Apple ecosystem integration" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};