import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function SupportType({ data }){

    return(
        <div sx={styles.card}>
        <Flex as="figure" sx={styles.icon}>
            <Image src={data.icon} alt="" />
        </Flex>
        <div sx={styles.content}>
            <Heading as="h3">
            {data.title}{' '}
            <HiOutlineArrowNarrowRight color={rgba('#0F2137', 0.3)} />
            </Heading>
            <Text as="p">{data.text}</Text>
        </div>
        </div>
    )
}