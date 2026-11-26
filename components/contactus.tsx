'use client';

import { FormEvent, useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import {FaInstagram} from 'react-icons/fa'
const WHATSAPP_TARGET = '917288848831';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dept, setDept] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMobile = mobile.trim();
    const trimmedDept = dept.trim();
    const trimmedNotes = notes.trim();

    if (!trimmedName || !trimmedMobile || !trimmedDept) {
      setError('Please fill in your name, mobile number, and department.');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);

    const formattedMessage = [
      'Hello Ebhigna 2027 Team,',
      '',
      `Name: ${trimmedName}`,
      `Mobile: ${trimmedMobile}`,
      `Department: ${trimmedDept}`,
      `Notes: ${trimmedNotes || 'N/A'}`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_TARGET}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section
      id="contact-us"
      className="w-full bg-creamy-white border-t border-champagne-gold/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-10 lg:gap-14">
          {/* Left Side: Direct Call, Mobile Numbers, Instagram & Email */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-bold tracking-tight text-deep-emerald-green">
              Contact Us
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-forest-green/90">
              Reach out to our organizing team for event queries, registrations,
              or participation assistance.
            </p>

            {/* Primary Call Button */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:7288848831"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-royal-gold px-6 py-3 text-sm sm:text-base font-semibold text-deep-emerald-green hover:bg-champagne-gold transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Direct Contact Channels */}
            <div className="mt-6 w-full space-y-3">
              <a
                href="tel:7288848831"
                className="flex min-h-[56px] items-center gap-3.5 rounded-xl border border-champagne-gold bg-champagne-white px-4 py-3 hover:border-royal-gold hover:bg-warm-ivory/60 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep-emerald-green text-royal-gold shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-bronze">Primary Mobile</p>
                  <p className="text-sm sm:text-base font-semibold text-deep-emerald-green tabular-nums">
                    7288848831
                  </p>
                </div>
              </a>

              <a
                href="tel:1234567890"
                className="flex min-h-[56px] items-center gap-3.5 rounded-xl border border-champagne-gold bg-champagne-white px-4 py-3 hover:border-royal-gold hover:bg-warm-ivory/60 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep-emerald-green text-royal-gold shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-bronze">Support Desk</p>
                  <p className="text-sm sm:text-base font-semibold text-deep-emerald-green tabular-nums">
                    1234567890
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center gap-3.5 rounded-xl border border-champagne-gold bg-champagne-white px-4 py-3 hover:border-royal-gold hover:bg-warm-ivory/60 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep-emerald-green text-royal-gold shrink-0">
                  <FaInstagram className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-bronze">Instagram</p>
                  <p className="text-sm sm:text-base font-semibold text-deep-emerald-green truncate">
                    @ebhigna2027
                  </p>
                </div>
              </a>

              <a
                href="mailto:varshinichikkam@gmail.com"
                className="flex min-h-[56px] items-center gap-3.5 rounded-xl border border-champagne-gold bg-champagne-white px-4 py-3 hover:border-royal-gold hover:bg-warm-ivory/60 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep-emerald-green text-royal-gold shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-bronze">Email</p>
                  <p className="text-sm sm:text-base font-semibold text-deep-emerald-green break-all">
                    varshinichikkam@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="lg:col-span-7 w-full">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-champagne-gold bg-champagne-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-bold text-deep-emerald-green">
                Send an Enquiry
              </h3>
              <p className="mt-1.5 text-sm text-forest-green/85">
                Fill in your details and send a formatted message directly to our
                coordinator.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-deep-emerald-green"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1.5 w-full min-h-[44px] rounded-lg border border-champagne-gold bg-creamy-white px-3.5 py-2.5 text-sm text-deep-emerald-green placeholder:text-sage-green/70 focus:border-deep-emerald-green focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-mobile"
                    className="block text-sm font-semibold text-deep-emerald-green"
                  >
                    Mobile
                  </label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="mt-1.5 w-full min-h-[44px] rounded-lg border border-champagne-gold bg-creamy-white px-3.5 py-2.5 text-sm text-deep-emerald-green placeholder:text-sage-green/70 tabular-nums focus:border-deep-emerald-green focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-dept"
                    className="block text-sm font-semibold text-deep-emerald-green"
                  >
                    Dept
                  </label>
                  <input
                    id="contact-dept"
                    type="text"
                    required
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    placeholder="e.g. CSE (AI), CSE, IT"
                    className="mt-1.5 w-full min-h-[44px] rounded-lg border border-champagne-gold bg-creamy-white px-3.5 py-2.5 text-sm text-deep-emerald-green placeholder:text-sage-green/70 focus:border-deep-emerald-green focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-notes"
                    className="block text-sm font-semibold text-deep-emerald-green"
                  >
                    Notes
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Write your question or event enquiry..."
                    className="mt-1.5 w-full rounded-lg border border-champagne-gold bg-creamy-white px-3.5 py-2.5 text-sm text-deep-emerald-green placeholder:text-sage-green/70 focus:border-deep-emerald-green focus:outline-none focus:ring-2 focus:ring-royal-gold/50"
                  />
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-4 text-sm font-medium text-bronze"
                >
                  {error}
                </p>
              )}

              {submitted && !error && (
                <p className="mt-4 text-sm font-medium text-forest-green">
                  Redirecting with your formatted enquiry to 7288848831...
                </p>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-royal-gold px-7 py-3 text-sm sm:text-base font-semibold text-deep-emerald-green hover:bg-champagne-gold transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-emerald-green"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
