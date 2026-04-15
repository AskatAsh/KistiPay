"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoIcon } from "../icons";

const navLinks = [
    { label: "Personal", href: "/personal" },
    { label: "Business", href: "/business" },
    { label: "Company", href: "#company" },
    { label: "Support", href: "#support" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const pathname = usePathname();

    // Sticky scroll effect
    useEffect(() => {
        let ticking = false;

        const checkScroll = () => {
            setScrolled(window.scrollY > 30);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(checkScroll);
                ticking = true;
            }
        };

        checkScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            id="header"
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                !scrolled && "bg-transparent py-5",
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
                        <LogoIcon className="transition-all duration-300 h-8 md:h-10 w-full" />
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
                                        pathname !== link.href && "font-normal text-neutral-03 hover:text-brand-teal",
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

                    {/* Mobile Menu Trigger */}
                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        onClick={() => setSheetOpen(true)}
                        className={cn(
                            "lg:hidden p-2 rounded-md transition-colors duration-200",
                            "text-neutral-03 hover:text-brand-teal",
                            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
                        )}
                    >
                        <Menu size={24} strokeWidth={2} />
                    </button>
                </div>
            </nav>

            {/* Mobile Sheet Menu */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent
                    side="top"
                    className="w-full pt-6 px-6 pb-8"
                    showCloseButton={false}
                >
                    <SheetHeader className="flex flex-row items-center justify-between mb-4 p-0">
                        <Link
                            href="/"
                            onClick={() => setSheetOpen(false)}
                            className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal rounded"
                        >
                            <LogoIcon className="h-8 w-auto" />
                        </Link>

                        <SheetClose className={cn(
                            "p-2 rounded-md transition-colors duration-200",
                            "text-neutral-03 hover:text-brand-teal",
                            "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-teal"
                        )}>
                            <X size={24} strokeWidth={2} />
                            <span className="sr-only">Close menu</span>
                        </SheetClose>
                    </SheetHeader>

                    {/* Navigation Links */}
                    <nav className="mb-8">
                        <ul className="flex flex-col">
                            {navLinks.map((link, index) => (
                                <li
                                    key={link.label}
                                    className={cn(
                                        "py-2",
                                        index < navLinks.length - 1 && "border-b border-neutral-02/20"
                                    )}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setSheetOpen(false)}
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
                    </nav>

                    {/* Mobile CTA */}
                    <Button
                        asChild
                        className={cn(
                            "w-full font-sans font-medium py-3 rounded-lg transition-all duration-300 h-13",
                            "bg-brand-teal text-white hover:bg-brand-teal/90"
                        )}
                    >
                        <Link href="#download" onClick={() => setSheetOpen(false)}>
                            Download App
                        </Link>
                    </Button>
                </SheetContent>
            </Sheet>
        </header>
    );
}