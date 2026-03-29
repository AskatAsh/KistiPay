import BusinessHeroSection from "@/components/sections/business/BusinessHeroSection";
import CTASection from "@/components/sections/business/CTASection";
import EasyIntegrationSection from "@/components/sections/business/EasyIntegrationSection";
import FlexiblePaymentsSection from "@/components/sections/business/FlexiblePaymentsSection";
import ManageDashboardSection from "@/components/sections/business/ManageDashboardSection";
import SellAnywhereSection from "@/components/sections/business/SellAnywhereSection";
import TrustedBySection from "@/components/sections/business/TrustedBySection";
import WhyBusinessesSection from "@/components/sections/business/WhyBusinessesSection";

export default function BusinessPage() {
    return (
        <>
            <BusinessHeroSection />
            <TrustedBySection />
            <WhyBusinessesSection />
            <SellAnywhereSection />
            <FlexiblePaymentsSection />
            <ManageDashboardSection />
            <EasyIntegrationSection />
            <CTASection />
        </>
    );
}