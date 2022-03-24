import Image from 'next/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import support from '../public/assets/images/support.png';

const list = [
    'Medical and vision',
    'Life insurance',
    'HSAs and FSAs',
    'Commuter benefits',
];

export default function CustomerSupport(){

    return(
        <section className="py-40">
            <div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="relative flex items-center text-center">
                        <Image src={support} loading="lazy" alt="support" className="max-w-full"/>
                    </div>
                    <div className="flex flex-col justify-center -mt-3 text-left">
                        <h1 className="text-heading text-3xl font-bold mb-10">
                        Customer support is our main priority with their hundred percent
                        satisfaction.
                        </h1>
                        <p className="text-textSecondary text-lg max-w-[470px]">
                        Get your tests delivered at let home collect sample from the
                        victory of the managements that supplies best design system
                        guidelines ever.
                        </p>

                        <ul className="grid grid-cols-2 list-none mt-5">
                            {list.map((item, i) => (
                                <li key={i} className="flex items-center text-lg text-textSecondary font-semibold">
                                    <IoIosCheckmarkCircle
                                        className="text-green-400 mr-4"
                                        size="20px"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}