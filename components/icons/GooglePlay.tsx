import Image from "next/image";
import Link from "next/link";

interface IProps {
    link?: string;
    label?: string;
}

const GooglePlay = ({ link, label }: IProps) => {
    return (
        <Link
            href={link || "#"}
            aria-label={label || "Get it on Google Play"}
            className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 rounded-md overflow-hidden"
        >
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt={label || "Get it on Google Play"}
                width={167}
                height={48}
                className="h-12 w-auto"
                unoptimized
            />
        </Link>
    )
}

export default GooglePlay