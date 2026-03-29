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
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{
                background:
                    "linear-gradient(135deg, #f5f0eb 0%, #f0ede8 40%, #eaf0ee 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* ── Left: Text ── */}
                    <div className="w-full lg:w-[38%] order-2 lg:order-1">
                        <h2
                            className="font-serif font-bold text-neutral-05 leading-[1.1] mb-5
                text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem]"
                        >
                            Easy Integration
                        </h2>
                        <p className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem] leading-relaxed">
                            Add KistiPay to your store with simple platform or API
                            integration.
                        </p>
                    </div>

                    {/* ── Right: Integration Cards Grid ── */}
                    <div className="w-full lg:w-[62%] order-1 lg:order-2">
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            {integrations.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-between
                    bg-white/80 rounded-2xl
                    px-4 py-6 sm:px-6 sm:py-8
                    border border-white/60
                    transition-all duration-300 ease-in-out
                    hover:-translate-y-1 hover:shadow-md hover:bg-white"
                                >
                                    {/* Icon circle */}
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        width={82}
                                        height={82}
                                        className="w-10 h-10 sm:w-auto sm:h-auto object-contain mb-4"
                                    />

                                    {/* Label */}
                                    <span className="font-sans font-normal text-neutral-03 text-sm sm:text-base text-center">
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