import Head from 'next/head'
import Image from 'next/image'
import Header from '../containers/Header/Header'
import { NavLink } from '../components/_links';
import NavbarDrawer from '../containers/Header/Navbar-drawer';
import { navLinks } from '../Header.data';

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header />

      <NavbarDrawer isOpen={isOpen} setIsOpen={setIsOpen} >
        {navLinks.map(({ path, label }, i) => (
          <NavLink key={i} path={path} label={label} />
        ))}
      </NavbarDrawer>
    </div>
  )
}
