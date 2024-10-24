"use client";

import React, { useState, useEffect, useRef, Children } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  showPagination?: boolean;
  showArrows?: boolean;
  showProgress?: boolean;
  interval?: number;
}

export default function CustomCarousel({
  children,
  showPagination = true,
  showArrows = true,
  showProgress = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: false, amount: 0.5 });
  const slides = Children.toArray(children);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying && isInView) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, interval, slides.length, isInView]);

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
    <div ref={carouselRef} className="relative mx-auto w-full max-w-3xl">
      <div className="aspect-video overflow-hidden rounded-lg">
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
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {showPagination && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {showProgress && (
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-300">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
}
