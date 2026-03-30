import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

const features = [
    {
        title: "Online Stores",
        desc: "Integrate KistiPay into your website or e-commerce platform and allow customers to pay with installments during checkout.",
    },
    {
        title: "In-Store Payments",
        desc: "Let customers split payments directly at your physical store using KistiPay supported checkout methods.",
    },
    {
        title: "Mobile Platforms",
        desc: "Enable flexible payments inside mobile apps or digital storefronts.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SellAnywhereSection() {
    return (
        <section className="section-spacing">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">

                    {/* ── Left: 2x2 Image Grid ── */}
                    <div className="flex-1">
                        <div
                            className="bg-[#D3F5F850] rounded-[32px] p-4 sm:p-6"
                        >
                            {/* Image */}
                            <div className="rounded-xl overflow-hidden aspect-533/600 bg-white/60 flex items-center justify-center">
                                <Image
                                    src="/assets/images/sell-anywhere.png"
                                    alt="Sell Anywhere with KistiPay"
                                    width={533}
                                    height={600}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Text Content ── */}
                    <div className="flex-1">
                        {/* Heading */}
                        <SectionHeader
                            title="Sell Anywhere with KistiPay"
                            titleStyles="font-semibold text-neutral-04 lg:text-[3rem] leading-[1.1] mt-0"
                            subtitle="Whether your customers shop online or in person, KistiPay helps you provide flexible payment options at checkout."
                            wrapperStyles="mb-8 sm:mb-9 items-start text-left" />

                        {/* Feature List */}
                        <div className="flex flex-col gap-6 px-4">
                            {features.map((feature, index) => (
                                <div key={index}>
                                    <h3 className="font-serif font-semibold text-neutral-04 text-xl sm:text-2xl mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="font-normal text-neutral-03 text-base leading-6">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}