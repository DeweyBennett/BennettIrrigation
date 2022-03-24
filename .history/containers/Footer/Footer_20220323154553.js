import Logo from '../../components/_logo';
import { Link } from '../../components/'
import FooterWidget from 'components/footer/widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';


export default function Footer() {
  return (
    <footer sx={styles.footer}>
        <div>
            <div sx={styles.footerTopInner}>
            {menuItems.map(({ id, title, items }) => (
                <FooterWidget key={id} title={title} items={items} />
            ))}
            </div>
        </div>
        <div>
            <div sx={styles.footerInner}>
                <div sx={styles.copyright}>
                    <Logo sx={styles.logo} />
                    <span>
                    Copyright by {new Date().getFullYear()} RedQ, Inc
                    </span>
                </div>

                <ul sx={styles.footerNav}>
                    {footerNav.map(({ path, label }, i) => (
                    <li key={i}>
                        <Link path={path} key={i} label={label} variant="footer" />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  );
}