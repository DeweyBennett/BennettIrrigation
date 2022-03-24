import { useState } from 'react'
import Header from '../containers/Header/Header'
import { NavLink } from '../components/_links';
import NavbarDrawer from '../containers/Header/Navbar-drawer';
import { navLinks } from '../containers/Header/Header.data';
import Card from '../components/_drawer-card';
import Banner from '../containers/Banner';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header setIsOpen={setIsOpen} />
        <Banner />
      <NavbarDrawer isOpen={isOpen} setIsOpen={setIsOpen} >
        {navLinks.map(({ path, label }, i) => (
          <Card key={i} path={path} label={label} />
        ))}
      </NavbarDrawer>
    </div>
  )
}
