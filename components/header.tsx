'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Coordinators', href: '#coordinators' },
  { label: 'Details', href: '#details' },
  { label: 'Contact Us', href: '#contact-us' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-deep-emerald-green/75 backdrop-blur-md supports-[backdrop-filter]:bg-deep-emerald-green/65 border-b border-champagne-gold/30 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8 py-3">
        {/* Zone 1: Circular Logo + Bright Golden Title */}
        <a
          href="#home"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
        >
          <span className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border-2 border-royal-gold bg-forest-green shrink-0">
            <Image
              src="/ebhigna2027_logo.png"
              alt="Ebhigna 2027 Logo"
              fill
              sizes="44px"
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </span>
          <span className="text-lg sm:text-xl font-bold tracking-wide text-royal-gold">
            Ebhigna 2027
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-sm font-medium text-champagne-white hover:text-royal-gold transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-royal-gold hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Register Now CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-royal-gold px-5 py-2.5 text-sm font-semibold text-deep-emerald-green hover:bg-champagne-gold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-gold"
          >
            Register Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-lg border border-champagne-gold/40 bg-forest-green text-champagne-gold hover:bg-sage-green hover:text-light-gold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-champagne-gold/25 bg-deep-emerald-green/85 backdrop-blur-md"
          >
            <nav
              aria-label="Mobile Navigation"
              className="mx-auto flex max-w-7xl flex-col px-4 py-3 gap-1"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-champagne-white hover:bg-sage-green hover:text-royal-gold transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-1 sm:hidden">
                <button
                  type="button"
                  className="w-full min-h-[44px] rounded-lg bg-royal-gold px-5 py-2.5 text-sm font-semibold text-deep-emerald-green hover:bg-champagne-gold transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-gold"
                >
                  Register Now
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
