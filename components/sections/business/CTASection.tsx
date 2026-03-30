import SectionHeader from "@/components/shared/SectionHeader";
import { CTALinkButton } from "@/components/ui/CTALinkButton";

export default function CTASection() {
    return (
        <section className="section-spacing">
            <div className="container">

                {/* CTA Card */}
                <div
                    className="relative overflow-hidden rounded-3xl px-6 py-10 sm:p-16 text-center"
                    style={{
                        backgroundImage: "url('/assets/images/flexible-payments-bg.svg')",
                        backgroundColor: "#D3F5F8",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 105%",
                        backgroundPosition: "0% 50%"
                    }}
                >
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">

                        <SectionHeader
                            title="Start offering flexible payments today"
                            titleStyles="mt-0"
                            subtitle="Join businesses that are growing their sales by giving customers
                            more ways to pay."
                            wrapperStyles="mb-0 sm:mb-0">
                            {/* CTA Button */}
                            <CTALinkButton href="#" className="mt-6">
                                Join KistiPay Business
                            </CTALinkButton>
                        </SectionHeader>


                    </div>

                </div>
            </div>
        </section>
    );
}