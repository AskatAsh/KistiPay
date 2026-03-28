import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeProps = {
    children: ReactNode;
    className?: string;
};

export default function CustomBadge({ children, className }: BadgeProps) {
    return (
        <span
            className={cn(
                // Layout
                "inline-flex items-center justify-center w-fit h-8",
                // Spacing
                "px-4 py-3",
                // Typography
                "font-sans font-semibold text-xs tracking-[0.4px] uppercase",
                // Colors — using brand-teal family as closest match to brand-color-03
                "text-brand-teal border-2 border-brand-teal/20",
                // Shape
                "rounded-[1.5rem]",
                // Custom overrides
                className
            )}
        >
            {children}
        </span>
    );
}