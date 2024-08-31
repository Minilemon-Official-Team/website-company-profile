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
      <input type="text" placeholder="Name" className="bg-transparent border border-white/70 rounded-md p-2 text-[#d2def4]" />
      <input type="email" placeholder="Email" className="bg-transparent border border-white/70 rounded-md  text-[#d2def4] p-2" />
      <input type="text" placeholder="Subject" className="bg-transparent border border-white/70 rounded-md  text-[#d2def4] p-2" />
      <input type="text" placeholder="Message" className="bg-transparent border border-white/70 rounded-md  text-[#d2def4] p-2 pb-24" />
      <Button.Primary className="uppercase w-fit font-bold shadow-md mt-6 scale-125">Submit</Button.Primary>
    </div>
  );
};

export default Contact;
