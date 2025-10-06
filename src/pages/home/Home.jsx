import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ServicesOverview from "./components/ServicesOverview";
import AboutUsPreview from "./components/AboutUsPreview";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactCTA from "./components/ContactCTA";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <AboutUsPreview/>
      <TestimonialsSection/>
      <ContactCTA/>
    </div>
  );
}

export default Home;
