import React from "react";

export default function NavbarDrawer({ children, isOpen, setIsOpen }) {

    return (
        <main
        className={
            " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
            (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
        >
        <section
            className={
            " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
            }
        >
            <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <header className="p-4 font-bold text-lg">Header</header>
            {children}
            </article>
        </section>
        <section
            className=" w-screen h-full cursor-pointer "
            onClick={() => {
            setIsOpen(false);
            }}
        ></section>
        </main>
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