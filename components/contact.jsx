"use client";

import React from "react";
import { Button } from "./ui/button";

const Contact = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
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
  );
};

export default Contact;
