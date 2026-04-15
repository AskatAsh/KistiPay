import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
    {
        title: "Sales overview",
        desc: "View recent transactions and payment activity in real time.",
    },
    {
        title: "Transaction tracking",
        desc: "Monitor installment payments and completed orders.",
    },
    {
        title: "Settlement reports",
        desc: "Access clear reports about your payments and settlements.",
    },
    {
        title: "Business insights",
        desc: "Understand purchase patterns and customer behavior.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ManageDashboardSection() {
    return (
        <section className="section-spacing">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── Left: Dashboard Mockup ── */}
                    <div className="flex-1 lg:flex-[1.1] w-full">
                        {/* Image */}
                        <div className="rounded-xl overflow-hidden aspect-576/648 bg-white/60 flex items-center justify-center">
                            <Image
                                src="/assets/images/dashboard-preview-02.png"
                                alt="Kistipay dashboard preview"
                                width={576}
                                height={648}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* ── Right: Text Content ── */}
                    <div className="flex-1">

                        {/* Heading */}
                        <SectionHeader
                            title="Manage Everything in One Dashboard"
                            titleStyles="font-semibold text-neutral-04 lg:text-[3rem] leading-[1.1] mt-0"
                            subtitle="KistiPay provides merchants with a centralized dashboard to track
                            payments, monitor activity, and manage transactions."
                            wrapperStyles="mb-4 sm:mb-4 items-start text-left" />
                        {/* Uppercase tagline */}
                        <p
                            className="font-semibold text-neutral-03 text-xs tracking-0 uppercase leading-7 mb-8 sm:mb-9"
                        >
                            Stay in control of your payments and transactions with a centralized merchant dashboard.
                        </p>

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