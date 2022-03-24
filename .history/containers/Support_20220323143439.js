import SupportType from 'components/cards/support-type';
import Image from 'components/image';
import illustration from 'assets/images/support-2.png';
import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';

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
        <section id="support" className="py-4">
            <div>
                <div className="grid grid-cols-2 gap-4 mx-auto max-w-[]">
                    <div sx={styles.content}>
                        <div sx={styles.heading}>
                            <h1 sx={styles.title}>
                                Do you need help? Our support team ready to help you
                            </h1>
                            <p sx={styles.summary}>
                                Get your tests delivered at let home collect sample from the
                                victory of the managements that supplies best design system
                                guidelines ever.
                            </p>
                        </div>
                        {data.map((support) => (
                        <SupportType key={support.id} data={support} />
                        ))}
                    </div>
                    <div as="figure" sx={styles.illustration} className="illustration">
                        <Image src={illustration} alt="illustration" />
                    </div>
                </div>
            </div>
        </section>
    )
}