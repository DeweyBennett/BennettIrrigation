import { useRouter } from 'next/router';
import { Link } from './link';
import LogoSvg from './icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
    const router = useRouter();

    return (
        <a onClick={() => router.push("/")} sx={styles.logo} {...props}>
            <LogoSvg />
        </a>
    );
}