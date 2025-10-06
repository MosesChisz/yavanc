import React, { useState } from "react";
import ServicesHero from "./components/ServicesHero";
import ServiceCardsGrid from "./components/ServiceCardsGrid";
import CustomOrdersSection from "./components/CustomOrdersSection";
import DeliveryInformation from "./components/DeliveryInformation";
import FAQSection from "./components/FAQSection";

function Services() {
  const [activeTab, setActiveTab] = useState("electrical");
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <ServicesHero />
      <ServiceCardsGrid />
      <CustomOrdersSection/>
      <DeliveryInformation/>
      <FAQSection/>
    </div>
  );
}

export default Services;
