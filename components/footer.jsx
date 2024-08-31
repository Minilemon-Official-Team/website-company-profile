import Image from "next/image";
import React from "react";
import LogoBrand from "../public/logo.png";
import DividerBlack from "./ui/divider-black";

const Footer = () => {
  const currrentYear = new Date().getFullYear();
  return (
    <>
      <DividerBlack className="bg-[#1b1b1b]" />
      <div className="flex flex-col justify-center bg-[#272727] items-center py-4">
        <Image src={LogoBrand} alt="logo" width={100} height={100} />
        <p className="text-xs text-[#868686]">Copyright 2020 - {currrentYear} | Minilemon | All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
