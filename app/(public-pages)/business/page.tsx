import SellAnywhereSection from "@/components/sections/business/SellAnywhereSection";
import TrustedBySection from "@/components/sections/business/TrustedBySection";
import WhyBusinessesSection from "@/components/sections/business/WhyBusinessesSection";

export default function BusinessPage() {
    return (
        <>
            <TrustedBySection />
            <WhyBusinessesSection />
            <SellAnywhereSection />
        </>
    );
}