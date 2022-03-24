import Image from "next/image";
import { LearnMore } from "../_links";

export default function Feature({ data, ...props }) {

    return (
        <div className="px-11 py-14 text-left transition duration-300 ease-in cursor-pointer md:bg-white md:border-white md:shadow-[rgb(59,90,136)] md:-translate-x-1 md:-translate-y-1">
            <div className="inline-flex items-center min-w-[70px] md-6">
                <Image src={data?.icon} alt={data?.title} />
            </div>
            <div>
                <h4 className="text-xl font-bold text-heading md-2">{data?.title}</h4>
                <p className="text-lg text-headingSecondary">{data?.description}</p>
                {data?.path && <LearnMore path={data?.path} />}
            </div>
        </div>
      );
}