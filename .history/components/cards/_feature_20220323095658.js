import Image from "next/image";
import { LearnMore } from "../_links";


export default function Feature({ data, ...props }) {

    return (
        <div sx={styles.feature} {...props}>
            <div>
                <Image src={data?.icon} alt={data?.title} />
            </div>
            <div>
                <h4>{data?.title}</h4>
                <p>{data?.description}</p>
                {data?.path && <LearnMore path={data?.path} />}
            </div>
        </div>
      );
}