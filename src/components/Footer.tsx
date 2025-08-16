import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-xl w-fit">
              Chitale
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing you authentic Indian sweets and snacks with over decades of tradition 
              and quality. Now serving customers worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="hover:text-accent cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
              <Youtube size={20} className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Store Locator', 'Track Order'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {['Sweets', 'Namkeens', 'Energy Bars', 'Gift Boxes', 'Seasonal Specials'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  info@chitale.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Chitale Bandhu. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;