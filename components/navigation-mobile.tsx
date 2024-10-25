"use client";

import useScrollY from "@/hooks/useScrollY";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const NavigationMobile = () => {
  const [numberlink, setNumberlink] = useState<number>(0);
  const scrollY = useScrollY();
  const NAV_LINK = [
    "#home",
    "#story",
    "#character",
    "#product",
    "#company",
    "#contact",
  ];

  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash && hash !== "#") {
        const element = document.querySelector(hash);
        if (element) {
          scrollToCenter(element);
        }
      }
    };

    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  useEffect(() => {
    const currentHash = window.location.hash;
    const currentIndex = NAV_LINK.findIndex((link) => link === currentHash);
    if (currentIndex !== -1) {
      setNumberlink(currentIndex);
    }
  }, [pathname]);

  // Fungsi untuk scroll ke tengah viewport
  const scrollToCenter = (element: any) => {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const viewportCenter = window.innerHeight / 2;
    const offset = elementTop - viewportCenter + element.offsetHeight / 2;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  const handleLink = (type: "prev" | "next") => {
    let newIndex = numberlink;

    if (type === "prev" && numberlink > 0) {
      newIndex = numberlink - 1;
    } else if (type === "next" && numberlink < NAV_LINK.length - 1) {
      newIndex = numberlink + 1;
    }

    window.history.pushState(null, "", NAV_LINK[newIndex]);
    setNumberlink(newIndex);

    const newHash = NAV_LINK[newIndex];
    if (newHash !== "#") {
      const element = document.querySelector(newHash);
      if (element) {
        scrollToCenter(element);
      }
    }
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
        <p className="text-xl font-semibold text-yellow-500">
          {NAV_LINK[numberlink].replace("#", "") || "Home"}
        </p>
        <FaPlay
          onClick={() => handleLink("next")}
          className={`h-4 w-4 cursor-pointer text-yellow-500 ${numberlink === NAV_LINK.length - 1 ? "cursor-not-allowed opacity-50" : ""}`}
        />
      </div>
    </div>
  );
};

export default NavigationMobile;
