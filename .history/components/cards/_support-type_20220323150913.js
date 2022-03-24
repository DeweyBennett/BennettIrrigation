import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function SupportType({ data }){

    return(
        <div className="flex items-center mt-2">
            <div as="figure" className="flex items-center mr-1 min-w-[60px]">
                <Image src={data.icon} alt="" />
            </div>
            <div>
                <h3 className="flex items-center text-2xl font-bold mb-1">
                {data.title}{' '}
                <HiOutlineArrowNarrowRight className="text-#0F2137" />
                </h3>
                <p className="text-lg">{data.text}</p>
            </div>
        </div>
    )
}