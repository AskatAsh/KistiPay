import CustomBadge from "@/components/ui/customBadge";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stepsData = [
    {
        step: "01",
        title: "Shop with KistiPay",
        desc: "Choose KistiPay at checkout from participating partner stores.",
        icon: "/assets/images/shop-with-kistipay.jpg",
    },
    {
        step: "02",
        title: "Verify in minutes",
        desc: "Complete a quick verification and instantly view your spending limit.",
        icon: "/assets/images/verify-in-minutes.jpg",
    },
    {
        step: "03",
        title: "Pay over installments",
        desc: "Pay a portion today and the rest over scheduled installments. Clear due dates. Full visibility.",
        icon: "/assets/images/pay-over-installments.jpg",
    },
];

// ─── Step Card ────────────────────────────────────────────────────────────────

function StepCard({
    step,
    title,
    desc,
    icon,
}: (typeof stepsData)[number] & { isLast: boolean }) {
    return (
        <div className="flex flex-col">

            {/* Step number + connector line */}
            <div className="flex items-end gap-4 mb-6">
                <span className="font-serif font-bold text-neutral-03 text-2xl shrink-0 mt-2">
                    {step}
                </span>
                <div
                    className="flex-1 h-px mb-3"
                    style={{
                        background: "linear-gradient(90deg, rgba(33,190,201,0.6) 0%, rgba(244,248,253,0.6) 100%)",
                    }}
                />
            </div>

            {/* Card */}
            <div
                className="flex flex-col h-full rounded-xl overflow-hidden text-left
          bg-white border-4 border-white
          shadow-[0px_8px_32px_0px_rgba(33,190,201,0.10)]
          transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
                {/* Image area */}
                <div
                    className="flex items-center justify-center h-70 bg-[##F4F8FD]"
                >
                    <Image
                        src={icon}
                        alt={title}
                        width={376}
                        height={280}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 px-6 py-8">
                    <h3 className="font-serif font-bold text-neutral-05 text-2xl">
                        {title}
                    </h3>
                    <p className="font-sans font-normal text-neutral-03 text-base leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>

        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function HowItWorksSection() {
    return (
        <section
            className="section-spacing"
            style={{ backgroundColor: "rgba(252, 239, 207, 0.2)" }}
        >
            <div className="container">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-14">
                    <CustomBadge>How It Works</CustomBadge>

                    <h2
                        className="font-serif font-bold text-neutral-05 leading-[1.1] mt-4 mb-4
              text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem]"
                    >
                        Three simple steps
                    </h2>

                    <p
                        className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem] leading-relaxed"
                        style={{ maxWidth: "520px" }}
                    >
                        From checkout to installment — smooth and straightforward.
                    </p>
                </div>

                {/* Step Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-0 md:gap-4">
                    {stepsData.map((step, index) => (
                        <StepCard
                            key={step.step}
                            {...step}
                            isLast={index === stepsData.length - 1}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}