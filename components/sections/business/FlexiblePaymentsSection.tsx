import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
    {
        title: "Pay in installments",
        desc: "Customers split purchases into smaller scheduled payments.",
    },
    {
        title: "Pay in full",
        desc: "Customers can also complete the full payment instantly using KistiPay.",
    },
    {
        title: "Clear payment schedules",
        desc: "Customers always see their payment plan before confirming the purchase.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FlexiblePaymentsSection() {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* ── Left: Text Content ── */}
                    <div className="flex-1">

                        {/* Heading */}
                        <h2
                            className="font-serif font-bold text-neutral-05 leading-[1.1] mb-5
                text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem]"
                        >
                            Flexible Payments Made Simple
                        </h2>

                        {/* Subtitle */}
                        <p
                            className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem]
                leading-relaxed mb-10"
                        >
                            Customers can split purchases into manageable installments or pay
                            in full.
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-col gap-7">
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

                    {/* ── Right: Phone Mockup ── */}
                    <div className="flex-1">
                        <div
                            className="bg-[#F5EFE6] rounded-3xl p-5 sm:p-8"
                        >
                            {/* Image */}
                            <div className="rounded-xl overflow-hidden aspect-533/600 bg-white/60 flex items-center justify-center">
                                <Image
                                    src="/assets/images/flexible-payments-made-simple.png"
                                    alt="KistiPay payment schedule on phone"
                                    width={533}
                                    height={600}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}