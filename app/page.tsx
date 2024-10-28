"use client";

// External Libraries
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useEffect, useState } from "react";

// Local Components and Utilities
import { useScreenWidth } from "@/hooks/useScreenWidth";

// mobile screen
import AboutUsSection from "./(mobile-screen)/about-us-section";
import CharacterSection from "./(mobile-screen)/character-section";
import CompanySection from "./(mobile-screen)/company-section";
import ContactSection from "./(mobile-screen)/contact-section";
import ProductSection from "./(mobile-screen)/product-section";
import StorySection from "./(mobile-screen)/story-section";

// desktop screen
import CompanySectionDesktop from "./(desktop-screen)/company-section";
import ContactUsSection from "./(desktop-screen)/contact-us-section";
import ProductSectionDesktop from "./(desktop-screen)/product-section";
import StorySectionDesktop from "./(desktop-screen)/story-section";
import WelcomeSectionDesktop from "./(desktop-screen)/welcome-section";

export default function Home() {
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {screenWidth < 1024 ? (
        <div className="text-xs">
          <AboutUsSection />
          <StorySection />
          <CharacterSection />
          <ProductSection />
          <CompanySection />
          <ContactSection />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <WelcomeSectionDesktop />
          <StorySectionDesktop />
          <ProductSectionDesktop />
          <CompanySectionDesktop />
          <ContactUsSection />
        </div>
      )}
    </>
  );
}
