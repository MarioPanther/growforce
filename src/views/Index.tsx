"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import StatsCounter from "@/components/home/StatsCounter";
import BenefitsForJobSeekers from "@/components/home/BenefitsForJobSeekers";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ClientLogos from "@/components/home/ClientLogos";
import LatestNews from "@/components/home/LatestNews";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesHighlight />
        <WhyChooseUsSection />
        <StatsCounter />
        <BenefitsForJobSeekers />
        <TestimonialsSection />
        <ClientLogos />
        <LatestNews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
