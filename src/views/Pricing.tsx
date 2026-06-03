"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import CTABanner from "@/components/pricing/CTABanner";
import CookieBanner from "@/components/pricing/CookieBanner";
import ScrollToTop from "@/components/pricing/ScrollToTop";

const Pricing = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PricingHero />
      <PricingCards />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      {showCookieBanner && <CookieBanner onClose={() => setShowCookieBanner(false)} />}
      <ScrollToTop />
    </div>
  );
};

export default Pricing;
