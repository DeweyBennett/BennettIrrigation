import Image from "next/image";
import { LearnMore } from "../_links";
import { SiProtools } from "react-icons/si";
import { FaToolbox } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";


export default function Feature({ data, ...props }) {
    console.log(data)
    return (
        <div className="px-11 py-14 text-left transition duration-300 ease-in cursor-pointer md:hover:bg-white md:hover:border-white md:hover:shadow-[rgb(59,90,136)] md:hover:-translate-x-1 md:hover:-translate-y-1">
            <div className="inline-flex items-center min-w-[70px] md-6">
                {data.icon === 'icon1' &&
                    <SiProtools size={40} />
                }
                {data.icon === 'icon2' && 
                    <BsSnow size={40} />
                }
                {data.icon === 'icon3' && 
                    <BsSnow size={40} />
                }
                {data.icon === 'icon4' && 
                    <FaToolbox size={40} />
                }
                {data.icon === 'icon5' && 
                    <BsSnow size={40} />
                }
                {data.icon === 'icon6' && 
                    <BsSnow size={40} />
                }
            </div>
            <div>
                <h4 className="text-xl font-bold text-heading md-2">{data?.title}</h4>
                <p className="text-lg text-headingSecondary">{data?.description}</p>
                {data?.path && <LearnMore path={data?.path} />}
            </div>
        </div>
      );
}