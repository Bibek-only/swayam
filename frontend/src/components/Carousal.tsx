"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: React.ReactNode[];
  itemsPerView?: number;
}

export default function Carousel({ items, itemsPerView = 3 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsiveItemsPerView, setResponsiveItemsPerView] =
    useState(itemsPerView);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setResponsiveItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setResponsiveItemsPerView(2);
      } else {
        setResponsiveItemsPerView(itemsPerView);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, items.length - responsiveItemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={carouselRef}
      >
        <div
          className="flex gap-4 md:gap-6 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / responsiveItemsPerView)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-auto"
              style={{
                width:
                  responsiveItemsPerView === 1
                    ? "100%"
                    : `calc(${100 / responsiveItemsPerView}% - ${((responsiveItemsPerView - 1) * (responsiveItemsPerView === 2 ? 12 : 18)) / responsiveItemsPerView}px)`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Hidden on Mobile */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition z-10 shadow-lg items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition z-10 shadow-lg items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? "bg-primary" : "bg-border"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
