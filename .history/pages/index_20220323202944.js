import { useState } from 'react'
import Header from '../containers/Header/Header'
import NavbarDrawer from '../containers/Header/Navbar-drawer';
import { navLinks } from '../containers/Header/Header.data';
import Card from '../components/_drawer-card';
import Banner from '../containers/Banner';
import ServiceFeatures from '../containers/Service-Features';
import CustomerSupport from '../containers/customer-support';
import Pricing from '../containers/Pricing';
import Support from '../containers/Support';
import Footer from '../containers/Footer/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header setIsOpen={setIsOpen} />
      <Banner />
      <ServiceFeatures />
      <CustomerSupport />
      {/* <Pricing /> */}
      {/* <Support /> */}
      <Footer />
      <NavbarDrawer isOpen={isOpen} setIsOpen={setIsOpen} >
        {navLinks.map(({ path, label }, i) => (
          <Card key={i} path={path} label={label} />
        ))}
      </NavbarDrawer>
    </div>
  )
}
