import Image from 'next/image';
import SupportType from '../components/cards/_support-type';
import illustration from '../public/assets/images/support-2.png';
import icon1 from '../public/assets/images/icons/1.png';
import icon2 from '../public/assets/images/icons/2.png';



const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Email client support',
    text: `Ultimate access to all credit popular exercises and assessments materials`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Live ticket support',
    text: `Total assessment corrections with live support tickets download access system`,
  },
];


export default function Support(){

    return(
        <section id="support" className="py-40">
            <div>
                <div className="grid grid-cols-2 gap-4 mx-auto max-w-[1193px] items-center">
                    <div className="">
                        <div className="text-left">
                            <h1 className="text-heading text-3xl font-bold mb-10">
                                Do you need help? Our support team ready to help you
                            </h1>
                            <p className="text-textSecondary text-lg max-w-[470px] mb-10">
                                Get your tests delivered at let home collect sample from the
                                victory of the managements that supplies best design system
                                guidelines ever.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {data.map((support) => (
                                <SupportType key={support.id} data={support} />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Image src={illustration} alt="illustration" />
                    </div>
                </div>
            </div>
        </section>
    )
}