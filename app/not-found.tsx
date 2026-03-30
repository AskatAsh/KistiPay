import { CTALinkButton } from '@/components/ui/CTALinkButton';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-brand-teal/10 to-brand-gold/10">
            <div className="max-w-md w-full text-center">
                {/* 404 */}
                <h1 className="text-6xl md:text-8xl font-bold text-neutral-04 mb-4">
                    404
                </h1>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-04 mb-3">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-neutral-03 mb-8 text-base md:text-lg">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                {/* Back to Home Button */}
                <CTALinkButton href="/">
                    Back to Home
                </CTALinkButton>
            </div>
        </div>
    );
}