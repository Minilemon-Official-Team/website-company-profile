"use client";

import React, { useState, useEffect, useRef, Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  showPagination?: boolean;
  showArrows?: boolean;
  showProgress?: boolean;
  interval?: number;
}

const Carousel = ({
  children,
  showArrows = true,
  showPagination = true,
  showProgress = true,
  interval = 5000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const slides = Children.toArray(children);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [interval, isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
    setIsAutoPlaying(false);
  };

  return (
    <div ref={carouselRef} className="max-w-screen-640 relative mx-auto w-full">
      <div>
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            className="absolute h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {showArrows && (
        <>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 transform"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 transform"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {showPagination && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-4 w-4 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {showProgress && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
          <motion.div
            className="h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: (currentIndex / slides.length) * 100 + "%" }}
            transition={{ duration: (interval ?? 3000) / 1000, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
