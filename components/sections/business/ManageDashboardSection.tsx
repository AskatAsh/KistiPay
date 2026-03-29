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
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── Left: Dashboard Mockup ── */}
                    <div className="flex-1">

                        {/* Image */}
                        <div className="rounded-xl overflow-hidden aspect-533/600 bg-white/60 flex items-center justify-center">
                            <Image
                                src="/assets/images/dashboard-preview-02.png"
                                alt="Kistipay dashboard preview"
                                width={533}
                                height={600}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* ── Right: Text Content ── */}
                    <div className="flex-1">

                        {/* Heading */}
                        <h2
                            className="font-serif font-bold text-neutral-05 leading-[1.1] mb-5
                text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem]"
                        >
                            Manage Everything in One Dashboard
                        </h2>

                        {/* Subtitle */}
                        <p className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem] leading-relaxed mb-5">
                            KistiPay provides merchants with a centralized dashboard to track
                            payments, monitor activity, and manage transactions.
                        </p>

                        {/* Uppercase tagline */}
                        <p
                            className="font-sans font-bold text-neutral-04 text-[0.7rem] tracking-[0.08em] uppercase leading-snug mb-8"
                        >
                            Stay in control of your payments and transactions with a
                            centralized merchant dashboard.
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-col gap-6">
                            {features.map((feature, index) => (
                                <div key={index}>
                                    <h3 className="font-serif font-bold text-neutral-05 text-lg sm:text-xl mb-1.5">
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