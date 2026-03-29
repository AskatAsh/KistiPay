import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const partners = [
    { name: "Foodi", logo: "/assets/icons/brand-foodi.svg" },
    { name: "Arogga", logo: "/assets/icons/brand-arogga.svg" },
    { name: "SaRa Lifestyle", logo: "/assets/icons/brand-sara.svg" },
    { name: "Walton", logo: "/assets/icons/brand-walton.svg" },
    { name: "Walton", logo: "/assets/icons/brand-walton.svg" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrustedBySection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2
                    className="font-serif font-bold text-neutral-05 text-center leading-[1.15] mx-auto mb-14
            text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem]"
                    style={{ maxWidth: "600px" }}
                >
                    Businesses trust KistiPay to power flexible payments
                </h2>

                {/* Logo Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center
                bg-[#EEF9FB] border border-[#D3F5F8]
                rounded-2xl px-6 py-8
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-md"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={140}
                                height={56}
                                className="w-full h-auto max-h-14 object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}