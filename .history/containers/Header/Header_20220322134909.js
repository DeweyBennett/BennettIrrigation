import { useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from '../Drawer/drawer-provider';

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
                <div>
                    
                </div>
            </Sticky>
        </DrawerProvider>
    )
}