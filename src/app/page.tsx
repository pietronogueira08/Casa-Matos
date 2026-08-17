"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Differentials from "@/components/sections/Differentials";
import InteractivePortfolio from "@/components/sections/InteractivePortfolio";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import ServicesBento from "@/components/sections/ServicesBento";
import MethodTimeline from "@/components/sections/MethodTimeline";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import LocationMap from "@/components/sections/LocationMap";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import QuickBudgetModal from "@/components/floating/QuickBudgetModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <Hero />
      <Differentials />
      <InteractivePortfolio />
      <BeforeAfterSlider />
      <ServicesBento />
      <MethodTimeline />
      <Testimonials />
      <FAQSection />
      <LocationMap />
      <Footer />
      <WhatsAppButton />
      <QuickBudgetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
