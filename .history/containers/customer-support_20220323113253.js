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
        <section className="pt-15">
            <div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="relative flex items-center text-center">
                        <Image src={support} loading="lazy" alt="support" className="max-w-full"/>
                    </div>
                    <div className="-mt-3 text-left">
                        <h1 className="text-heading text-3xl font-semibold mb-3">
                        Customer support is our main priority with their hundred percent
                        satisfaction.
                        </h1>
                        <p className="text-textSecondary text-lg max-w-[470px]">
                        Get your tests delivered at let home collect sample from the
                        victory of the managements that supplies best design system
                        guidelines ever.
                        </p>

                        <ul className="grid grid-cols-2 list">
                            {list.map((item, i) => (
                                <li key={i}>
                                    <IoIosCheckmarkCircle
                                        sx={{ color: 'primary', mr: 2 }}
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