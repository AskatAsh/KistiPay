import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentProps } from 'react';

interface CTALinkButtonProps extends Omit<ComponentProps<typeof Link>, 'className'> {
    children: React.ReactNode;
    className?: string;
}

export function CTALinkButton({ children, className = '', ...props }: CTALinkButtonProps) {
    return (
        <Link
            className={cn("inline-flex items-center justify-center gap-2 font-sans font-semibold text-white text-base bg-brand-teal hover:bg-brand-teal/90 px-6 py-4 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-teal/25 active:translate-y-0 active:shadow-none", className)}
            {...props}
        >
            {children}
        </Link>
    );
}