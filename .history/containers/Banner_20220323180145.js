import SubscriptionForm from '../components/_subscription-form';

export default function Banner(){

    return(
        <div id="home" className="bg-transparent bg-banner bg-no-repeat bg-top bg-cover">
            <div>
                <div className="grid grid-cols-2 gap-14 items-center min-h-[100vh] max-w-[80%] mx-auto">
                    <div className="text-left col-span-1">
                        <h1 className="text-6xl text font-extrabold text-textSecondary mb-8">
                        Bennett's Irrigation Services, Inc. offers professional design, installation and repair of any and all irrigation systems
                        </h1>
                        <p className="text-lg text-textSecondary">
                              For close to fifteen years we have been servicing the Outer Banks of North Carolina to include Nags Head, Kill Devil Hills, Kitty Hawk, Manteo, Duck and Corolla as well as the Currituck mainland. In 2009, we established a second location our Greenville - Pitt County office.   We have installed systems in single homes to entire neighborhoods as well as on commercial properties and athletic fields.  No job is too large or too small so please give us a call.
                        </p>
                        <SubscriptionForm />
                    </div>
                </div>
            </div>
        </div>
    )
}