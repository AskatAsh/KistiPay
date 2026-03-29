import AppStore from "@/components/icons/AppStore";
import GooglePlay from "@/components/icons/GooglePlay";
import Image from "next/image";

export default function HeroLanding() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#d3f5f8] to-white pb-0 flex items-center pt-25 md:pt-37.5 lg:pt-42.5">

            {/* ── Ellipsis Glow Blobs ── */}
            {/* Ellipsis 01 */}
            <div
                className="absolute rounded-full bg-[#fcefcf] opacity-20 border-2 border-black pointer-events-none hidden md:block"
                style={{
                    width: "637px",
                    height: "637px",
                    top: "-175px",
                    left: "-169px",
                    filter: "blur(100px)",
                }}
            />
            {/* Ellipsis 02 — hidden on mobile */}
            <div
                className="absolute rounded-full bg-[#fcefcf] opacity-20 border-2 border-black pointer-events-none hidden md:block"
                style={{
                    width: "523px",
                    height: "469px",
                    top: "413px",
                    left: "742px",
                    filter: "blur(100px)",
                }}
            />
            {/* Ellipsis 03 — hidden on mobile */}
            <div
                className="absolute rounded-full bg-[#fcefcf] opacity-20 border-2 border-black pointer-events-none hidden md:block"
                style={{
                    width: "523px",
                    height: "469px",
                    top: "519px",
                    left: "447px",
                    filter: "blur(100px)",
                }}
            />

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* Hero Text + Buttons */}
                <div className="text-center mb-12">

                    {/* Title */}
                    <h1
                        className="font-serif font-bold text-neutral-05 leading-[1.1] mx-auto mb-4
              text-[2.5rem] sm:text-[3.75rem] lg:text-[5rem] max-w-200"
                    >
                        Own your purchases Pay your way
                    </h1>

                    {/* Description */}
                    <p
                        className="font-sans font-normal text-neutral-03 leading-7 mx-auto mb-8
              text-base sm:text-[1.125rem] max-w-max-w-167.5"
                    >
                        Shop with KistiPay and pay in 4 simple installments. See your total
                        amount,{" "}
                        <span className="hidden md:inline">
                            <br />
                        </span>
                        due dates, and schedule before you confirm.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
                        <AppStore />
                        <GooglePlay />
                    </div>
                </div>

                {/* Hero Image + Floating Tags */}
                <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-183.75 md:h-100 mx-auto">

                        {/* Main Image */}
                        <Image
                            src="/assets/images/hero-landing.png"
                            alt="Person using mobile payment"
                            width={735}
                            height={448}
                            priority
                            unoptimized
                            className="w-full h-auto block rounded-tl-[2rem] rounded-tr-[2rem] border border-[#BA594D] border-b-0"
                        />

                        {/* Floating Tag — No Late Fees */}
                        <div
                            className="absolute flex items-center gap-2 bg-neutral-01 rounded-2xl z-10 pl-2 pr-4 py-2 sm:py-4 sm:px-5 top-[10%] -left-[5%] lg:-left-[25%] animate-float-0 bg-clip-padding border-4 border-[#1E96F61A]"
                        >
                            <Image src="/assets/icons/no-late-fees.svg" alt="no late fees icon" width={36} height={36} />
                            <span
                                className="font-sans font-semibold whitespace-nowrap text-neutral-04
                  text-base sm:text-2xl"
                            >
                                No late fees
                            </span>
                        </div>

                        {/* Floating Tag — Sharia Compliant */}
                        <div
                            className="absolute flex items-center gap-2 bg-neutral-01 rounded-2xl z-10 pl-2 pr-4 py-2 sm:py-4 sm:px-5 bg-clip-padding border-4 border-[#5B21B61A] top-[70%] sm:top-[35%] -right-[5%] lg:-right-[25%] animate-float-1"
                        >
                            <Image src="/assets/icons/sharia-compliant.svg" alt="sharia compliant icon" width={36} height={36} />
                            <span
                                className="font-sans font-semibold whitespace-nowrap text-neutral-04
                  text-base sm:text-2xl"
                            >
                                Sharia compliant
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Float animation styles */}
            <style>{`
                @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-15px); }
                }
                .animate-float-0 {
                animation: float 3s ease-in-out infinite;
                animation-delay: 0s;
                }
                .animate-float-1 {
                animation: float 3s ease-in-out infinite;
                animation-delay: 1s;
                }
                @media (prefers-reduced-motion: reduce) {
                .animate-float-0,
                .animate-float-1 { animation: none; }
                }
            `}</style>
        </section>
    );
}