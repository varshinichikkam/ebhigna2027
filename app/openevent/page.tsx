'use client';

import { Suspense, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Sparkles, User } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { events } from '@/lib/eventsStore';

function OpenEventContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id');
  const parsedId = idParam ? Number(idParam) : 1;
  const event = events.find((item) => item.id === parsedId) ?? events[0];

  const [failedUrls, setFailedUrls] = useState<Record<string, boolean>>({});

  const markFailed = (key: string) => {
    setFailedUrls((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <main className="flex-1 bg-creamy-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/#events"
          className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-forest-green hover:text-bronze transition-colors duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Events</span>
        </Link>

        {/* Top Split: Details on Left & Larger Image on Right */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-12">
          {/* Left Side: Event Details */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold tracking-tight text-deep-emerald-green text-balance">
              {event.event_title}
            </h1>
            <p className="mt-2 text-lg sm:text-xl font-semibold text-bronze">
              {event.sub_heading}
            </p>

            <div className="mt-5">
              <h2 className="text-base font-bold text-deep-emerald-green">
                Event Details
              </h2>
              <p className="mt-2 whitespace-pre-line text-sm sm:text-base leading-relaxed text-forest-green/90">
                {event.description}
              </p>
            </div>

            <div className="mt-6">
              <a
                href={event.registration_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-royal-gold px-7 py-3 text-sm sm:text-base font-semibold text-deep-emerald-green hover:bg-champagne-gold transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
              >
                <span>Register Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Side: Larger Event Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-champagne-gold bg-deep-emerald-green shadow-lg">
              {!failedUrls[`cover-${event.id}`] && event.cover_image ? (
                <Image
                  src={event.cover_image}
                  alt={event.event_title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                  onError={() => markFailed(`cover-${event.id}`)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                  <Sparkles className="h-10 w-10 text-royal-gold" />
                  <span className="text-sm font-semibold text-light-gold">
                    {event.event_title}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Guidelines: 2 columns in a single full-width row on desktop, plain bullet points */}
        <section className="mt-10 sm:mt-14 border-t border-champagne-gold/60 pt-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold tracking-tight text-deep-emerald-green">
            Guidelines
          </h2>
          <ul className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2.5 list-disc pl-5 text-sm sm:text-base leading-relaxed text-forest-green/90 marker:text-bronze">
            {event.guidelines.map((guideline, idx) => (
              <li key={idx}>{guideline}</li>
            ))}
          </ul>
        </section>

        {/* Coordinators Row: On desktop 40% Event Coordinator (left) | vertical line | 60% Student Coordinators (30% + 30% right); On mobile stacked & horizontal scroll */}
        <div className="mt-12 sm:mt-14 flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-0">
          {/* Event Coordinators (Faculty) - 40% width on desktop */}
          <section className="w-full lg:w-[40%] lg:pr-8 shrink-0">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold tracking-tight text-deep-emerald-green">
              Event Coordinators
            </h2>
            <div className="mt-5 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-6 sm:overflow-visible sm:pb-0">
              {event.event_faculty_coordinator.map((coordinator, idx) => {
                const imgKey = `faculty-${event.id}-${idx}`;
                return (
                  <div
                    key={`${coordinator.name}-${idx}`}
                    className="min-w-[260px] w-[78%] shrink-0 snap-start sm:w-auto sm:min-w-0 overflow-hidden rounded-2xl border border-champagne-gold bg-champagne-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-green">
                      {!failedUrls[imgKey] && coordinator.image ? (
                        <Image
                          src={coordinator.image}
                          alt={coordinator.name}
                          fill
                          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 38vw"
                          className="object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={() => markFailed(imgKey)}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-royal-gold">
                          <User className="h-14 w-14" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-deep-emerald-green">
                        {coordinator.name}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base font-semibold text-bronze">
                        {coordinator.designation}
                      </p>
                      <p className="mt-0.5 text-sm text-forest-green/85">
                        {coordinator.dept}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Mobile Horizontal Line (preserved on mobile) & Desktop Vertical Line */}
          <hr className="border-t border-champagne-gold/70 lg:hidden" />
          <div
            aria-hidden="true"
            className="hidden lg:block w-px bg-champagne-gold/70 shrink-0"
          />

          {/* Student Coordinators - remaining ~60% width on desktop (30% + 30% grid) */}
          <section className="w-full lg:flex-1 lg:min-w-0 lg:pl-8">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold tracking-tight text-deep-emerald-green">
              Student Coordinators
            </h2>
            <div className="mt-5 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0">
              {event.event_student_coordinators.map((student, idx) => {
                const imgKey = `student-${event.id}-${idx}`;
                return (
                  <div
                    key={`${student.roll_no}-${idx}`}
                    className="min-w-[260px] w-[78%] shrink-0 snap-start sm:w-auto sm:min-w-0 overflow-hidden rounded-2xl border border-champagne-gold bg-champagne-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-green">
                      {!failedUrls[imgKey] && student.image ? (
                        <Image
                          src={student.image}
                          alt={student.name}
                          fill
                          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 28vw"
                          className="object-cover object-top"
                          referrerPolicy="no-referrer"
                          onError={() => markFailed(imgKey)}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-royal-gold">
                          <User className="h-10 w-10" />
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-deep-emerald-green">
                        {student.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-bronze tabular-nums">
                        {student.roll_no}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function OpenEventPage() {
  return (
    <div className="flex min-h-screen flex-col bg-creamy-white text-deep-emerald-green">
      <Header />
      <Suspense
        fallback={
          <main className="flex-1 bg-creamy-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
              <p className="text-sm font-medium text-forest-green">
                Loading event details...
              </p>
            </div>
          </main>
        }
      >
        <OpenEventContent />
      </Suspense>
      <Footer />
    </div>
  );
}
