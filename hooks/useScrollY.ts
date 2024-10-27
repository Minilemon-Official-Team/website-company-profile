import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const useScrollY = () => {
  const scrollY = useMotionValue(0);
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      scrollY.set(window.scrollY);
      setScrollYValue(scrollY.get());
    };

    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, [scrollY]);

  return scrollYValue;
};

export default useScrollY;
