import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroLanding from "@/components/sections/landing/HeroLanding";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroLanding />
      </main>
      <Footer />
    </div>
  );
}
