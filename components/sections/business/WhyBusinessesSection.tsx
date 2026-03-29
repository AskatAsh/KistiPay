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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2
                        className="font-serif font-bold text-neutral-05 leading-[1.15] mb-4
              text-[1.75rem] sm:text-[2.25rem] lg:text-[2.875rem]"
                    >
                        Why Businesses Choose KistiPay
                    </h2>
                    <p
                        className="font-sans font-normal text-neutral-03 text-base sm:text-[1.125rem] leading-7 mx-auto"
                        style={{ maxWidth: "580px" }}
                    >
                        KistiPay enables merchants to offer flexible installment payments
                        without adding operational complexity.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col">

                            {/* Image Card */}
                            <div
                                className="rounded-2xl overflow-hidden flex items-center justify-center
                  w-full aspect-4/3"
                                style={{ backgroundColor: feature.imageBg }}
                            >
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={420}
                                    height={315}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Text Below Card */}
                            <div className="mt-6 px-1">
                                <h3 className="font-serif font-bold text-neutral-05 text-xl sm:text-2xl mb-3">
                                    {feature.title}
                                </h3>
                                <p className="font-sans font-normal text-neutral-03 text-base leading-relaxed">
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