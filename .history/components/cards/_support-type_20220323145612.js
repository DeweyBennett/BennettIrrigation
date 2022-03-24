import Image from 'next/image';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function SupportType({ data }){

    return(
        <div className="flex items-center mt-2">
            <div as="figure" className="">
                <Image src={data.icon} alt="" />
            </div>
            <div sx={styles.content}>
                <h3>
                {data.title}{' '}
                <HiOutlineArrowNarrowRight color={rgba('#0F2137', 0.3)} />
                </h3>
                <p>{data.text}</p>
            </div>
        </div>
    )
}