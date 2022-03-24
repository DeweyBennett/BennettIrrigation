

export default function SubscriptionForm({ buttonLabel, ...props }) {

    return (
        <form className="f" {...props}>
            <input type="email" id="email" placeholder="Enter Email address" className="flex-grow bg-[#FFFFFF] shadow-md shadow-[rgb(72,59,26)] px-2 py-6 w-auto h-auto"/>
            <button className="ml-3 px-2 py-4">{buttonLabel ?? 'Get Started'}</button>
        </form>
    )
}