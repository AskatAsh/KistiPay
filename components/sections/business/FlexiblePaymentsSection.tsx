import SectionHeader from "@/components/shared/SectionHeader";
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
        <section className="section-spacing">
            <div className="container">
                <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-12 lg:gap-20">

                    {/* ── Left: Text Content ── */}
                    <div className="flex-1">

                        {/* Heading */}
                        <SectionHeader
                            title="Flexible Payments Made Simple"
                            titleStyles="font-semibold text-neutral-04 lg:text-[3rem] leading-[1.1] mt-0"
                            subtitle="Customers can split purchases into manageable installments or pay
                            in full."
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

                    {/* ── Right: Phone Mockup ── */}
                    <div className="flex-1">
                        <div
                            className="bg-[#FCEFCF50] rounded-[32px] p-4 sm:p-6"
                        >
                            {/* Image */}
                            <div className="rounded-xl overflow-hidden aspect-576/648 bg-white/60 flex items-center justify-center">
                                <Image
                                    src="/assets/images/flexible-payments-made-simple.png"
                                    alt="KistiPay payment schedule on phone"
                                    width={576}
                                    height={648}
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