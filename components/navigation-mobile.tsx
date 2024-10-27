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
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const NavigationMobile = () => {
  const [currentLinkIndex, setCurrentLinkIndex] = useState<number>(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollY = useScrollY();

  const NAV_LINKS = useMemo(
    () => ["#home", "#story", "#character", "#product", "#company", "#contact"],
    [],
  );

  const LINK_ICONS = [
    <GateIcon key="gate" className="h-5 w-5 text-[#ffd201]" />,
    <BookIcon key="book" className="h-5 w-5 text-[#ffd201]" />,
    <MinilemonYellowIcon key="minilemon" className="h-5 w-5 text-[#ffd201]" />,
    <CubeIcon key="cube" className="h-5 w-5 text-[#ffd201]" />,
    <FlagIcon key="flag" className="h-5 w-5 text-[#ffd201]" />,
    <ArrowIcon key="arrow" className="h-5 w-5 text-[#ffd201]" />,
  ];

  const scrollToCenter = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const viewportCenter = window.innerHeight / 3;
    const offset = elementTop - viewportCenter + element.offsetHeight / 2;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }, []);

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
          window.history.replaceState(null, "", NAV_LINKS[index]);
        }
      }
    });
  }, [currentLinkIndex, isNavigating, NAV_LINKS]);

  useEffect(() => {
    window.addEventListener("scroll", updateCurrentLink);
    return () => {
      window.removeEventListener("scroll", updateCurrentLink);
    };
  }, [updateCurrentLink]);

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
    [currentLinkIndex, isNavigating, scrollToCenter, NAV_LINKS],
  );

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-50 mx-auto flex w-fit items-center justify-center transition-all duration-300 ease-out lg:hidden",
        scrollY > 50
          ? "fade-slide-in bottom-3 md:bottom-5"
          : "fade-slide-out bottom-0",
      )}
    >
      <div
        className={cn(
          "flex w-fit flex-row items-center justify-center gap-x-6 rounded-t-3xl px-8 py-2.5 transition-all duration-300 ease-out",
          scrollY > 50 ? "bg-transparent fade-out" : "bg-black fade-in",
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
