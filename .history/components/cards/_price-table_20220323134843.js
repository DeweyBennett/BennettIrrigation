import { IoMdCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { rgba } from 'polished';

const FeatureIcon = ({ value }) => {
    return value ? (
      <IoMdCheckmarkCircle size="23px" color="#3CC68A" />
    ) : (
      <IoIosCloseCircle size="23px" color="#CED7E1" />
    );
};

export default function PriceTable({ data }) {

    return(
        <div className={data.is_recommended ? 'relative text-center bg-white rounded-b-lg' : 'relative text-center'}>
            {data.is_recommended && <span className="absolute -top-8 flex items-center justify-center rounded-t-lg bg-[#52ACFF] text-white text-sm font-bold w-full min-h-[30px] uppercase">Recommended</span>}
            <div className={data.is_recommended ? 'rounded-b-lg border-white' : 'rounded-lg pt-2 pb-4'}
            >
                <span className="block text-[#0F2137] font-semibold text-sm mb-5">{data.title}</span>
                <span className="block text-heading font-bold ">
                ${data.amount}/<small className="text-sm">per mo.</small>
                </span>
                <ul className="list-none my-2">
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>Full Access Library</span>
                        <FeatureIcon value={data.library_access} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>Multiple user</span>
                        <FeatureIcon className="w" value={data.multiple_user} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>Refund Policy</span>
                        <FeatureIcon value={data.refund_policy} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>Google Analytics</span>
                        <FeatureIcon value={data.google_analytics} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>24/7 support</span>
                        <FeatureIcon value={data.support} />
                    </li>
                </ul>
                <button
                sx={styles.button}
                variant="primaryOutline"
                className={data.is_recommended ? 'recommended' : ''}
                >
                Choose Plan
                </button>
                <span sx={styles.trial}>{data.trial_period} days free trial</span>
            </div>
        </div>
    )
}