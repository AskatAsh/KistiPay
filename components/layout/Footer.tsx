import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LogoIcon } from "../icons";

const navLinks = [
    { label: "About", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Stores", href: "#" },
    { label: "For Business", href: "#" },
];

const legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help Center", href: "#" },
];

const socialLinks = [
    { label: "LinkedIn", href: "#", src: "/assets/icons/LinkedinLogo.svg" },
    { label: "Instagram", href: "#", src: "/assets/icons/InstagramLogo.svg" },
    { label: "Twitter", href: "#", src: "/assets/icons/XLogo.svg" },
];

export default function Footer() {
    return (
        <footer className="bg-neutral-05 text-white pt-24 pb-8">
            <div className="container">

                {/* Top Grid */}
                <div className="flex flex-col md:flex-row md:flex-wrap justify-between lg:justify-end gap-12 flex-1">
                    {/* Column 2 — Navigation */}
                    <div className="max-w-fit lg:max-w-91 w-full">
                        <h3 className="font-sans font-semibold text-base text-[#f2ebdb] mb-0">
                            Navigation
                        </h3>
                        <ul className="mt-0 space-y-0 list-none p-0">
                            {navLinks.map((link) => (
                                <li key={link.label} className="mt-4">
                                    <Link
                                        href={link.href}
                                        className="font-sans font-normal text-2xl sm:text-xl text-white no-underline tracking-tight transition-all duration-200 hover:text-brand-teal hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Legal & Support */}
                    <div className="max-w-fit lg:max-w-91 w-full">
                        <h3 className="font-sans font-semibold text-base text-[#f2ebdb] mb-0">
                            Legal & Support
                        </h3>
                        <ul className="mt-0 space-y-0 list-none p-0">
                            {legalLinks.map((link) => (
                                <li key={link.label} className="mt-4">
                                    <Link
                                        href={link.href}
                                        className="font-sans font-normal text-2xl sm:text-xl text-white no-underline tracking-tight transition-all duration-200 hover:text-brand-teal hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Follow Us */}
                    <div className="md:flex md:justify-end">
                        <div className="text-start md:text-end">
                            <h3 className="font-sans font-semibold text-base text-[#f2ebdb]">
                                Follow Us On
                            </h3>
                            <div className="flex items-center md:justify-end gap-6 mt-6">
                                {socialLinks.map(({ label, href, src }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="text-white transition-colors duration-200 hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal rounded"
                                    >
                                        <Image width={32} height={32} src={src} alt={label} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="mt-24 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">

                    {/* Logo */}
                    <div className="h-24 sm:h-28 flex items-end">
                        {/* <Image
                            src="/assets/icons/logo_large.svg"
                            alt="KistiPay logo"
                            width={482}
                            height={112}
                            className="h-full w-auto object-contain"
                        /> */}
                        <LogoIcon className="h-16 md:h-20 lg:h-28" />
                    </div>

                    {/* Back to Top + Copyright */}
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        <Link
                            href="#"
                            className="flex items-center gap-2 font-sans font-normal text-base text-white no-underline transition-colors duration-200 hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal rounded group"
                        >
                            Back to Top
                            <ArrowUp
                                size={16}
                                className="transition-transform duration-200 group-hover:-translate-y-1"
                            />
                        </Link>
                        <p className="font-sans font-normal text-base text-white mb-0">
                            © 2026 KistiPay. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}