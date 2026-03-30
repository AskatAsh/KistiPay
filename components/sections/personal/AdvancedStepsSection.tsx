import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stepsData = [
    {
        step: "01",
        title: "Shop with KistiPay",
        desc: "Choose KistiPay at checkout from any participating partner store — online or in-store. Select your installment plan and see the full payment breakdown before confirming.",
        icon: "/assets/images/shop-with-kistipay-02.jpg",
        bg: "#EBFEED",
    },
    {
        step: "02",
        title: "Verify in minutes",
        desc: "Complete a quick one-time identity check using your NID and a selfie. Your account is approved and your spending limit is set — ready to use right away.",
        icon: "/assets/images/verify-in-minutes-02.jpg",
        bg: "#F9F1F0",
    },
    {
        step: "03",
        title: "Pay over installments",
        desc: "Pay a portion today and complete the rest in scheduled installments. Clear due dates, full visibility — track everything directly from the KistiPay app.",
        icon: "/assets/images/pay-over-installments-02.jpg",
        bg: "#EDFBFC",
    },
    {
        step: "04",
        title: "Save & earn rewards",
        desc: "Pay on time consistently and your KistiPay credit score grows. Unlock a higher spending limit, better plan rates, and exclusive deals from partner stores.",
        icon: "/assets/images/save-and-earn-rewards.jpg",
        bg: "#FEF9EC",
    },
];

const TOTAL_STEPS = stepsData.length;

// ─── Step Card ────────────────────────────────────────────────────────────────

function StepCard({
    step,
    title,
    desc,
    icon,
    bg,
}: (typeof stepsData)[number]) {
    return (
        <div
            className="flex flex-col rounded-3xl p-6 sm:p-8 h-full
        transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
            style={{ backgroundColor: bg }}
        >
            {/* Icon image */}
            <div
                className="rounded-2xl overflow-hidden flex items-center justify-center aspect-528/454 bg-[#E2EBF2]"
            >
                <Image
                    src={icon}
                    alt={title}
                    width={528}
                    height={454}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Step label pill */}
            <div
                className="w-fit flex items-center gap-0.5 mt-10 mb-3
          font-serif font-semibold text-[1.125rem] leading-snug
          px-5 py-2 rounded-full border border-neutral-02"
            >
                <span className="text-neutral-03">{step}</span>
                <span className="text-neutral-02">/{TOTAL_STEPS.toString().padStart(2, "0")}</span>
            </div>

            {/* Title */}
            <h3
                className="font-serif font-semibold text-neutral-05 leading-[1.2] mb-3
          text-[1.5rem] sm:text-[1.75rem] lg:text-[2.375rem]"
            >
                {title}
            </h3>

            {/* Description */}
            <p className="font-sans font-normal text-neutral-03 text-sm sm:text-base leading-relaxed">
                {desc}
            </p>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function AdvancedStepsSection() {
    return (
        <section className="section-spacing">
            <div className="container">

                {/* Section Header */}
                <SectionHeader badgeText="How It Works" title="Three simple steps" subtitle="From checkout to installment — smooth and straightforward." />
                {/* <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
                    <CustomBadge>How It Works</CustomBadge>

                    <h2
                        className="font-serif font-bold text-neutral-05 leading-[1.1] mt-2 mb-4
              text-[2.25rem] lg:text-[3.875rem]"
                    >
                        Three simple steps
                    </h2>

                    <p
                        className="font-normal text-neutral-03 text-base sm:text-lg leading-7"
                    >
                        From checkout to installment — smooth and straightforward.
                    </p>
                </div> */}

                {/* 2×2 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stepsData.map((step) => (
                        <StepCard key={step.step} {...step} />
                    ))}
                </div>

            </div>
        </section>
    );
}