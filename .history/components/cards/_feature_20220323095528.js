

export default function Feature({ data, ...props }) {

    return (
        <Box sx={styles.feature} {...props}>
          <Box as="figure">
            <Image src={data?.icon} alt={data?.title} />
          </Box>
          <Box>
            <Heading as="h4">{data?.title}</Heading>
            <Text as="p">{data?.description}</Text>
            {data?.path && <LearnMore path={data?.path} />}
          </Box>
        </Box>
      );
}