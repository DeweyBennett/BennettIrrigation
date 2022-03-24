import Image from 'next/image';
import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { DrawerContext } from '../../containers/Drawer/drawer-context';
import Drawer from '../../components/_drawer';
import Logo from '../../components/_logo';
import close from '../../public/assets/images/icons/close.png';
import menuItems from './Header.data';

export default function NavbarDrawer() {
    const { state, dispatch } = useContext(DrawerContext);

    // Toggle drawer
    const toggleHandler = React.useCallback(() => {
        dispatch({
        type: 'TOGGLE',
        });
    }, [dispatch]);

    return (
        <Drawer
            width="340px"
            placement="right"
            drawerHandler={
                <div className="flex items-center justify-center flex-shrink-0 w-[26px] cursor-pointer lg:hidden">
                    <button>Button</button>
                </div>
            }
            open={state?.isOpen}
            toggleHandler={toggleHandler}
            closeButton={
                <button className="flex items-center bg-transparent border-none cursor-pointer">
                    <Image src={close} alt="close" />
                </button>
            }
            maskStyle={className="opa "}
            drawerStyle={styles.drawer}
            closeBtnStyle={styles.close}
            >
            <div sx={styles.wrapper}>
                <Logo sx={styles.logo} />
                <div as="ul" sx={styles.navbar}>
                {menuItems.map(({ path, label }, i) => (
                    <div as="li" key={i}>
                    <Link
                        activeClass="active"
                        to={path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        {label}
                    </Link>
                    </div>
                ))}
                </div>
                <button variant="primary" sx={styles.donateNow}>
                Donate Now
                </button>
            </div>
        </Drawer>
    )
}