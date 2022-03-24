import Image from "next/image";


export default function CustomerSupport(){

    return(
        <div as="section" sx={styles.section}>
            <div>
                <div sx={styles.grid}>
                    <div sx={styles.illustration}>
                        <Image src={support} loading="lazy" alt="support" />
                    </div>
                    <div sx={styles.content}>
                        <h1 sx={styles.title}>
                        Customer support is our main priority with their hundred percent
                        satisfaction.
                        </h1>
                        <p sx={styles.summary}>
                        Get your tests delivered at let home collect sample from the
                        victory of the managements that supplies best design system
                        guidelines ever.
                        </p>

                        <ul sx={styles.list} as="ul">
                        {list.map((item, i) => (
                            <Text as="li" key={i}>
                            <IoIosCheckmarkCircle
                                sx={{ color: 'primary', mr: 2 }}
                                size="20px"
                            />
                            {item}
                            </Text>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}