import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
    {
        image: "/assets/images/increase-sales.png",
        imageBg: "#D8E8EE",
        title: "Increase sales",
        desc: "Flexible payments help customers complete purchases they might otherwise postpone.",
    },
    {
        image: "/assets/images/flexible-checkout-options.png",
        imageBg: "#C8E6E4",
        title: "Flexible checkout options",
        desc: "Customers can choose installments or pay the full amount instantly.",
    },
    {
        image: "/assets/images/secure-transactions.png",
        imageBg: "#CDD8E3",
        title: "Secure transactions",
        desc: "All payments are processed through a reliable and protected infrastructure.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhyBusinessesSection() {
    return (
        <section className="section-spacing">
            <div className="container">

                {/* Section Header */}
                <SectionHeader
                    title="Why Businesses Choose KistiPay"
                    titleStyles="font-semibold text-neutral-04 text-center lg:text-[3rem] leading-[1.1] mt-0"
                    subtitle="KistiPay enables merchants to offer flexible installment payments
                        without adding operational complexity."
                    wrapperStyles="mb-10 sm:mb-16 max-w-[770px] mx-auto" />

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col">

                            {/* Image Card */}
                            <div
                                className="rounded-2xl overflow-hidden flex items-center justify-center
                  w-full aspect-376/400"
                                style={{ backgroundColor: feature.imageBg }}
                            >
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={376}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Text Below Card */}
                            <div className="mt-6 sm:mt-10">
                                <h3 className="font-serif font-semibold leading-[1.3] text-neutral-05 text-xl sm:text-2xl mb-3">
                                    {feature.title}
                                </h3>
                                <p className="font-normal text-neutral-03 text-base leading-6">
                                    {feature.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}