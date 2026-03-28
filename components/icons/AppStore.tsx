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
            className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 rounded-md overflow-hidden"
        >
            <Image
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                alt={label || "Download on the App Store"}
                width={167}
                height={48}
                className="h-12 w-auto"
                unoptimized
            />
        </Link>
    )
}

export default AppStore