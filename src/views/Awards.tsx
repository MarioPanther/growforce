"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AwardsHero from "@/components/awards/AwardsHero";
import AwardsGrid from "@/components/awards/AwardsGrid";
import FeaturedAward from "@/components/awards/FeaturedAward";
import BrandLogos from "@/components/awards/BrandLogos";
import StatsSection from "@/components/awards/StatsSection";
import CTABanner from "@/components/pricing/CTABanner";

const Awards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AwardsHero />
      <FeaturedAward />
      <AwardsGrid />
      <StatsSection />
      <BrandLogos />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Awards;
