import Image from "next/image";
import { Link } from "../../components/_links";


export default function Widget({ title, items }) {

    return(
        <div>
            <h4 className="text-heading text-2">{title}</h4>
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