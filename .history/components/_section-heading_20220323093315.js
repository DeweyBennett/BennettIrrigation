

export default function SectionHeading({
    title,
    emoji,
    slogan,
    learnMore,
    description,
    ...props
}){

    return(
        <div sx={styles.heading} {...props}>
            {slogan && (
                <p sx={styles.slogan}>
                {slogan}
                </p>
            )}
            <Heading as="h3" sx={styles.title}>
                {emoji ? <span>{title}</span> : title}
                {emoji && <Image src={emoji} alt="emoji" />}
            </Heading>
            {description && (
                <Text as="p" sx={styles.description}>
                {description}
                </Text>
            )}
            {learnMore && (
                <LearnMore
                path="#"
                sx={{ mt: [3, null, null, 4] }}
                label={learnMore ?? 'Learn More'}
                />
            )}
        </div>
    )
}