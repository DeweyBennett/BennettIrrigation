import { useRouter } from 'next/router';
import { Link } from './link';
import LogoSvg from './icons/logo';

export default function Logo({ isSticky, footer, ...props }) {


    return (
        <Link onClick={() => } sx={styles.logo} {...props}>
        <LogoSvg />
        </Link>
    );
}