

export default function SubscriptionForm({ buttonLabel, ...props }) {

    return (
        <form className="flex mt-6" {...props}>
            <input type="email" id="email" placeholder="Enter Email address" className="flex-grow bg-[#FFFFFF] shadow-md shadow-[rgb(72,59,26)] px-2 py-6 w-auto h-auto rounded-lg"/>
            <button className="inline-flex items-center justify-center bg-primary text-white font-bold min-h-[60px] px-2 py-4 rounded-lg transition duration-300 ease-in-out whitespace-nowrap hover:bg-dark cursor-pointer ml-2">{buttonLabel ?? 'Get Started'}</button>
        </form>
    )
}