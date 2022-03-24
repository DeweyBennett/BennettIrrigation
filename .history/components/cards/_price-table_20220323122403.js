import { IoMdCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { rgba } from 'polished';

const FeatureIcon = ({ value }) => {
    return value ? (
      <IoMdCheckmarkCircle size="23px" color="#3CC68A" />
    ) : (
      <IoIosCloseCircle size="23px" color="#CED7E1" />
    );
};

export default function 