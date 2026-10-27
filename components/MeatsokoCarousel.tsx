"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface CarouselSlide {
  src: string;
  title: string;
  caption: string;
  alt: string;
}

const slides: CarouselSlide[] = [
  {
    src: "/MS_1.jpg",
    title: "Portfolio Valuation",
    caption: "Real-time tokenized equity holding and performance tracking over time.",
    alt: "Meatsoko tokenized equity mobile app dashboard showing Hedera integration and live asset valuation",
  },
  {
    src: "/MS_2.jpg",
    title: "Fiat Ingestion (M-Pesa)",
    caption: "Seamless African mobile money on-ramp for tokenized equity investment.",
    alt: "Meatsoko mobile app investment interface with M-Pesa mobile money fiat-to-token on-ramp",
  },
  {
    src: "/MS_3.jpg",
    title: "Hedera Token Dispatch",
    caption: "Instant peer-to-peer digital asset transfer using Hedera Account IDs.",
    alt: "Meatsoko digital asset transfer screen executing instant peer-to-peer Hedera token dispatch",
  },
  {
    src: "/MS_4.jpg",
    title: "On-Chain Activity",
    caption: "Auditable transactions, transfers, and automated dividend distribution.",
    alt: "Meatsoko on-chain transaction history interface tracking transfers and automated dividend distribution",
  },
  {
    src: "/MS_5.jpg",
    title: "Encrypted QR Settlement",
    caption: "KYC-verified wallet address with encrypted QR dispatch for accredited investors.",
    alt: "Meatsoko investor identity screen featuring KYC-verified wallet and encrypted QR settlement code",
  },
  {
    src: "/MS_6.jpg",
    title: "Cap Table Governance",
    caption: "Consensus-backed asset governance and downloadable official dividend statements.",
    alt: "Meatsoko cap table governance interface for consensus-backed asset holding and official dividend statements",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 350, damping: 32 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 350, damping: 32 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export default function MeatsokoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Phone Screen Container with Floating Navigation Arrows */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md flex items-center justify-center text-slate-800 hover:text-slate-950 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Realistic Mobile Phone Silhouette Container */}
        <div className="w-full max-w-xs sm:max-w-sm mx-auto aspect-[9/16] relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt}
                fill
                priority={currentIndex === 0}
                loading={currentIndex === 0 ? undefined : "lazy"}
                sizes="(max-width: 640px) 320px, 384px"
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hidden SEO & prefetch container for remaining slides */}
        <div className="hidden" aria-hidden="true">
          {slides.slice(1).map((slide, idx) => (
            <Image
              key={idx}
              src={slide.src}
              alt={slide.alt}
              width={384}
              height={682}
              loading="lazy"
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md flex items-center justify-center text-slate-800 hover:text-slate-950 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="flex items-center space-x-2 mt-6" role="tablist" aria-label="Mockup slides">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 focus:outline-none ${
                isActive
                  ? "bg-slate-900 w-4 h-2 rounded-full"
                  : "bg-slate-300 hover:bg-slate-400 w-2 h-2 rounded-full"
              }`}
            />
          );
        })}
      </div>

      {/* Screen Title & Caption */}
      <div className="mt-4 text-center max-w-sm px-4">
        <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
          Screen 0{currentIndex + 1} of 0{slides.length}
        </p>
        <h3 className="text-sm sm:text-base font-bold text-slate-900">
          {currentSlide.title}
        </h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          {currentSlide.caption}
        </p>
      </div>
    </div>
  );
}
