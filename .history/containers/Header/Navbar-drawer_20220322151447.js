import Image from 'next/image';
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
        <Drawer
      width="340px"
      placement="right"
      drawerHandler={
        <div sx={styles.handler}>
            <button>Button</button>
        </div>
      }
      open={state?.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <button sx={styles.closeButton}>
          <Image src={close} alt="close" />
        </button>
      }
      maskStyle={styles.mask}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <div sx={styles.wrapper}>
        <Logo sx={styles.logo} />
        <div as="ul" sx={styles.navbar}>
          {menuItems.map(({ path, label }, i) => (
            <Box as="li" key={i}>
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
            </Box>
          ))}
        </div>
        <Button variant="primary" sx={styles.donateNow}>
          Donate Now
        </Button>
      </div>
    </Drawer>
    )
}