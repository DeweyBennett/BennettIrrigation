import Image from "next/image";
import { LearnMore } from "../_links";

export default function Feature({ data, ...props }) {

    return (
        <div className="px-11 py-14 text-left transition duration-300 ease-in md:bg-white md:border-white md:shadow-[rgb(59,90,136)] md: {...props}>
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