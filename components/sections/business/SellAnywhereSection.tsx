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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── Left: 2x2 Image Grid ── */}
                    <div className="w-full lg:w-1/2 shrink-0">
                        <div
                            className="bg-[#EEF6FB] rounded-3xl p-5 sm:p-8"
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
                    <div className="w-full lg:w-1/2">
                        {/* Heading */}
                        <h2
                            className="font-serif font-bold text-neutral-05 leading-[1.1] mb-5
                text-[2rem] sm:text-[2.5rem] lg:text-[3rem]"
                        >
                            Sell Anywhere with KistiPay
                        </h2>

                        {/* Subtitle */}
                        <p className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem] leading-relaxed mb-10">
                            Whether your customers shop online or in person, KistiPay helps
                            you provide flexible payment options at checkout.
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-col gap-8">
                            {features.map((feature, index) => (
                                <div key={index}>
                                    <h3 className="font-serif font-bold text-neutral-05 text-xl sm:text-2xl mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="font-sans font-normal text-neutral-03 text-base leading-relaxed">
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