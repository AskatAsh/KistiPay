import { CTALinkButton } from "@/components/ui/CTALinkButton";
import Image from "next/image";

export default function BusinessHeroSection() {
    return (
        <section
            className="relative overflow-hidden pt-36 pb-0 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            style={{
                background: "linear-gradient(270deg, rgba(186, 89, 77, 0.08) 0%, rgba(33, 190, 201, 0.2) 100%)"
            }}
        >
            {/* ──  Text Content ── */}
            <div className="text-center max-w-223 mx-auto mb-10">

                {/* Heading */}
                <h1
                    className="font-serif font-bold text-neutral-05 leading-[1.1] mb-4 text-[2.25rem] lg:text-[3.875rem]"
                >
                    Let customers buy now and pay later
                </h1>

                {/* Subtitle */}
                <p
                    className="font-normal text-neutral-03 text-lg leading-7 mb-4 mx-auto px-4 md:px-10"
                >
                    Offer flexible installment payments to your customers while receiving
                    payments securely through KistiPay.
                </p>

                {/* CTA Button */}
                <CTALinkButton href="#">
                    Become a Partner
                </CTALinkButton>
            </div>

            {/* ── Dashboard Mockup Image ── */}
            <div
                className="relative w-full h-70 overflow-hidden max-w-225 mx-auto"
            >
                {/* Dashboard screenshot */}
                <Image
                    src="/assets/images/hero-business.png"
                    alt="KistiPay merchant dashboard"
                    width={967}
                    height={725}
                    priority
                    className="w-full h-auto rounded-t-lg block"
                />
            </div>

        </section>
    );
}