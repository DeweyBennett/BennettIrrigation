import Image from "next/image";
import { LearnMore } from "../_links";
import { SiProtools, SiSpring } from "react-icons/si";
import { FaToolbox } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { TiLightbulb } from "react-icons/ti";
import { MdOutlineLeakRemove } from "react-icons/md";

export default function Feature({ data, ...props }) {
    console.log(data)
    return (
        <div className="px-11 py-14 text-left transition duration-300 ease-in cursor-pointer md:hover:bg-white md:hover:border-white md:hover:shadow-[rgb(59,90,136)] md:hover:-translate-x-1 md:hover:-translate-y-1">
            <div className="inline-flex items-center min-w-[70px] md-6">
                {data.icon === 'icon1' &&
                    <div className="bg-dark p-4 rounded-full">
                        <SiProtools size={40} className="text-white " />
                    </div>
                }
                {data.icon === 'icon2' && 
                    <div className="bg-dark p-4 rounded-full">
                        <SiSpring size={40} className="text-white" />
                    </div>
                }
                {data.icon === 'icon3' && 
                    <div className="bg-dark p-4 rounded-full">
                        <FaToolbox size={40} className="text-white" />
                    </div>
                }
                {data.icon === 'icon4' && 
                    <div className="bg-dark p-4 rounded-full">
                        <BsSnow size={40} className="text-white" />
                    </div>
                }
                {data.icon === 'icon5' && 
                    <div className="bg-primary p-4 rounded-full">
                        <TiLightbulb size={40} className="text-white" />
                    </div>
                }
                {data.icon === 'icon6' && 
                    <div className="bg-dark p-4 rounded-full">
                        <MdOutlineLeakRemove size={40} className="text-white" />
                    </div>
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