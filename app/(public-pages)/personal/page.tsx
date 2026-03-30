import AppDownloadSection from "@/components/sections/landing/Appdownloadsection";
import BrandsSection from "@/components/sections/landing/BrandsSection";
import AdvancedStepsSection from "@/components/sections/personal/AdvancedStepsSection";
import FAQSection from "@/components/sections/personal/FAQSection";
import FeaturesSection from "@/components/sections/personal/FeaturesSection";
import HowDoIPaySection from "@/components/sections/personal/HowDoIPaySection";
import PersonalHeroSection from "@/components/sections/personal/PersonalHeroSection";

export default function PersonalPage() {
    return (
        <>
            <PersonalHeroSection />
            <FeaturesSection />
            <HowDoIPaySection />
            <AdvancedStepsSection />
            <BrandsSection />
            <FAQSection />
            <AppDownloadSection />
        </>
    );
}