import { useState } from 'react';
import Sticky from 'react-stickynode';
import { HiMenu } from "react-icons/hi";
import Logo from '../../components/_logo';
import { NavLink } from '../../components/_links';
import NavbarDrawer from './Navbar-drawer';
import { navLinks } from './Header.data';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [state, setState] = useState({
        isMobileMenu: false,
        isSticky: false,
    });

    const handleStateChange = (status) => {
        status.status === Sticky.STATUS_FIXED
        ? setState({ ...state, isSticky: true })
        : setState({ ...state, isSticky: false });
    };

    return (
        <Sticky
            enabled={true}
            top={0}
            activeClass="is-sticky"
            innerZ={100}
            onStateChange={handleStateChange}
        >
            <header
                className={state.isSticky ? 'bg-white shadow-md shadow-[rgb(59,90,136)] py-3' : 'fixed left-0 right-0 py-5 bg-transparent transition-all duration-300 ease-in-out'}
            >
                <div className="flex items-center justify-between">
                    <Logo className="mx-12" />
                    <nav className="hidden md:flex flex-grow space-x-6">
                        {navLinks.map(({ path, label }, i) => (
                                <NavLink key={i} path={path} label={label} />
                        ))}
                    </nav>
                    <HiMenu onClick={() => setIsOpen(true)} className="w-14 h-14 text-heading hover:text-primary cursor-pointer md:hidden" />
                    <NavbarDrawer isOpen={isOpen} setIsOpen={setIsOpen} >
                        {navLinks.map(({ path, label }, i) => (
                            <NavLink key={i} path={path} label={label} />
                        ))}
                    </NavbarDrawer>
                </div>
            </header>
        </Sticky>
    )
}