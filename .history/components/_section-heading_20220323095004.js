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
                <p className="text-primary font-semibold text-lg">
                {slogan}
                </p>
            )}
            <h3 className="text-heading font-bold text-xl">
                {emoji ? <span>{title}</span> : title}
                {emoji && <Image src={emoji} alt="emoji" className="ml-4 relative top-2 w-full" />}
            </h3>
            {description && (
                <p className="text-heading text-lg mt-5 max">
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