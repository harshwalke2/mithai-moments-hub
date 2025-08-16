import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularCategories from "@/components/PopularCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularCategories />
      <Footer />
    </div>
  );
};

export default Index;
