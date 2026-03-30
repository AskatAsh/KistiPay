import Image from 'next/image';
import Link from 'next/link';

interface IProps {
    link?: string;
    label?: string;
}

const AppStore = ({ link, label }: IProps) => {
    return (
        <Link
            href={link || "#"}
            aria-label={label || "Download on App Store"}
            className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 rounded-sm overflow-hidden"
        >
            <Image
                src="/assets/icons/app-store.svg"
                alt={label || "Download on the App Store"}
                width={119.66407}
                height={40}
                className='h-12 w-auto'
            />
        </Link>
    )
}

export default AppStore