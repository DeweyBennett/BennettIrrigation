

export default function SubscriptionForm({ buttonLabel, ...props }) {

    return (
        <form>
            <label>Email</label>
            <input type="email" id="email" placeholder="Enter Email address" className="fle"/>
            <button>{buttonLabel ?? 'Get Started'}</button>
        </form>
    )
}