import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import sweetsImage from "@/assets/sweets-category.jpg";
import namkeensImage from "@/assets/namkeens-category.jpg";
import barsImage from "@/assets/bars-category.jpg";

const categories = [
  {
    id: 1,
    name: "Sweets",
    productCount: 48,
    image: sweetsImage,
    description: "Traditional Indian mithai and desserts"
  },
  {
    id: 2,
    name: "Namkeens",
    productCount: 35,
    image: namkeensImage,
    description: "Savory snacks and traditional favorites"
  },
  {
    id: 3,
    name: "Energy Bars",
    productCount: 12,
    image: barsImage,
    description: "Healthy snack bars with traditional flavors"
  }
];

const PopularCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our authentic collection of traditional Indian sweets and snacks, 
            crafted with love and time-honored recipes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group bg-gradient-card border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {category.productCount} Products
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn text-primary hover:text-primary font-semibold p-0 h-auto"
                  >
                    Shop Now
                    <ArrowRight 
                      size={16} 
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" 
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;