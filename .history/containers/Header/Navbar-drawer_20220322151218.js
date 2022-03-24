import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { DrawerContext } from 'contexts/drawer/drawer-context';
import Drawer from 'components/drawer';
import Logo from 'components/logo';
import menuItems from './header.data';
import close from 'assets/images/icons/close.png';

export default function NavbarDrawer() {
    const { state, dispatch } = useContext(DrawerContext);

    // Toggle drawer
    const toggleHandler = React.useCallback(() => {
        dispatch({
        type: 'TOGGLE',
        });
    }, [dispatch]);

    return (
        <></>
    )
}