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
            className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 rounded-sm overflow-hidden"
        >
            <Image
                src="/assets/icons/google-play.svg"
                alt={label || "Get it on Google Play"}
                width={180}
                height={53.333}
                className="h-12 w-auto"
            />
        </Link>
    )
}

export default GooglePlay