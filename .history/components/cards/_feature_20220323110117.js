import Image from "next/image";
import { LearnMore } from "../_links";

export default function Feature({ data, ...props }) {

    return (
        <div className="" {...props}>
            <div className="">
                <Image src={data?.icon} alt={data?.title} />
            </div>
            <div>
                <h4 className="">{data?.title}</h4>
                <p className="text-lg text-headingSecondary">{data?.description}</p>
                {data?.path && <LearnMore path={data?.path} />}
            </div>
        </div>
      );
}