import CustomBadge from "@/components/ui/customBadge";
import Image from "next/image";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const brandsData = [
    {
        title: "Foodi",
        brandImage: "/assets/icons/brand-foodi.svg",
        backgroundImage: "/assets/images/foodi-background.jpg",
    },
    {
        title: "Arogga",
        brandImage: "/assets/icons/brand-arogga.svg",
        backgroundImage: "/assets/images/arogga-background.png",
    },
    {
        title: "SaRa",
        brandImage: "/assets/icons/brand-sara.svg",
        backgroundImage: "/assets/images/sara-background.png",
    },
    {
        title: "Walton",
        brandImage: "/assets/icons/brand-walton.svg",
        backgroundImage: "/assets/images/walton-background.png",
    },
];

// ─── Brand Card ───────────────────────────────────────────────────────────────

function BrandCard({
    title,
    brandImage,
    backgroundImage,
}: (typeof brandsData)[number]) {
    return (
        <div
            className="relative rounded-2xl overflow-hidden w-full
        transition-transform duration-300 ease-in-out hover:-translate-y-1"
            style={{ aspectRatio: "0.8 / 1" }}
        >
            {/* Background image */}
            <Image
                src={backgroundImage}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Centered brand logo circle */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                    className="w-24 h-24 rounded-full flex items-center justify-center p-2.5"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                >
                    <Image
                        src={brandImage}
                        alt={`${title} logo`}
                        width={70}
                        height={32}
                        className="object-contain w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function BrandsSection() {
    return (
        <section className="section-spacing">
            <div className="container">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <CustomBadge>Trusted Partner</CustomBadge>

                    <h2
                        className="font-serif font-bold text-neutral-05 leading-[1.1] mt-4 mb-4
              text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem]"
                    >
                        Shop brands you love
                    </h2>

                    <p className="font-sans font-normal text-neutral-03 text-base sm:text-[1.0625rem] leading-relaxed mb-4">
                        Discover trusted partners across multiple categories.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="#brands"
                        className="inline-flex items-center justify-center
              font-sans font-medium text-base text-white
              bg-brand-teal hover:bg-brand-teal/90
              h-[42px] px-4 rounded-xl mt-2
              transition-all duration-300 ease-in-out
              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-teal/25
              focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-brand-teal"
                    >
                        Discover Brands
                    </Link>
                </div>

                {/* Brand Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {brandsData.map((brand) => (
                        <BrandCard key={brand.title} {...brand} />
                    ))}
                </div>

            </div>
        </section>
    );
}