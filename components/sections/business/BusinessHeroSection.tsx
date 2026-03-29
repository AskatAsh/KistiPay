import Image from "next/image";
import Link from "next/link";

export default function BusinessHeroSection() {
    return (
        <section
            className="relative overflow-hidden pt-36 pb-0 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            style={{
                background: "linear-gradient(270deg, rgba(186, 89, 77, 0.08) 0%, rgba(33, 190, 201, 0.2) 100%)"
            }}
        >
            {/* ──  Text Content ── */}
            <div className="text-center max-w-3xl mx-auto mb-10">

                {/* Heading */}
                <h1
                    className="font-serif font-bold text-neutral-05 leading-[1.1] mb-5
            text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem]"
                >
                    Let customers buy now and pay later
                </h1>

                {/* Subtitle */}
                <p
                    className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem]
            leading-relaxed mb-8 mx-auto"
                    style={{ maxWidth: "560px" }}
                >
                    Offer flexible installment payments to your customers while receiving
                    payments securely through KistiPay.
                </p>

                {/* CTA Button */}
                <Link
                    href="#"
                    className="inline-flex items-center justify-center
            font-sans font-semibold text-white text-base
            bg-brand-teal hover:bg-brand-teal/90
            px-8 py-3.5 rounded-xl
            transition-all duration-300 ease-in-out
            hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-teal/25
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
                >
                    Become a Partner
                </Link>
            </div>

            {/* ── Dashboard Mockup Image ── */}
            <div
                className="relative w-full h-70 overflow-hidden max-w-4xl mx-auto"
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