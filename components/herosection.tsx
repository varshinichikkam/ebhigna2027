'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const ROTATING_EXPERIENCES = ['Technology', 'Fun', 'Experiments', 'Innovations'];

const HERO_SLIDES = [
  {
    src: '/ebhigna2027_hero1.jpeg',
    alt: 'Strides 2K27 Ebhigna Department of CSE AI Event Banner',
  },
  {
    src: '/ebhigna2027_hero2.jpeg',
    alt: 'Ebhigna 2027 Events and Coordinators Banner',
  },
];

const WORD_INTERVAL_MS = 2400;
const SLIDE_INTERVAL_MS = 4500;

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_EXPERIENCES.length);
    }, WORD_INTERVAL_MS);

    return () => clearInterval(wordTimer);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const slideTimer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(slideTimer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="home"
      className="w-full bg-creamy-white border-b border-champagne-gold/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Left Side Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <p className="text-sm sm:text-base font-semibold tracking-wide text-bronze">
              Strides Since 2022
            </p>

            <h1 className="mt-2.5 text-3xl sm:text-4xl xl:text-[2.75rem] font-bold leading-tight tracking-tight text-deep-emerald-green text-balance">
              Ebhigna 2027 -{' '}
              <span className="text-forest-green">
                The Department of Artificial Intelligence
              </span>
            </h1>

            <div className="mt-4 flex flex-wrap items-baseline gap-x-2 text-lg sm:text-2xl font-semibold text-deep-emerald-green">
              <span>Experience the</span>
              <span className="relative inline-flex min-w-[140px] sm:min-w-[170px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_EXPERIENCES[wordIndex]}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                    }
                    className="inline-block font-bold text-bronze underline decoration-royal-gold decoration-2 underline-offset-4"
                  >
                    {ROTATING_EXPERIENCES[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>

            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-forest-green/90">
              Join Pragati University&apos;s flagship online technical symposium hosted by
              the Department of CSE (Artificial Intelligence). Compete across coding,
              prompt engineering, debugging, and AI showcases with peers nationwide.
            </p>

            {/* CTA Buttons (No actions for now) */}
            <div className="mt-6 flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-royal-gold px-7 py-3 text-sm sm:text-base font-semibold text-deep-emerald-green hover:bg-champagne-gold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
              >
                Register Now
              </button>
              <button
                type="button"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-deep-emerald-green bg-champagne-white px-7 py-3 text-sm sm:text-base font-semibold text-deep-emerald-green hover:bg-warm-ivory transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
              >
                Contact Us
              </button>
            </div>

            {/* Event Date with Blinking Arrow Transition */}
            <div className="mt-6 inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-deep-emerald-green">
              <span>Get ready 8-9th of January 2027</span>
              <motion.span
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: [1, 0.2, 1], x: [0, 4, 0] }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
                }
                className="inline-flex items-center text-bronze"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </div>
          </div>

          {/* Right Side Animated Showcase */}
          <div className="lg:col-span-7 w-full">
            <div
              className="relative w-full overflow-hidden rounded-2xl border-2 border-champagne-gold bg-deep-emerald-green shadow-xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              aria-roledescription="carousel"
              aria-label="Ebhigna 2027 Event Highlights"
            >
              <div className="relative w-full aspect-[1280/682] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={HERO_SLIDES[slideIndex].src}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 1.03, x: 18 }
                    }
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 0.98, x: -18 }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                    }
                    className="relative h-full w-full"
                  >
                    <Image
                      src={HERO_SLIDES[slideIndex].src}
                      alt={HERO_SLIDES[slideIndex].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain"
                      referrerPolicy="no-referrer"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrevSlide}
                aria-label="Previous image"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-champagne-gold/60 bg-deep-emerald-green/80 backdrop-blur-sm text-light-gold hover:bg-forest-green hover:text-royal-gold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNextSlide}
                aria-label="Next image"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-champagne-gold/60 bg-deep-emerald-green/80 backdrop-blur-sm text-light-gold hover:bg-forest-green hover:text-royal-gold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div
              className="mt-4 flex items-center justify-center lg:justify-end gap-2"
              role="tablist"
              aria-label="Select featured image"
            >
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === slideIndex;
                return (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show image ${idx + 1}`}
                    onClick={() => setSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold ${
                      isActive
                        ? 'w-8 bg-deep-emerald-green'
                        : 'w-2.5 bg-bronze/40 hover:bg-bronze/75'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
