import { Search, ShoppingCart, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-primary-foreground text-center py-2 text-sm font-medium">
        Welcome to the only official site of Chitale Bandhu
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-warm px-4 py-2 rounded-lg text-white font-bold text-xl">
              Chitale
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Store Locator
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Track Order
            </a>
            <div className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium cursor-pointer">
              <Globe size={16} />
              <span>Global Orders</span>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={20} />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-primary">
                0
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;