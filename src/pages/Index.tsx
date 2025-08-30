import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ImageBanner } from "@/components/ImageBanner";
import { AppleIntegration } from "@/components/AppleIntegration";
import { FAQ } from "@/components/FAQ";
import { VideoSection } from "@/components/VideoSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { JoinUs } from "@/components/JoinUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <ImageBanner />
      <AppleIntegration />
      <FAQ />
      <VideoSection />
      <ProductCarousel />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
