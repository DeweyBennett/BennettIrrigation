import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function ButtonGroup({ next, previous }) {
  return (
    <div className="w-full">
      <div>
        <div className="flex justify-center -mb-4">
          <button onClick={previous} aria-label="Previous" className="bg-transparent cursor-pointer px-2 text-[#BBC7D7] transition-all duration-300 hover:text-[#343D48] focus:outline-0">
            <IoIosArrowRoundBack />
          </button>
          <button onClick={next} aria-label="Next" className="bg-transparent cursor-pointer px-2 text-[#BBC7D7] transition-all duration-300 hover:text-[#343D48] focus:outline-0">
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
}