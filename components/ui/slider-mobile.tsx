import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
  value: number;
  name: string;
}

const SliderMobile = ({ name, value: valueItem }: SliderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [value, setValue] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      controls.set({ width: "0%" });
      return;
    }

    const baseDuration = 2; // maksimal durasi perubahan width
    const duration = baseDuration * (valueItem / 100);
    controls.start({
      width: "100%",
      transition: { duration, ease: "easeOut" },
    });

    const step = 10;
    const increment = valueItem / ((duration * 1000) / step);
    let start = 0;

    const interval = setInterval(() => {
      start = Math.min(start + increment, valueItem);
      setValue(Math.round(start));
      if (start >= valueItem) clearInterval(interval);
    }, step);

    return () => clearInterval(interval);
  }, [isInView, valueItem]);

  return (
    <div className="w-full" ref={ref}>
      <div className="flex w-full max-w-full flex-row items-center justify-start overflow-hidden">
        <motion.p
          className="slider-label flex h-[20px] md:h-[30px] items-center justify-start bg-gradient-to-b from-[#fff000] to-[#ffa800] px-5 text-xs md:text-lg font-bold uppercase italic tracking-wider text-gray-800"
          animate={controls}
        >
          {name}
        </motion.p>

        <motion.p
          className="-ml-5 flex h-[25px] md:h-[40px] w-[55px] md:w-[70px] items-center justify-center bg-[#fdd05b] text-xs md:text-lg font-bold italic text-gray-800"
          style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)" }}
        >
          {value}%
        </motion.p>
      </div>
    </div>
  );
};

export default SliderMobile;
