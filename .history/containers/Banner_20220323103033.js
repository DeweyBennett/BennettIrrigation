import SubscriptionForm from '../components/_subscription-form';

export default function Banner(){

    return(
        <div id="home" className="bg-transparent bg-banner bg-no-repeat bg-top bg-cover">
            <div>
                <div className="grid grid-cols-2 gap-14 items-center min-h-[100vh] max-w-[80%] mx-auto">
                    <div className="text-left col-span-1">
                        <h1 className="text-3xl text font-extrabold text-textSecondary">
                            A Creative way to grow your Exciting Business ideas
                        </h1>
                        <p className="text-lg text-textSecondary">
                            Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
                        </p>
                        <SubscriptionForm />
                    </div>
                </div>
            </div>
        </div>
    )
}