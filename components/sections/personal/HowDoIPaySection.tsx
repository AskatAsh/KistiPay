import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const installmentSteps = [
    {
        step: "01",
        title: "Choose KistiPay at checkout",
        desc: "Select KistiPay as your payment method at any partner store — online or in-store — before confirming your order.",
    },
    {
        step: "02",
        title: "Confirm your payment plan",
        desc: "Pick the plan that suits you. See the full schedule — amount per payment, due dates, and total cost — before you confirm anything.",
    },
    {
        step: "03",
        title: "Pay a portion today",
        desc: "Complete your first installment at checkout via bKash, Nagad, or your linked bank account. Your order is confirmed right away.",
    },
    {
        step: "04",
        title: "Complete the rest in scheduled installments",
        desc: "Remaining payments follow your chosen schedule. Track every due date and pay in one tap from the KistiPay app.",
    },
];

const fullPaySteps = [
    {
        step: "01",
        title: "Select KistiPay during checkout",
        desc: "At any partner store, choose KistiPay as your payment option. You'll see the full payment amount clearly before proceeding.",
    },
    {
        step: "02",
        title: "Link your payment method",
        desc: "Connect your bKash, Nagad, or bank account to your KistiPay profile. Saved methods make all future payments instant.",
    },
    {
        step: "03",
        title: "Confirm your payment",
        desc: "Review the total amount and verify using your KistiPay PIN or biometric authentication for a fast, secure checkout.",
    },
    {
        step: "04",
        title: "Pay instantly with full security",
        desc: "Your payment processes in seconds with 256-bit encryption. A confirmation is sent to your phone immediately after.",
    },
];

// ─── Step Item ────────────────────────────────────────────────────────────────

type StepItemProps = {
    step: string;
    title: string;
    desc: string;
    accentBg: string;
    accentText: string;
};

function StepItem({ step, title, desc, accentBg, accentText }: StepItemProps) {
    return (
        <div className="flex gap-4">
            {/* Step number badge */}
            <div
                className="shrink-0 w-12 h-12 rounded-sm flex items-center justify-center
          font-serif font-semibold text-lg md:text-[1.75rem]"
                style={{ backgroundColor: accentBg, color: accentText }}
            >
                {step}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-neutral-05 text-lg leading-7">
                    {title}
                </h4>
                <p className="font-normal text-neutral-03 text-sm leading-6">
                    {desc}
                </p>
            </div>
        </div>
    );
}

// ─── Payment Card ─────────────────────────────────────────────────────────────

type PaymentCardProps = {
    title: string;
    steps: typeof installmentSteps;
    accentBg: string;
    accentText: string;
    decorImage?: string;
    decorPosition?: "bottom-left" | "top-right";
    decorImageStyles?: string;
};

function PaymentCard({
    title,
    steps,
    accentBg,
    accentText,
    decorImage,
    decorPosition = "bottom-left",
    decorImageStyles
}: PaymentCardProps) {
    return (
        <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden flex flex-col gap-6 md:gap-10"
            style={{
                backgroundImage: "url('/assets/images/payment-method-background-01.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0% 90%"
            }}>
            {/* Card title */}
            <h3 className="font-serif font-bold text-neutral-05 text-2xl sm:text-3xl md:text-[2.375rem]">
                {title}
            </h3>

            {/* Steps */}
            <div className="flex flex-col gap-6">
                {steps.map((s) => (
                    <StepItem
                        key={s.step}
                        {...s}
                        accentBg={accentBg}
                        accentText={accentText}
                    />
                ))}
            </div>

            {/* Decorative corner image */}
            {decorImage && (
                <div
                    className={cn("absolute opacity-20 pointer-events-none", decorPosition === "bottom-left" ? "-bottom-35 -left-20" : "-top-20 -right-25")}
                >
                    <Image
                        src="/assets/images/payment-method-background-01.png"
                        alt="payment methods pay icon"
                        width={776}
                        height={776}
                        className={cn("w-60 h-60 object-contain opacity-50", decorImageStyles)}
                    />
                </div>
            )}
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function HowDoIPaySection() {
    return (
        <section
            className="section-spacing bg-neutral-03"
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

                    {/* ── Left: Heading + Installments Card ── */}
                    <div className="max-w-[524px] w-full flex flex-col gap-8">
                        {/* Section heading */}
                        <h2
                            className="font-serif font-bold text-white leading-[1.1] text-[2.25rem] lg:text-[3.875rem] mb-10 sm:mb-16"
                        >
                            How do I pay with KistiPay?
                        </h2>

                        {/* Installments card — teal accent */}
                        <PaymentCard
                            title="Pay in installments"
                            steps={installmentSteps}
                            accentBg="#D3F5F8"
                            accentText="#21BEC9"
                            decorImage="/assets/icons/pay-badge.svg"
                            decorPosition="bottom-left"
                            decorImageStyles="rotate-25"
                        />
                    </div>

                    {/* ── Right: Pay in Full Card ── */}
                    <div className="max-w-[524px] w-full mt-24 lg:mt-0">
                        {/* Pay in full card — gold accent */}
                        <PaymentCard
                            title="Pay in full"
                            steps={fullPaySteps}
                            accentBg="#FDE8CE"
                            accentText="#F7941D"
                            decorImage="/assets/icons/pay-badge.svg"
                            decorPosition="top-right"
                            decorImageStyles="rotate-45"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}