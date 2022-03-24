import { useRouter } from 'next/router';
import { Link } from './link';
import LogoSvg from './icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
    const router = useRouter();

    return (
        <Link onClick={() => router.push("/")} className="inline-flex items-center cursor-pointer" {...props}>
            <LogoSvg className="" />
        </Link>
    );
}