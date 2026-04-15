import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const integrations = [
    {
        name: "Shopify",
        logo: "/assets/icons/shopify.svg",
        bg: "#F3F3F3",
    },
    {
        name: "WooCommerce",
        logo: "/assets/icons/woocommerce.svg",
        bg: "#F3F3F3",
    },
    {
        name: "Magento",
        logo: "/assets/icons/magento.svg",
        bg: "#F3F3F3",
    },
    {
        name: "POS",
        logo: "/assets/icons/pos.svg",
        bg: "#F3F3F3",
    },
    {
        name: "API",
        logo: "/assets/icons/api.svg",
        bg: "#EEF3FB",
    },
    {
        name: "More...",
        logo: "/assets/icons/more.svg",
        bg: "#F3F3F3",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function EasyIntegrationSection() {
    return (
        <section
            className="section-spacing"
            style={{
                background: "linear-gradient(102.31deg, rgba(241, 221, 218, 0.4) 0%, rgba(211, 245, 248, 0.2) 99.51%)"
            }}
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* ── Left: header ── */}
                    <SectionHeader
                        title="Easy Integration"
                        titleStyles="text-neutral-04 mt-0"
                        subtitle="Add KistiPay to your store with simple platform or API
                            integration."
                        wrapperStyles="mb-0 sm:mb-0 items-start text-left" />

                    {/* ── Right: Integration Cards Grid ── */}
                    <div className="w-full lg:w-[62%] order-1 lg:order-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                            {integrations.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center bg-white/80 rounded-2xl px-3 py-10 border border-white/60 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md hover:bg-white aspect-176/204"
                                >
                                    {/* Icon circle */}
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        width={82}
                                        height={82}
                                        className="w-auto h-auto object-contain mb-4"
                                    />

                                    {/* Label */}
                                    <span className="font-medium text-neutral-02 text-xl text-center">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}