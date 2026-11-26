'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const ROW_ONE_IMAGES = [
  {
    src: '/ebhigna2027_hero1.jpeg',
    alt: 'Strides 2K27 Ebhigna Symposium Banner',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    alt: 'Students gathered at tech symposium auditorium',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80',
    alt: 'Collaborative workshop session with students',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    alt: 'Team brainstorming solutions during coding event',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    alt: 'Hackathon and debugging desks in action',
  },
];

const ROW_TWO_IMAGES = [
  {
    src: '/ebhigna2027_hero2.jpeg',
    alt: 'Ebhigna Department of CSE AI Event Highlights',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    alt: 'Student innovators collaborating on project demo',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Audience engaged in keynote presentation',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80',
    alt: 'Celebrating winning teams and achievements',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    alt: 'Coordinators reviewing presentation boards',
  },
];

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markFailed = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section
      id="gallery"
      className="w-full overflow-hidden bg-warm-ivory border-t border-champagne-gold/50 py-14 sm:py-20"
    >
      {/* Header & Nostalgic Description */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold tracking-tight text-deep-emerald-green">
            Memories &amp; Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-forest-green/90">
            Since 2022, every edition of Strides and Ebhigna has been stitched
            together by late-night code sprints, spontaneous laughter between
            rounds, and the spark of seeing bold ideas come alive on stage.
            Revisit the moments, friendships, and creative milestones that
            inspire what we build next.
          </p>
        </div>
      </div>

      {/* Two-row animated scrolling gallery */}
      <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-6">
        {/* Row 1: Left to Right */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max items-center"
            animate={shouldReduceMotion ? undefined : { x: ['-50%', '0%'] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 36, ease: 'linear', repeat: Infinity }
            }
          >
            {[0, 1].map((loopIndex) => (
              <div
                key={`row1-${loopIndex}`}
                className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
                aria-hidden={loopIndex === 1}
              >
                {ROW_ONE_IMAGES.map((img, idx) => {
                  const key = `r1-${loopIndex}-${idx}`;
                  return (
                    <div
                      key={key}
                      className="group relative h-44 w-68 sm:h-56 sm:w-88 shrink-0 overflow-hidden rounded-2xl border border-champagne-gold bg-champagne-white p-1.5 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-xl bg-deep-emerald-green">
                        {!failedImages[img.src] ? (
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 272px, 352px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            onError={() => markFailed(img.src)}
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                            <Sparkles className="h-7 w-7 text-royal-gold" />
                            <span className="text-xs font-medium text-light-gold">
                              {img.alt}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max items-center"
            animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 40, ease: 'linear', repeat: Infinity }
            }
          >
            {[0, 1].map((loopIndex) => (
              <div
                key={`row2-${loopIndex}`}
                className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
                aria-hidden={loopIndex === 1}
              >
                {ROW_TWO_IMAGES.map((img, idx) => {
                  const key = `r2-${loopIndex}-${idx}`;
                  return (
                    <div
                      key={key}
                      className="group relative h-44 w-68 sm:h-56 sm:w-88 shrink-0 overflow-hidden rounded-2xl border border-champagne-gold bg-champagne-white p-1.5 shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-xl bg-deep-emerald-green">
                        {!failedImages[img.src] ? (
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 272px, 352px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            onError={() => markFailed(img.src)}
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                            <Sparkles className="h-7 w-7 text-royal-gold" />
                            <span className="text-xs font-medium text-light-gold">
                              {img.alt}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
