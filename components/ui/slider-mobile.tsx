import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
  value: number;
  name: string;
}

const SliderMobile = ({ name, value: valueItem }: SliderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      return;
    }

    const duration = 1500;
    const step = 10;
    const increment = valueItem / (duration / step);
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
        <p
          className="flex h-[20px] w-full items-center justify-start bg-gradient-to-b from-[#fff000] to-[#ffa800] px-5 font-bold uppercase italic tracking-wider text-gray-800"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)" }}
        >
          {name}
        </p>
        <motion.p
          className="text-md -ml-5 flex h-[30px] w-[50px] items-center justify-center bg-[#fdd05b] font-bold italic text-gray-800"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}
        >
          {value}%
        </motion.p>
      </div>
    </div>
  );
};

export default SliderMobile;
