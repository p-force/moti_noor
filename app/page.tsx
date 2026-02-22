import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FillingsSection } from "@/components/sections/FillingsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProductsSection />
      <PricingSection />
      <FillingsSection />
      <TestimonialsSection />
      <CtaSection />
      <InstagramSection />
      <Footer />
    </main>
  );
}
