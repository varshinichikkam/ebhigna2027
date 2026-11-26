import Header from '@/components/header';
import HeroSection from '@/components/herosection';
import EventsSection from '@/components/eventsSection';
import CoordinatorsSection from '@/components/coordinatorsSection';
import Gallery from '@/components/gallery';
import ContactUs from '@/components/contactus';
import FaqSection from '@/components/faqSection';
import Footer from '@/components/footer';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-creamy-white text-deep-emerald-green">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EventsSection />
        <CoordinatorsSection />
        <Gallery />
        <ContactUs />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
