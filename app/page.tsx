import Header from '@/components/header';
import HeroSection from '@/components/herosection';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-creamy-white text-deep-emerald-green">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
