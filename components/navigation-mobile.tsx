"use client";

import useScrollPercentage from "@/hooks/useScrollPercentage";
import useUpdateCurrentLink from "@/hooks/useUpdateCurrentLink";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaPlay } from "react-icons/fa6";

const NavigationMobile = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(true);
  const [isFooterActive, setIsFooterActive] = useState(false);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const { scrollPercent } = useScrollPercentage();
  const { setCurrentLink } = useUpdateCurrentLink();

  const NAV_LINKS = useMemo(
    () => [
      "#about",
      "#story",
      "#character",
      "#product",
      "#company",
      "#contact",
    ],
    [],
  );

  const scrollToPosition = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const offset =
      element.getBoundingClientRect().top +
      window.scrollY -
      window.innerHeight * 0.1;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, []);

  const handleLinkNavigation = useCallback(
    (direction: "prev" | "next") => {
      if (isNavigating) return;

      const newIndex =
        direction === "prev"
          ? Math.max(currentLinkIndex - 1, 0)
          : Math.min(currentLinkIndex + 1, NAV_LINKS.length - 1);

      setIsNavigating(true);
      const newHash = NAV_LINKS[newIndex];

      setTimeout(() => {
        setCurrentLink(newHash);
        setCurrentLinkIndex(newIndex);
        const element = document.querySelector(newHash) as HTMLElement | null;
        scrollToPosition(element);

        setTimeout(() => setIsNavigating(false), 500);
      }, 200);
    },
    [
      currentLinkIndex,
      isNavigating,
      scrollToPosition,
      NAV_LINKS,
      setCurrentLink,
    ],
  );

  useEffect(() => {
    const currentHashIndex = NAV_LINKS.findIndex(
      (link) => link === window.location.hash,
    );
    if (currentHashIndex !== -1 && currentHashIndex !== currentLinkIndex) {
      setCurrentLinkIndex(currentHashIndex);
    }
  }, [NAV_LINKS, currentLinkIndex]);

  useEffect(() => {
    if (scrollPercent > 99) {
      setIsHeaderActive(false);
      setIsFooterActive(true);
    } else if (scrollPercent < 2) {
      setIsHeaderActive(true);
      setIsFooterActive(false);
    }
  }, [scrollPercent]);

  return (
    <div
      className={cn(
        scrollPercent >= 1 ? null : "translate-y-12",
        "fixed inset-x-0 z-50 mx-auto flex w-fit items-center justify-center transition-all duration-300 ease-out lg:hidden",
        isHeaderActive && "fade-slide-out bottom-0",
        isFooterActive && "fade-slide-in bottom-2 md:bottom-5",
      )}
    >
      <div
        className={cn(
          "flex w-fit flex-row items-center justify-center gap-x-6 rounded-t-3xl px-8 py-2.5 transition-all duration-300 ease-out",
          isHeaderActive && "bg-[#121212] fade-in",
          isFooterActive && "bg-transparent fade-out",
        )}
      >
        {scrollPercent >= 100 ? (
          <p className="md:text-md text-nowrap text-center text-xs font-bold tracking-wider text-[#ffd201] sm:text-sm">
            Terima kasih dan sampai jumpa kembali
          </p>
        ) : (
          <>
            <FaPlay
              onClick={() => handleLinkNavigation("prev")}
              aria-label="Previous section"
              className={cn(
                "h-4 w-4 scale-x-[-1] cursor-pointer text-yellow-500",
                currentLinkIndex === 0 && "cursor-not-allowed opacity-50",
              )}
            />
            <div className="font-bold capitalize tracking-wider text-[#ffd201]">
              {NAV_LINKS[currentLinkIndex].slice(1)}
            </div>
            <FaPlay
              onClick={() => handleLinkNavigation("next")}
              aria-label="Next section"
              className={cn(
                "h-4 w-4 cursor-pointer text-yellow-500",
                currentLinkIndex === NAV_LINKS.length - 1 &&
                  "cursor-not-allowed opacity-50",
              )}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationMobile;
