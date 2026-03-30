import { CTALinkButton } from "@/components/ui/CTALinkButton";
import CustomBadge from "@/components/ui/customBadge";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const benefits = [
    "Increase conversion rates",
    "Improve average order value",
    "Reduce cart abandonment",
    "Seamless checkout integration",
    "Secure and transparent settlement",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DashboardPreviewSection() {
    return (
        <section className="section-spacing">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* ── Left: Text Content ── */}
                    <div className="w-full lg:max-w-xl flex flex-col items-start justify-center">

                        {/* Badge + Heading + Subtitle */}
                        <CustomBadge>Business</CustomBadge>

                        <h2
                            className="font-serif font-semibold text-neutral-05 leading-[1.1] mt-2 mb-4
                text-[2.25rem] sm:text-[3rem]"
                        >
                            Flexible payments Real business growth.
                        </h2>

                        <p className="font-sans font-normal text-neutral-03 text-base sm:text-[1.125rem] leading-7">
                            Help your customers buy with confidence — while you grow with
                            stability.
                        </p>

                        {/* Benefits List */}
                        <ul className="flex flex-col gap-3 my-6 sm:my-10 w-full">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-center gap-3 font-sans font-normal text-neutral-03
                    text-base sm:text-[1.125rem] leading-7"
                                >
                                    <span className="shrink-0 w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center">
                                        <Check size={12} className="text-brand-teal" strokeWidth={2.5} />
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <CTALinkButton href="#">
                            <span>Partner with KistiPay</span>
                            <ArrowRight size={20} strokeWidth={2} />
                        </CTALinkButton>
                    </div>

                    {/* ── Right: Dashboard Image ── */}
                    <div
                        className="rounded-3xl overflow-hidden w-full max-w-full lg:max-w-125 aspect-500/580 shrink-0"
                    >
                        <Image
                            src="/assets/images/dashboard-preview.jpg"
                            alt="Merchant dashboard preview"
                            width={500}
                            height={580}
                            className="w-full h-auto block"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}