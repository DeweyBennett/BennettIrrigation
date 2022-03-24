

export default function SubscriptionForm({ buttonLabel, ...props }) {

    return (
        <form>
            <label>Email</label>
            <input type="email" id="email" placeholder="Enter Email address" className="flex-grow px-2 py"/>
            <button>{buttonLabel ?? 'Get Started'}</button>
        </form>
    )
}