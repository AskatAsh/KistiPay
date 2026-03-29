"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoIcon } from "../icons";

const navLinks = [
    { label: "Personal", href: "#personal" },
    { label: "Business", href: "/business" },
    { label: "Company", href: "#company" },
    { label: "Support", href: "#support" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Sticky scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header
            id="header"
            className={cn(
                // Base styles
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                // Transparent when at top
                !scrolled && "bg-transparent py-5",
                // White + shadow when scrolled
                scrolled && "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3"
            )}
        >
            <nav className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal rounded"
                    >
                        <LogoIcon className={cn(
                            "w-auto transition-all duration-300",
                            scrolled ? "h-6" : "h-8 md:h-10"
                        )} />
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative px-3 py-1 text-base font-sans transition-colors duration-300 rounded",
                                        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal",
                                        // Default state
                                        pathname !== link.href && "font-normal text-neutral-03 hover:text-brand-teal",
                                        // Active state
                                        pathname === link.href && "font-semibold text-neutral-04"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center">
                        <Button
                            asChild
                            className={cn(
                                "font-semibold border-0 px-8 py-2 rounded-2xl transition-all duration-300 h-13",
                                "bg-brand-teal text-white text-base",
                                "hover:bg-brand-teal/90 hover:-translate-y-0.5 hover:shadow",
                            )}
                        >
                            <Link href="#download">Download App</Link>
                        </Button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className={cn(
                            "lg:hidden p-2 rounded-md transition-colors duration-200",
                            "text-neutral-03 hover:text-brand-teal",
                            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
                        )}
                    >
                        {menuOpen ? (
                            <X size={24} strokeWidth={2} />
                        ) : (
                            <Menu size={24} strokeWidth={2} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={cn(
                        "lg:hidden transition-all duration-300 ease-in-out",
                        menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.10)]">
                        <ul className="flex flex-col mb-6">
                            {navLinks.map((link, index) => (
                                <li
                                    key={link.label}
                                    className={cn(
                                        "py-2",
                                        index < navLinks.length - 1 && "border-b border-neutral-01"
                                    )}
                                    style={{ borderColor: "#f5f5f5" }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => {
                                            setMenuOpen(false);
                                        }}
                                        className={cn(
                                            "block py-3 text-base font-sans transition-colors duration-200",
                                            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal rounded",
                                            pathname !== link.href
                                                ? "font-normal text-neutral-03 hover:text-brand-teal"
                                                : "font-semibold text-neutral-04"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile CTA */}
                        <Button
                            asChild
                            className={cn(
                                "w-full font-sans font-medium py-3 rounded-lg transition-all duration-300 h-13",
                                "bg-brand-teal text-white hover:bg-brand-teal/90"
                            )}
                        >
                            <Link href="#download" onClick={() => setMenuOpen(false)}>
                                Download App
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}