import { useRouter } from 'next/router';
import { Link } from './_links';
import LogoSvg from './icons/_logo';

export default function Logo({ isSticky, footer, ...props }) {
    const router = useRouter();

    return (
        <Link path="/" className="inline-flex items-center cursor-pointer" {...props}>
            <LogoSvg className="h-auto w-full" />
        </Link>
    );
}