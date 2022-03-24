import React from "react";

export default function NavbarDrawer({ children, isOpen, setIsOpen }) {
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
                <div className="flex items-center justify-center flex-shrink-0 cursor-pointer md:hidden">
                    <HiMenu className="w-12 h-12 text-heading hover:text-primary cursor-pointer" />
                </div>
            }
            open={state?.isOpen}
            toggleHandler={toggleHandler}
            closeButton={
                <button className="flex items-center bg-transparent border-none cursor-pointer">
                    <Image src={close} alt="close" />
                </button>
            }
            maskStyle={styles.mask}
            drawerStyle={styles.drawer}
            closeBtnStyle={styles.close}
            >
            <div className="flex flex-col w-full h-full pt-30">
                <Logo className="ml-6 mb-9 mr-12" />
                <ul className="list-none m-0 p-0">
                {navLinks.map(({ path, label }, i) => (
                    <li key={i}>
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
                    </li>
                ))}
                </ul>
                <button className="btn-primary">
                Donate Now
                </button>
            </div>
        </Drawer>
    )
}

const styles = {
    handler: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      width: '26px',
      cursor: 'pointer',
      '@media screen and (min-width: 1024px)': {
        display: 'none',
      },
    },
    drawer: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      outline: 0,
    },
    mask: {
      opacity: 0.2,
    },
    close: {
      position: 'absolute',
      top: 35,
      right: 30,
      zIndex: '1',
    },
    closeButton: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      p: 0,
    },
    wrapper: {
      height: '100%',
      paddingTop: 30,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    logo: {
      ml: 6,
      mb: 9,
      mr: 12,
    },
    navbar: {
      listStyle: 'none',
      m: 0,
      p: 0,
      'li > a': {
        backgroundColor: 'transparent',
        borderTop: (t) => `1px solid ${t.colors.borderColor}`,
        color: 'heading',
        display: 'flex',
        alignItems: 'center',
        minHeight: 44,
        marginLeft: 6,
        position: 'relative',
        transition: 'all 0.3s ease-in-out 0s',
      },
      'li:last-child > a': {
        borderBottom: (t) => `1px solid ${t.colors.borderColor}`,
      },
      '.active': {
        color: 'primary',
      },
    },
    donateNow: {
      fontSize: 1,
      minHeight: 45,
      margin: 'auto 30px 40px',
    },
  };