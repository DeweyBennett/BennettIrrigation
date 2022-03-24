import { useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'drawer/drawer-provider';

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
        <div>

        </div>
    )
}