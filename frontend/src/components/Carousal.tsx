'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  itemsPerView?: number;
}

export default function Carousel({ items, itemsPerView = 3 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };
  // @ts-ignore
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(items.length / itemsPerView) * 100}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute -left-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        className="absolute -right-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
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
              index === currentIndex ? 'bg-primary' : 'bg-border'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
