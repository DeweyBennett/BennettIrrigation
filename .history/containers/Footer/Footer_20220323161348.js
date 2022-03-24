import Logo from '../../components/_logo';
import { Link } from '../../components/_links'
import FooterWidget from 'components/footer/widget';
import { menuItems, footerNav } from './footer.data';


export default function Footer() {
  return (
    <footer className="bg-[#F9FAFC] pt-2">
        <div>
            <div className="grid grid-cols-5 gap-12 mb-2">
            {menuItems.map(({ id, title, items }) => (
                <FooterWidget key={id} title={title} items={items} />
            ))}
            </div>
        </div>
        <div>
            <div className="flex items-center border-t-[#D9E0E7] justify-between">
                <div className="flex items-center">
                    <Logo className="mr-1" />
                    <span className="text-lg text-[#0F2137] mt-2">
                    Copyright by {new Date().getFullYear()} RedQ, Inc
                    </span>
                </div>

                <ul className="list-none flex justify-start">
                    {footerNav.map(({ path, label }, i) => (
                    <li key={i}>
                        <Link path={path} key={i} label={label} className="text-textSecondary decoration" />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  );
}