import Head from 'next/head'
import Image from 'next/image'
import Header from '../containers/Header/Header'
import { NavLink } from '../components/_links';
import NavbarDrawer from '../containers/Header/Navbar-drawer';
import { navLinks } from '../containers/';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header setIsOpen={setIsOpen} />

      <NavbarDrawer isOpen={isOpen} setIsOpen={setIsOpen} >
        {navLinks.map(({ path, label }, i) => (
          <NavLink key={i} path={path} label={label} />
        ))}
      </NavbarDrawer>
    </div>
  )
}
