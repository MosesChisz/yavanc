import React from "react";
import CompanyStory from "./components/CompanyStory";
import TeamSection from "./components/TeamSection";
import ValuesMission from "./components/ValuesMission";
import LocationHighlight from "./components/LocationHighlight";
import ImageGallery from "./components/ImageGallery";

function About() {
  return (
    <div>
      <CompanyStory />
      <TeamSection />
      <ValuesMission/>
      <LocationHighlight/>
      <ImageGallery/>
    </div>
  );
}

export default About;
