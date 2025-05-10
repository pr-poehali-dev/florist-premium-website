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
        <div className="py-12"></div> {/* Дополнительное пространство */}
        <BestSellers />
        <div className="py-12"></div> {/* Дополнительное пространство */}
        <AboutSection />
        <div className="py-12"></div> {/* Дополнительное пространство */}
        <CustomOrderBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
