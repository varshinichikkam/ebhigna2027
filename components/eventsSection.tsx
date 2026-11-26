'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useAnimationFrame, useReducedMotion } from 'motion/react';
import { events } from '@/lib/eventsStore';

const CURVE_PILLARS = [
  'Technology',
  'Fun',
  'Experiments',
  'Innovations',
  'Technology',
  'Fun',
  'Experiments',
  'Innovations',
];

const CURVE_HEIGHT = 110;
const P0_Y = 42;
const P1_Y = 104;
const P2_Y = 12;
const P3_Y = 52;

function evaluateCurveY(u: number): number {
  const t = Math.max(0, Math.min(1, u));
  const omt = 1 - t;
  return (
    omt * omt * omt * P0_Y +
    3 * omt * omt * t * P1_Y +
    3 * omt * t * t * P2_Y +
    t * t * t * P3_Y
  );
}

function evaluateCurveSlope(u: number): number {
  const t = Math.max(0, Math.min(1, u));
  const omt = 1 - t;
  const dyDt =
    3 * omt * omt * (P1_Y - P0_Y) +
    6 * omt * t * (P2_Y - P1_Y) +
    3 * t * t * (P3_Y - P2_Y);
  return dyDt;
}

export default function EventsSection() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [activeEventId, setActiveEventId] = useState<number>(events[0].id);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const curveContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef<number>(0);

  const activeEvent = events.find((e) => e.id === activeEventId) ?? events[0];

  const markImageFailed = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Position items evenly on reduced motion or initial mount
  useEffect(() => {
    const container = curveContainerRef.current;
    if (!container) return;
    const width = container.offsetWidth || 1200;
    const spacing = Math.max(210, width / 4.5);
    const totalSpan = spacing * CURVE_PILLARS.length;

    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const xPx = ((idx * spacing) % totalSpan) - 160;
      const u = xPx / width;
      const yPx = evaluateCurveY(u) - 34;
      const slope = evaluateCurveSlope(u);
      const angleDeg = Math.atan2(slope, width) * (180 / Math.PI);
      el.style.transform = `translate3d(${xPx}px, ${yPx}px, 0) rotate(${angleDeg.toFixed(2)}deg)`;
    });
  }, []);

  // Move pillars continuously from left to right along the exact curved path
  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) return;
    const container = curveContainerRef.current;
    if (!container) return;

    const width = container.offsetWidth || 1200;
    const spacing = Math.max(210, width / 4.5);
    const totalSpan = spacing * CURVE_PILLARS.length;

    offsetRef.current = (offsetRef.current + (delta / 1000) * 65) % totalSpan;

    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rawX = (idx * spacing + offsetRef.current) % totalSpan;
      const xPx = rawX - 180;
      const u = xPx / width;
      const yPx = evaluateCurveY(u) - 34;
      const slope = evaluateCurveSlope(u);
      const angleDeg = Math.atan2(slope, width) * (180 / Math.PI);
      el.style.transform = `translate3d(${xPx.toFixed(1)}px, ${yPx.toFixed(1)}px, 0) rotate(${angleDeg.toFixed(2)}deg)`;
    });
  });

  return (
    <section id="events" className="w-full bg-warm-ivory">
      {/* Curved wave transition with items gliding left-to-right along the curve */}
      <div
        ref={curveContainerRef}
        className="relative w-full overflow-hidden bg-creamy-white pt-6 sm:pt-8"
        aria-label="Event Pillars"
      >
        <div className="relative h-[110px] w-full">
          {/* Moving Items riding right along the curve */}
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            {CURVE_PILLARS.map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className="absolute top-0 left-0 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-deep-emerald-green whitespace-nowrap will-change-transform"
              >
                <Sparkles
                  className="h-4 w-4 text-royal-gold fill-royal-gold shrink-0"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Exact S-curve SVG matching the mathematical cubic Bezier */}
          <svg
            viewBox={`0 0 1440 ${CURVE_HEIGHT}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block h-full w-full"
            aria-hidden="true"
          >
            <path
              d={`M0,${P0_Y} C480,${P1_Y} 960,${P2_Y} 1440,${P3_Y} L1440,${CURVE_HEIGHT} L0,${CURVE_HEIGHT} Z`}
              className="fill-warm-ivory"
            />
            <path
              d={`M0,${P0_Y} C480,${P1_Y} 960,${P2_Y} 1440,${P3_Y}`}
              className="stroke-champagne-gold"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Main Events Content on Warm Ivory */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-14 sm:pb-20">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold tracking-tight text-deep-emerald-green">
            Events
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-forest-green/90">
            Explore our four signature competitions crafted to challenge your logic,
            debugging speed, AI prompt creativity, and machine intelligence builds.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 items-start gap-10 lg:gap-14">
          {/* Left Side: Numbered Event List */}
          <div className="lg:col-span-6 border-b border-champagne-gold/70">
            {events.map((event, idx) => {
              const isActive = event.id === activeEvent.id;
              const numLabel = String(idx + 1).padStart(2, '0');
              const hasFailed = failedImages[event.id];

              return (
                <div
                  key={event.id}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setActiveEventId(event.id)}
                  onFocus={() => setActiveEventId(event.id)}
                  onClick={() => router.push(`/openevent?id=${event.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      router.push(`/openevent?id=${event.id}`);
                    }
                  }}
                  className={`group border-t border-champagne-gold/70 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green ${
                    isActive ? 'py-6 sm:py-8' : 'py-5 sm:py-6'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span
                      className={`mt-1.5 text-sm sm:text-base font-medium tabular-nums transition-colors duration-200 shrink-0 ${
                        isActive ? 'text-bronze font-semibold' : 'text-sage-green'
                      }`}
                    >
                      {numLabel}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3
                          className={`font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-200 ${
                            isActive
                              ? 'text-bronze'
                              : 'text-deep-emerald-green group-hover:text-bronze'
                          }`}
                        >
                          {event.event_title}
                        </h3>

                        <a
                          href={event.registration_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-royal-gold px-4 py-2 text-xs sm:text-sm font-semibold text-deep-emerald-green hover:bg-champagne-gold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
                        >
                          <span>Register Now</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>

                      <p className="mt-1.5 text-sm sm:text-base font-medium text-forest-green/90">
                        {event.sub_heading}
                      </p>

                      {/* Mobile Poster directly below event details (no description on mobile) */}
                      <div className="mt-4 lg:hidden">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-champagne-gold bg-deep-emerald-green shadow-sm">
                          {!hasFailed && event.cover_image ? (
                            <Image
                              src={event.cover_image}
                              alt={event.event_title}
                              fill
                              sizes="(max-width: 1024px) 92vw, 480px"
                              className="object-cover"
                              referrerPolicy="no-referrer"
                              onError={() => markImageFailed(event.id)}
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                              <Sparkles className="h-7 w-7 text-royal-gold" />
                              <span className="text-xs font-semibold text-light-gold">
                                {event.event_title}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Desktop hover expand cue */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={
                              shouldReduceMotion
                                ? { opacity: 1 }
                                : { opacity: 0, height: 0 }
                            }
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={
                              shouldReduceMotion
                                ? { opacity: 0 }
                                : { opacity: 0, height: 0 }
                            }
                            transition={
                              shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                            }
                            className="hidden lg:block overflow-hidden"
                          >
                            <p className="pt-3 text-sm font-medium text-bronze">
                              Tap to open full guidelines &amp; coordinators
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side (Desktop): Active Event Image + Description below it */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: -10 }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }
                className="w-full"
              >
                {/* Framed Image with subtle offset accent border */}
                <div className="relative pr-4 pb-4">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-4 left-4 right-0 bottom-0 border border-bronze/50"
                  />
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-deep-emerald-green border border-champagne-gold shadow-md">
                    {!failedImages[activeEvent.id] && activeEvent.cover_image ? (
                      <Image
                        src={activeEvent.cover_image}
                        alt={activeEvent.event_title}
                        fill
                        sizes="50vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                        onError={() => markImageFailed(activeEvent.id)}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                        <Sparkles className="h-9 w-9 text-royal-gold" />
                        <span className="text-sm font-semibold text-light-gold">
                          {activeEvent.event_title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description below the image on desktop */}
                <div className="mt-6">
                  <h4 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-deep-emerald-green">
                    {activeEvent.event_title}
                  </h4>
                  <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-forest-green/90">
                    {activeEvent.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
