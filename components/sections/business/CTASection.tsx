import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-12 sm:py-25 px-4 sm:px-6 lg:px-8">
            <div className="container">

                {/* CTA Card */}
                <div
                    className="relative overflow-hidden rounded-3xl px-6 py-10 sm:p-16 text-center"
                    style={{
                        backgroundImage: "url('/assets/images/flexible-payments-bg.svg')",
                        backgroundColor: "#D3F5F8",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 105%",
                        backgroundPosition: "0% 50%"
                    }}
                >
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">

                        {/* Heading */}
                        <h2
                            className="font-serif font-bold text-neutral-05 leading-[1.1] mb-5
                text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem]"
                        >
                            Start offering flexible payments today
                        </h2>

                        {/* Subtitle */}
                        <p className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem] leading-relaxed mb-8">
                            Join businesses that are growing their sales by giving customers
                            more ways to pay.
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
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-brand-teal"
                        >
                            Join KistiPay Business
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}