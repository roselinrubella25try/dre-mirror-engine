import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">b</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className="text-sm font-medium transition-colors hover:text-accent">
            Shop
          </Link>
          <Link to="/support" className="text-sm font-medium transition-colors hover:text-accent">
            Support
          </Link>
          <Link to="/gift-guide" className="text-sm font-medium transition-colors hover:text-accent text-beats-red">
            Gift Guide
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-4 w-4" />
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container px-4 py-4 space-y-4">
            <Link 
              to="/shop" 
              className="block text-sm font-medium transition-colors hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/support" 
              className="block text-sm font-medium transition-colors hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <Link 
              to="/gift-guide" 
              className="block text-sm font-medium transition-colors hover:text-accent text-beats-red"
              onClick={() => setIsMenuOpen(false)}
            >
              Gift Guide
            </Link>
            <div className="pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};