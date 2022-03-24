import Logo from 'components/logo';
import { Link } from 'components/link';
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
                    <Text as="span">
                    Copyright by {new Date().getFullYear()} RedQ, Inc
                    </Text>
                </div>

                <Box as="ul" sx={styles.footerNav}>
                    {footerNav.map(({ path, label }, i) => (
                    <li key={i}>
                        <Link path={path} key={i} label={label} variant="footer" />
                    </li>
                    ))}
                </Box>
            </div>
        </div>
    </footer>
  );
}