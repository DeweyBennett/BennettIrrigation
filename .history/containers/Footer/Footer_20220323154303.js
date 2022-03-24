import Logo from 'components/logo';
import { Link } from 'components/link';
import FooterWidget from 'components/footer/widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
        <div>
            <Box sx={styles.footerTopInner}>
            {menuItems.map(({ id, title, items }) => (
                <FooterWidget key={id} title={title} items={items} />
            ))}
            </Box>
        </div>
        <div>
            <Box sx={styles.footerInner}>
            <Box sx={styles.copyright}>
                <Logo sx={styles.logo} />
                <Text as="span">
                Copyright by {new Date().getFullYear()} RedQ, Inc
                </Text>
            </Box>

            <Box as="ul" sx={styles.footerNav}>
                {footerNav.map(({ path, label }, i) => (
                <li key={i}>
                    <Link path={path} key={i} label={label} variant="footer" />
                </li>
                ))}
            </Box>
            </Box>
        </div>
    </footer>
  );
}