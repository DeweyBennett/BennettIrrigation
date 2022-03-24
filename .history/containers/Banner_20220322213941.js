import Image from 'components/image';
import SubscriptionForm from 'components/subscription-form';

export default function Banner(){

    return(
        <div className="bg-transparent bg-banner bg-no-repeat bg-top bg-cover">
            <div>
                <div className="">
                    <div className="text-left">
                        <h1 className="text-2xl text-textSecondary">
                            A Creative way to grow your Exciting Business ideas
                        </h1>
                        <p className="text-lg text-textSecondary">
                            Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
                        </p>
                        <SubscriptionForm sx={styles.subscriptionForm} />
                    </div>
                </div>
            </div>
        </div>
    )
}