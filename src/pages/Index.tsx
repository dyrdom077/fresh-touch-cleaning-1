
import { Suspense, lazy } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ContactSection from "@/components/sections/ContactSection";
import CallButton from "@/components/ui/CallButton";

// Добавляем prefetch для будущих компонентов
const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <ContactSection />
      </main>
      <Footer />
      <CallButton />
    </>
  );
};

export default Index;
