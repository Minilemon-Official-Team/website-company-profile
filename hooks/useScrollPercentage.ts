import { useEffect, useState } from "react";

function useScrollPercentage() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage = (currentScrollY / scrollableHeight) * 100;
      setScrollPercent(Number(percentage.toFixed()));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPercent };
}

export default useScrollPercentage;
