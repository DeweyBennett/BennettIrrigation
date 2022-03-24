

export default function Feature({ data, ...props }) {

    return (
        <div sx={styles.feature} {...props}>
            <div>
                <Image src={data?.icon} alt={data?.title} />
            </div>
            <div>
                <Heading as="h4">{data?.title}</Heading>
                <Text as="p">{data?.description}</Text>
                {data?.path && <LearnMore path={data?.path} />}
            </div>
        </div>
      );
}