

export default function SubscriptionForm({ buttonLabel, ...props }) {

    return (
        <form>
            <label>Email</label>
            <input />
            <button>{buttonLabel ?? 'Get Started'}</button>
        </form>
    )
}