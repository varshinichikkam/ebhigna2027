'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { faqs } from '@/lib/faqsStore';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full bg-warm-ivory border-t border-champagne-gold/50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold tracking-tight text-deep-emerald-green">
            Have Questions? Check our FAQ&apos;s
          </h2>
        </div>

        {/* Expandable FAQ List */}
        <div className="mt-10 space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-champagne-gold bg-champagne-white shadow-sm transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left cursor-pointer hover:bg-creamy-white/60 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-deep-emerald-green"
                >
                  <span className="text-base sm:text-lg font-semibold text-deep-emerald-green">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                    }
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm-ivory text-bronze"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
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
                          : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
                      }
                      className="overflow-hidden"
                    >
                      <div className="border-t border-champagne-gold/40 px-5 py-4 sm:px-6 sm:py-5 text-sm sm:text-base leading-relaxed text-forest-green/90">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
