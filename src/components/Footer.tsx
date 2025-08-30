import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">b</span>
              </div>
              <span className="text-xl font-bold">Beats</span>
            </div>
            <p className="text-primary-foreground/80 max-w-sm">
              Premium audio experiences that move you. Engineered for those who won't settle for anything less than extraordinary.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <div className="space-y-2">
              <Link to="/headphones" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Headphones
              </Link>
              <Link to="/earbuds" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Earbuds
              </Link>
              <Link to="/speakers" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Speakers
              </Link>
              <Link to="/accessories" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Accessories
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/support" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Product Support
              </Link>
              <Link to="/warranty" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Warranty
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Contact Us
              </Link>
              <Link to="/register" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Register Product
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                About Beats
              </Link>
              <Link to="/careers" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Careers
              </Link>
              <Link to="/press" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Press
              </Link>
              <Link to="/sustainability" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Sustainability
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Beats Electronics LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};