import { useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../Drawer/drawer-provider';
import Logo from '../../components/_logo';
import { NavLink } from '../../components/_links';

export default function Header() {
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
        <DrawerProvider>
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
                        <Logo className="mr-12" />
                        <nav className="flex items-center flex-grow &">
                            {menuItems.map(({ path, label }, i) => (
                                <NavLink key={i} path={path} label={label} />
                            ))}
                        </nav>
                        <NavbarDrawer />
                    </div>
                </header>
            </Sticky>
        </DrawerProvider>
    )
}