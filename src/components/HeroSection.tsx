import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sweets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[600px]">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              NOW ACCEPTING
              <span className="block text-primary">
                Global Orders
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Experience authentic Indian sweets & snacks delivered worldwide
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-warm hover:opacity-90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-brand transition-all duration-300 hover:scale-105"
            >
              ORDER NOW
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2">
          <img 
            src={heroImage}
            alt="Delicious Indian Sweets"
            className="w-96 h-96 object-cover rounded-3xl shadow-brand rotate-6 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-background">
          <path d="M1200 120L0 120 598.97 0C608.96 2.94 619.04 2.94 629.03 0L1200 120Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;