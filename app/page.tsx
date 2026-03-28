import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroLanding from "@/components/sections/landing/HeroLanding";
import PaymentsSection from "@/components/sections/landing/PaymentsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroLanding />
        <PaymentsSection />
      </main>
      <Footer />
    </div>
  );
}
