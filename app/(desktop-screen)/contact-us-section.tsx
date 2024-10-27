"use client";

import Contact from "@/components/contact";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function ContactUsSection() {
  return (
    <div className="hidden w-full flex-row bg-[#1b1b1b] lg:flex">
      <div className="container my-14 flex flex-col gap-12 px-10 md:px-0 lg:flex-row">
        <Contact />
      </div>
    </div>
  );
}

export default ContactUsSection;
