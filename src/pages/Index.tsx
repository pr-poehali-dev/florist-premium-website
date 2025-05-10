
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import BestSellers from "@/components/BestSellers";
import AboutSection from "@/components/AboutSection";
import CustomOrderBanner from "@/components/CustomOrderBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <div className="py-16 bg-gradient-to-b from-cream/10 to-cream"></div>
        <BestSellers />
        <div className="py-16 bg-gradient-to-b from-cream to-background"></div>
        <AboutSection />
        <div className="py-16"></div>
        <CustomOrderBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
