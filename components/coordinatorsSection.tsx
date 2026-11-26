'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, User } from 'lucide-react';
import {
  facultyCoordinators,
  hodCoordinator,
  studentCoordinators,
} from '@/lib/coordinatorsStore';

export default function CoordinatorsSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markFailed = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section
      id="coordinators"
      className="w-full bg-creamy-white border-t border-champagne-gold/50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold tracking-tight text-deep-emerald-green">
            Coordinators
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-forest-green/90">
            Meet the department leadership, faculty mentors, and student leads
            guiding Ebhigna 2027.
          </p>
        </div>

        {/* Center Tier 1: HoD of CSE-AI */}
        <div className="mt-10 sm:mt-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-bronze">
            HoD of CSE-AI
          </h3>
          <div className="mx-auto mt-4 max-w-md rounded-2xl border border-champagne-gold bg-champagne-white p-6 sm:p-8 shadow-sm">
            <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-royal-gold bg-forest-green">
              {!failedImages['hod'] && hodCoordinator.image ? (
                <Image
                  src={hodCoordinator.image}
                  alt={hodCoordinator.name}
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={() => markFailed('hod')}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-royal-gold">
                  <User className="h-10 w-10" />
                </div>
              )}
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-deep-emerald-green">
              {hodCoordinator.name}
            </p>
            <p className="mt-1.5 text-sm sm:text-base font-medium text-forest-green/90">
              {hodCoordinator.designation}
            </p>
          </div>
        </div>

        {/* Center Tier 2 (2 Columns): Faculty Coordinators */}
        <div className="mt-10 sm:mt-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Faculty Coordinators
          </h3>
          <div className="mx-auto mt-4 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {facultyCoordinators.map((faculty, idx) => {
              const key = `faculty-${idx}`;
              return (
                <div
                  key={faculty.name}
                  className="rounded-2xl border border-champagne-gold bg-champagne-white p-6 text-center shadow-sm"
                >
                  <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-royal-gold bg-forest-green">
                    {!failedImages[key] && faculty.image ? (
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        sizes="96px"
                        className="object-cover object-top"
                        referrerPolicy="no-referrer"
                        onError={() => markFailed(key)}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-royal-gold">
                        <User className="h-9 w-9" />
                      </div>
                    )}
                  </div>
                  <p className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-deep-emerald-green">
                    {faculty.name}
                  </p>
                  <p className="mt-1.5 text-sm sm:text-base font-medium text-forest-green/90">
                    {faculty.designation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Tier 3 (2 Columns): Student Coordinators */}
        <div className="mt-10 sm:mt-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-bronze">
            Student Coordinators
          </h3>
          <div className="mx-auto mt-4 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {studentCoordinators.map((student, idx) => {
              const key = `student-${idx}`;
              return (
                <div
                  key={student.roll_no}
                  className="rounded-2xl border border-champagne-gold bg-champagne-white p-6 text-center shadow-sm"
                >
                  <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-royal-gold bg-forest-green">
                    {!failedImages[key] && student.image ? (
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                        referrerPolicy="no-referrer"
                        onError={() => markFailed(key)}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-royal-gold">
                        <User className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  <p className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-deep-emerald-green">
                    {student.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-bronze tabular-nums">
                    {student.roll_no}
                  </p>
                  <a
                    href={`tel:${student.mobile}`}
                    className="mt-3 inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-champagne-gold bg-creamy-white px-4 py-1.5 text-sm font-semibold text-deep-emerald-green hover:bg-warm-ivory hover:border-royal-gold transition-colors duration-150 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
                  >
                    <Phone className="h-3.5 w-3.5 text-bronze" />
                    <span>{student.mobile}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
