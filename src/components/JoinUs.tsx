import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import communityImage from "@/assets/join-community.jpg";

export const JoinUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join the Beats Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Connect with music lovers worldwide. Get exclusive access to new releases, 
              artist collaborations, and special events. Be part of something bigger.
            </p>
            
            <div className="bg-muted/50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Stay in the loop</h3>
              <div className="flex gap-3">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 rounded-full"
                />
                <Button 
                  className="px-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow us on social</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={communityImage} 
              alt="Beats Community" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};