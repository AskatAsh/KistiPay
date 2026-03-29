import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AppDownloadSection from "@/components/sections/landing/Appdownloadsection";
import BrandsSection from "@/components/sections/landing/BrandsSection";
import DashboardPreviewSection from "@/components/sections/landing/Dashboardpreviewsection";
import HeroLanding from "@/components/sections/landing/HeroLanding";
import HowItWorksSection from "@/components/sections/landing/HowItWorksSection";
import PaymentsSection from "@/components/sections/landing/PaymentsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroLanding />
        <PaymentsSection />
        <HowItWorksSection />
        <BrandsSection />
        <DashboardPreviewSection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}
