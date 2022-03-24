import Image from "next/image";


export default function Widget({ title, items }) {

    return(
        <div sx={styles.footerWidget}>
            <h4>{title}</h4>
            <ul>
                {items.map(({ path, label, icon }, i) => (
                <li key={i}>
                    {icon && <Image src={icon} alt={label} />}
                    <Link path={path} key={i} label={label} variant="footer" />
                </li>
                ))}
            </ul>
        </div>
    )
}