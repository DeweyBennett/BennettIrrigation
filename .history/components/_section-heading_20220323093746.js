import Image from "next/image";
import { LearnMore } from "./_links";


export default function SectionHeading({
    title,
    emoji,
    slogan,
    learnMore,
    description,
    ...props
}){

    return(
        <div className="mx-auto text-center" {...props}>
            {slogan && (
                <p sx={styles.slogan}>
                {slogan}
                </p>
            )}
            <h3 sx={styles.title}>
                {emoji ? <span>{title}</span> : title}
                {emoji && <Image src={emoji} alt="emoji" />}
            </h3>
            {description && (
                <p sx={styles.description}>
                {description}
                </p>
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