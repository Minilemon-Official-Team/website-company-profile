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
import { useCallback, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const NavigationMobile = () => {
  const [currentLinkIndex, setCurrentLinkIndex] = useState<number>(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollY = useScrollY();

  const NAV_LINKS = [
    "#home",
    "#story",
    "#character",
    "#product",
    "#company",
    "#contact",
  ];

  const LINK_ICONS = [
    <GateIcon className="h-5 w-5 text-[#ffd201]" />,
    <BookIcon className="h-5 w-5 text-[#ffd201]" />,
    <MinilemonYellowIcon className="h-5 w-5 text-[#ffd201]" />,
    <CubeIcon className="h-5 w-5 text-[#ffd201]" />,
    <FlagIcon className="h-5 w-5 text-[#ffd201]" />,
    <ArrowIcon className="h-5 w-5 text-[#ffd201]" />,
  ];

  // Function to scroll element to the center of the viewport
  const scrollToCenter = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const viewportCenter = window.innerHeight / 2;
    const offset = elementTop - viewportCenter + element.offsetHeight / 2;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }, []);

  // Update the current link index based on scroll position
  // Update the current link index based on scroll position
  const updateCurrentLink = useCallback(() => {
    if (isNavigating) return;

    NAV_LINKS.forEach((link, index) => {
      const element = document.querySelector(link) as HTMLElement | null;
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const viewportCenter = window.innerHeight / 2;

        if (
          window.scrollY >= elementTop - viewportCenter &&
          window.scrollY < elementTop + rect.height - viewportCenter &&
          index !== currentLinkIndex
        ) {
          setCurrentLinkIndex(index);

          // Update the URL hash without scrolling the page
          window.history.replaceState(null, "", NAV_LINKS[index]);
        }
      }
    });
  }, [currentLinkIndex, isNavigating]);

  useEffect(() => {
    window.addEventListener("scroll", updateCurrentLink);
    return () => {
      window.removeEventListener("scroll", updateCurrentLink);
    };
  }, [updateCurrentLink]);

  // Handle navigation between links
  const handleLinkNavigation = useCallback(
    (direction: "prev" | "next") => {
      if (isNavigating) return;

      let newIndex = currentLinkIndex;

      if (direction === "prev" && currentLinkIndex > 0) {
        newIndex -= 1;
      } else if (
        direction === "next" &&
        currentLinkIndex < NAV_LINKS.length - 1
      ) {
        newIndex += 1;
      }

      setIsNavigating(true);
      setTimeout(() => {
        const newHash = NAV_LINKS[newIndex];
        setCurrentLinkIndex(newIndex);
        window.history.pushState(null, "", newHash);

        const element = document.querySelector(newHash) as HTMLElement | null;
        scrollToCenter(element);

        setTimeout(() => setIsNavigating(false), 500);
      }, 200);
    },
    [currentLinkIndex, isNavigating, scrollToCenter],
  );

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
          onClick={() => handleLinkNavigation("prev")}
          aria-label="Previous section"
          className={cn(
            "h-4 w-4 scale-x-[-1] cursor-pointer text-yellow-500",
            currentLinkIndex === 0 && "cursor-not-allowed opacity-50",
          )}
        />
        <div className="mx-5">{LINK_ICONS[currentLinkIndex]}</div>
        <FaPlay
          onClick={() => handleLinkNavigation("next")}
          aria-label="Next section"
          className={cn(
            "h-4 w-4 cursor-pointer text-yellow-500",
            currentLinkIndex === NAV_LINKS.length - 1 &&
              "cursor-not-allowed opacity-50",
          )}
        />
      </div>
    </div>
  );
};

export default NavigationMobile;
