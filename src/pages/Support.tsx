import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Phone, Mail, MessageCircle } from "lucide-react";

export default function Support() {
  const supportLinks = [
    {
      title: "Service and Warranty",
      description: "Get help with repairs and warranty claims",
      icon: <Phone className="h-6 w-6" />
    },
    {
      title: "Find Serial Number",
      description: "Locate your Beats serial number",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Reset Your Beats",
      description: "Troubleshoot connection issues",
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      title: "Beats Updater",
      description: "Keep your Beats up to date",
      icon: <Mail className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get help with your Beats products. We're here to make sure you get the most out of your audio experience.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search support articles..." 
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportLinks.map((link, index) => (
            <Card 
              key={link.title}
              className="p-6 hover:shadow-card transition-all duration-300 cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  {link.icon}
                </div>
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Support</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Product</label>
                <Input placeholder="e.g., Powerbeats Pro 2" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Describe your issue or question..."
                  className="min-h-32"
                />
              </div>
              
              <Button className="w-full bg-beats-red hover:bg-beats-red/90" size="lg">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}