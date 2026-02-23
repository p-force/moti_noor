import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FillingsSection } from "@/components/sections/FillingsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Footer } from "@/components/sections/Footer";
import { CreamDivider } from "@/components/ui/CreamDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      {/* Hero→Products and Products→Pricing dividers are inside ProductSlider */}
      <ProductsSection />
      {/* Products→Pricing divider is inside ProductSlider (bottomDividerColor) */}
      <PricingSection />
      <CreamDivider topColor="#F5E6D3" bottomColor="#FFFFFF" variant={3} />
      <FillingsSection />
      <CreamDivider topColor="#FFFFFF" bottomColor="#FFF9F0" variant={4} />
      <TestimonialsSection />
      <CreamDivider topColor="#FFD6E0" bottomColor="#FFFFFF" variant={5} />
      <CtaSection />
      <CreamDivider topColor="#FFFFFF" bottomColor="#FFF9F0" variant={3} />
      <InstagramSection />
      <CreamDivider topColor="#FFF9F0" bottomColor="#F5E6D3" variant={1} />
      <Footer />
    </main>
  );
}
