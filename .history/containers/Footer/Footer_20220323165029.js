import Logo from '../../components/_logo';
import { Link } from '../../components/_links'
import { menuItems, footerNav } from './footer.data';
import Widget from './Widget';


export default function Footer() {
  return (
    <footer className="bg-[#F9FAFC] pt-2">
        <div>
            <div className="grid grid-cols-5 gap-12 w-[90%] mx-auto mb-2 py-6 space-y-4">
            {menuItems.map(({ id, title, items }) => (
                <Widget key={id} title={title} items={items} />
            ))}
            </div>
        </div>
        <div className="border-t"/>
        <div>
            <div className="flex items-center border-t-[#D9E0E7] justify-between px-2 py-4">
                <div className="flex items-center">
                    <Logo className="mr-1" />
                    <span className="text-lg text-[#0F2137] mt-2">
                    Copyright by {new Date().getFullYear()} RedQ, Inc
                    </span>
                </div>

                <ul className="list-none flex justify-start">
                    {footerNav.map(({ path, label }, i) => (
                    <li key={i}>
                        <Link path={path} key={i} label={label} className="text-textSecondary" />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  );
}