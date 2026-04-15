import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const partners = [
    { name: "Foodi", logo: "/assets/icons/brand-foodi.svg" },
    { name: "Arogga", logo: "/assets/icons/brand-arogga.svg" },
    { name: "SaRa Lifestyle", logo: "/assets/icons/brand-sara.svg" },
    { name: "Walton", logo: "/assets/icons/brand-walton.svg" },
    // { name: "Walton", logo: "/assets/icons/brand-walton.svg" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrustedBySection() {
    return (
        <section className="section-spacing">
            <div className="container">

                {/* Heading */}
                <SectionHeader
                    title="Businesses trust KistiPay to power flexible payments"
                    titleStyles="font-semibold text-neutral-04 text-center text-3xl lg:text-[3rem] leading-[1.1] mt-0"
                    wrapperStyles="mb-10 sm:mb-16 max-w-[770px] mx-auto" />

                {/* Logo Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center
                bg-[#EEF9FB] border border-[#D3F5F8]
                rounded-2xl px-3 py-2
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:shadow-md h-30"
                            style={{
                                background: "linear-gradient(104.8deg, rgba(211, 245, 248, 0.4) -72.03%, #FFFFFF 101.74%)"
                            }}
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                height={0}
                                width={0}
                                className="object-contain max-w-35 w-full h-auto"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}