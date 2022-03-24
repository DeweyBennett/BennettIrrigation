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
        <div sx={styles.card} className={data.is_recommended ? 'relative text-center bg-white rounded-t-lg' : 'relative text-center'}>
            {data.is_recommended && <span className="flex items-center justify-center">Recommended</span>}
            <div
                sx={styles.priceTable}
                className={data.is_recommended ? 'recommended' : ''}
            >
                <span sx={styles.title}>{data.title}</span>
                <span sx={styles.amount}>
                ${data.amount}/<small>per mo.</small>
                </span>
                <ul variant="styles.unStyled" sx={styles.features}>
                    <li>
                        <span>Full Access Library</span>
                        <FeatureIcon value={data.library_access} />
                    </li>
                    <li>
                        <span>Multiple user</span>
                        <FeatureIcon value={data.multiple_user} />
                    </li>
                    <li>
                        <span>Refund Policy</span>
                        <FeatureIcon value={data.refund_policy} />
                    </li>
                    <li>
                        <span>Google Analytics</span>
                        <FeatureIcon value={data.google_analytics} />
                    </li>
                    <li>
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