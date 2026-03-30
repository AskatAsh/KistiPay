import AppDownloadSection from "@/components/sections/landing/Appdownloadsection";
import BrandsSection from "@/components/sections/landing/BrandsSection";
import AdvancedStepsSection from "@/components/sections/personal/AdvancedStepsSection";
import FeaturesSection from "@/components/sections/personal/FeaturesSection";
import PersonalHeroSection from "@/components/sections/personal/PersonalHeroSection";

export default function PersonalPage() {
    return (
        <>
            <PersonalHeroSection />
            <FeaturesSection />
            <AdvancedStepsSection />
            <BrandsSection />
            <AppDownloadSection />
        </>
    );
}