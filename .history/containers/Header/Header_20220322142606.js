import { useState } from 'react';
import Sticky from 'react-stickynode';
import Logo from '../../components/_logo';1

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
                    className={state.isSticky ? 'is-sticky' : ''}
                >
                    <div>
                        <Logo />

                    </div>
                </header>
            </Sticky>
        </DrawerProvider>
    )
}