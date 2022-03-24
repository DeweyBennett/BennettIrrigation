

export default function Widget({ title, items }) {

    return(
        <Box sx={styles.footerWidget}>
        <Heading as="h4">{title}</Heading>
        <ul>
            {items.map(({ path, label, icon }, i) => (
            <li key={i}>
                {icon && <Image src={icon} alt={label} />}
                <Link path={path} key={i} label={label} variant="footer" />
            </li>
            ))}
        </ul>
        </Box>
    )
}