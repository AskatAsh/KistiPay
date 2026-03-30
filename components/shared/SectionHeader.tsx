import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import CustomBadge from '../ui/customBadge';

interface IProps {
    title: string;
    subtitle?: string;
    titleStyles?: string;
    subtitleStyles?: string;
    badgeText?: string;
    badgeStyles?: string;
    wrapperStyles?: string;
    children?: ReactNode;
}

const SectionHeader = ({ title, subtitle, titleStyles, subtitleStyles, badgeText, badgeStyles, wrapperStyles, children }: IProps) => {
    return (
        <div className={cn("flex flex-col items-center text-center mb-12 sm:mb-20", wrapperStyles)}>
            {badgeText && <CustomBadge className={badgeStyles}>{badgeText}</CustomBadge>}

            <h2
                className={
                    cn("font-serif font-bold text-neutral-05 mt-2 mb-4 text-[2.25rem] lg:text-[3.875rem] leading-[1.1]", titleStyles)}
            >
                {title}
            </h2>

            {subtitle &&
                <p
                    className={cn("font-normal text-neutral-03 text-base sm:text-lg leading-7", subtitleStyles)}
                >
                    {subtitle}
                </p>}

            {children}
        </div>
    )
}

export default SectionHeader