import { IoMdCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

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
                        <span className="lg:hidden">Full Access Library</span>
                        <FeatureIcon value={data.library_access} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span className="lg:hidden">Multiple user</span>
                        <FeatureIcon className="w-[20px] h-[]20px" value={data.multiple_user} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>Refund Policy</span>
                        <FeatureIcon className="w-[20px] h-[]20px" value={data.refund_policy} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>Google Analytics</span>
                        <FeatureIcon className="w-[20px] h-[]20px" value={data.google_analytics} />
                    </li>
                    <li className="flex items-center justify-center text-headingSecondary font-semibold min-h-[59px]">
                        <span>24/7 support</span>
                        <FeatureIcon className="w-[20px] h-[]20px" value={data.support} />
                    </li>
                </ul>
                <button
                className={data.is_recommended ? 'inline-flex items-center justify-center font-bold min-h-[50px] px-2 py-4 rounded-lg transition duration-300 ease-in-out whitespace-nowrap cursor-pointer bg-secondary text-white hover:bg-dark' : 'inline-flex items-center justify-center border-[#FFC059] text-secondary font-bold min-h-[50px] px-2 py-4 rounded-lg transition duration-300 ease-in-out whitespace-nowrap hover:bg-secondary hover:text-white cursor-pointer'}
                >
                Choose Plan
                </button>
                <span className="block text-[#0F2137] mt-2">{data.trial_period} days free trial</span>
            </div>
        </div>
    )
}