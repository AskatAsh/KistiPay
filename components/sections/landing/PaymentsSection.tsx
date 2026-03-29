import CustomBadge from "@/components/ui/customBadge";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type HeroCard = {
    type: "hero";
    title: string;
    subtitle: string;
};

type FeatureCard = {
    type: "feature";
    title: string;
    desc: string;
    bg: string;
    icon: string;
};

type Card = HeroCard | FeatureCard;

// ─── Data ─────────────────────────────────────────────────────────────────────

const cards: Card[] = [
    {
        type: "hero",
        title: "Payments made simple",
        subtitle: "Built for clarity, designed for confidence.",
    },
    {
        type: "feature",
        title: "Sharia-Aligned Structure",
        desc: "Built with transparent pricing and ethical financing principles at its core.",
        bg: "#D5F6E066",
        icon: "/assets/icons/sharia-aligned-structure.png",
    },
    {
        type: "feature",
        title: "Fast Approval",
        desc: "Get verified in minutes and start shopping right away.",
        bg: "#F1DDDA66",
        icon: "/assets/icons/fast-approval.png",
    },
    {
        type: "feature",
        title: "Easy Installments",
        desc: "Split your purchase into structured payments with fixed dates.",
        bg: "#D4DAF766",
        icon: "/assets/icons/easy-installments.png",
    },
    {
        type: "feature",
        title: "Transparent Payments",
        desc: "Always see the full breakdown before confirming any transaction.",
        bg: "#D3F5F866",
        icon: "/assets/icons/transparent-payments.png",
    },
    {
        type: "feature",
        title: "Secure Transactions",
        desc: "Advanced encryption and protected checkout on every payment.",
        bg: "#FCEFCF66",
        icon: "/assets/icons/secure-transactions.png",
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroCardItem({ title, subtitle }: HeroCard) {
    return (
        <div
            className="bg-white rounded-2xl p-6 h-full
        transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
            {/* Badge */}
            <CustomBadge>Why KistiPay</CustomBadge>

            {/* Title */}
            <h2
                className="font-serif font-bold text-neutral-05 leading-[1.1] mt-2 mb-4
          text-[2.25rem] sm:text-[3.875rem]"
            >
                {title}
            </h2>

            {/* Subtitle */}
            <p className="font-sans font-normal text-neutral-03 text-base sm:text-[1.125rem]">
                {subtitle}
            </p>
        </div>
    );
}

function FeatureCardItem({ title, desc, bg, icon }: FeatureCard) {
    return (
        <div
            className="flex flex-col justify-between items-center rounded-lg px-10 py-6 h-full
        transition-transform duration-300 ease-in-out hover:-translate-y-1"
            style={{ backgroundColor: bg }}
        >
            {/* Title */}
            <h3
                className="font-serif font-semibold text-neutral-05 text-[1.25rem] sm:text-2xl self-start text-left w-full">
                {title}
            </h3>

            {/* Icon */}
            <div className="my-8 sm:my-6">
                <Image
                    src={icon}
                    alt={title}
                    width={120}
                    height={120}
                    className="h-20 sm:h-30 w-auto object-contain"
                />
            </div>

            {/* Description */}
            <p className="font-sans font-normal text-neutral-03 text-base text-left w-full">
                {desc}
            </p>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PaymentsSection() {
    return (
        <section className="py-25 sm:py-30">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {cards.map((card, index) =>
                        card.type === "hero" ? (
                            <HeroCardItem key={index} {...card} />
                        ) : (
                            <FeatureCardItem key={index} {...card} />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}