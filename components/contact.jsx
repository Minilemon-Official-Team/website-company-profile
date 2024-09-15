"use client";

import React from "react";

import { Button } from "./ui/button";
import ContactUsTitle from "@/public/title-picture/contact-us-1.png";
import Image from "next/image";

const Contact = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="flex basis-1/2 flex-col items-center justify-center gap-6">
        <div className="">
          <Image src={ContactUsTitle} alt="Contact Us" />
        </div>
        <p className="text-2xl text-[#d2def4]">How can we help you?</p>
      </div>
      <div className="flex basis-1/2 flex-col">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md border border-white/70 bg-transparent p-2 text-[#d2def4]"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-md border border-white/70 bg-transparent p-2 text-[#d2def4]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="rounded-md border border-white/70 bg-transparent p-2 text-[#d2def4]"
          />
          <input
            type="text"
            placeholder="Message"
            className="rounded-md border border-white/70 bg-transparent p-2 pb-24 text-[#d2def4]"
          />
          <Button.Primary className="mt-6 w-fit scale-125 font-bold uppercase shadow-md">
            Submit
          </Button.Primary>
        </div>
      </div>
    </>
  );
};

export default Contact;
