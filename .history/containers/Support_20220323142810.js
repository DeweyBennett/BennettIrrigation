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
        <section id="support" sx={styles.section}>
            <Container>
                <div sx={styles.grid}>
                <div sx={styles.content}>
                    <div sx={styles.heading}>
                    <Heading sx={styles.title}>
                        Do you need help? Our support team ready to help you
                    </Heading>
                    <Text as="p" sx={styles.summary}>
                        Get your tests delivered at let home collect sample from the
                        victory of the managements that supplies best design system
                        guidelines ever.
                    </Text>
                    </div>
                    {/* <SectionHeading
                    sx={styles.heading}
                    title="Do you need help? Our support team ready to help you"
                    description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
                    /> */}
                    {data.map((support) => (
                    <SupportType key={support.id} data={support} />
                    ))}
                </div>
                <Box as="figure" sx={styles.illustration} className="illustration">
                    <Image src={illustration} alt="illustration" />
                </Box>
                </div>
            </Container>
        </section>
    )
}