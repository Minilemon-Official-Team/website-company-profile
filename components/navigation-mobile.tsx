"use client";

import {
  ArrowIcon,
  BookIcon,
  CubeIcon,
  FlagIcon,
  GateIcon,
  MinilemonYellowIcon,
} from "@/components/icons";
import useScrollY from "@/hooks/useScrollY";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const NavigationMobile = () => {
  const [numberlink, setNumberlink] = useState<number>(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollY = useScrollY();
  const NAV_LINK = [
    "#home",
    "#story",
    "#character",
    "#product",
    "#company",
    "#contact",
  ];

  const LINK_LOGO = [
    <GateIcon className="h-5 w-5 text-[#ffd201]" />,
    <BookIcon className="h-5 w-5 text-[#ffd201]" />,
    <MinilemonYellowIcon className="h-5 w-5 text-[#ffd201]" />,
    <CubeIcon className="h-5 w-5 text-[#ffd201]" />,
    <FlagIcon className="h-5 w-5 text-[#ffd201]" />,
    <ArrowIcon className="h-5 w-5 text-[#ffd201]" />,
  ];

  useEffect(() => {
    const updateCurrentLink = () => {
      if (isNavigating) return;

      NAV_LINK.forEach((link, index) => {
        const element = document.querySelector(link);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const viewportCenter = window.innerHeight / 2;

          if (
            window.scrollY >= elementTop - viewportCenter &&
            window.scrollY < elementTop + rect.height - viewportCenter &&
            index !== numberlink
          ) {
            setNumberlink(index);
          }
        }
      });
    };

    window.addEventListener("scroll", updateCurrentLink);
    return () => {
      window.removeEventListener("scroll", updateCurrentLink);
    };
  }, [numberlink, isNavigating]);

  const handleLink = (type: "prev" | "next") => {
    let newIndex = numberlink;

    if (type === "prev" && numberlink > 0) {
      newIndex = numberlink - 1;
    } else if (type === "next" && numberlink < NAV_LINK.length - 1) {
      newIndex = numberlink + 1;
    }

    setIsNavigating(true);
    setTimeout(() => {
      window.history.pushState(null, "", NAV_LINK[newIndex]);
      setNumberlink(newIndex);

      const newHash = NAV_LINK[newIndex];
      if (newHash !== "#") {
        const element = document.querySelector(newHash);
        if (element) {
          scrollToCenter(element);
        }
      }

      setTimeout(() => setIsNavigating(false), 500);
    }, 200);
  };

  const scrollToCenter = (element: any) => {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const viewportCenter = window.innerHeight / 2;
    const offset = elementTop - viewportCenter + element.offsetHeight / 2;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-50 mx-auto flex w-fit items-center justify-center lg:hidden",
        scrollY > 500 ? "bottom-3" : "bottom-0",
      )}
    >
      <div
        className={cn(
          "flex w-fit flex-row items-center justify-center gap-x-6 rounded-t-3xl px-8 py-2",
          scrollY > 500 ? "bg-transparent" : "bg-black",
        )}
      >
        <FaPlay
          onClick={() => handleLink("prev")}
          className={`h-4 w-4 scale-x-[-1] cursor-pointer text-yellow-500 ${numberlink === 0 ? "cursor-not-allowed opacity-50" : ""}`}
        />
        {/* <p className="font-semibold text-xl text-yellow-500">
          {NAV_LINK[numberlink].replace("#", "") || "Home"}
          </p> */}
        <div className="mx-5">{LINK_LOGO[numberlink]}</div>
        <FaPlay
          onClick={() => handleLink("next")}
          className={`h-4 w-4 cursor-pointer text-yellow-500 ${numberlink === NAV_LINK.length - 1 ? "cursor-not-allowed opacity-50" : ""}`}
        />
      </div>
    </div>
  );
};

export default NavigationMobile;
