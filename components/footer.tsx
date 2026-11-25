import Image from 'next/image';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'Coordinators', href: '#coordinators' },
  { label: 'Details', href: '#details' },
  { label: 'Contact Us', href: '#contact-us' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-deep-emerald-green text-champagne-white border-t border-champagne-gold/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand Lockup */}
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-royal-gold bg-forest-green shrink-0">
              <Image
                src="/ebhigna2027_logo.png"
                alt="Ebhigna 2027 Logo"
                fill
                sizes="44px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </span>
            <div>
              <p className="text-lg font-bold tracking-wide text-royal-gold">
                Ebhigna 2027
              </p>
              <p className="text-xs sm:text-sm text-light-gold/80">
                Department of CSE (Artificial Intelligence) · Pragati University
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-7 gap-y-3"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-champagne-white/90 hover:text-royal-gold transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-6 border-t border-champagne-gold/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-champagne-gold/80">
          <p>&copy; 2027 Ebhigna 2027. All rights reserved.</p>
          <p className="text-light-gold/75">8th &amp; 9th January 2027 · Online Mode</p>
        </div>
      </div>
    </footer>
  );
}
