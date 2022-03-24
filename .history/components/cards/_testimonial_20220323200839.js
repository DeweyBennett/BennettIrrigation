import { HiStar } from "react-icons/hi";

export default function Testiminial({ item }) {

    return (
        <div className="shadow-lg shadow-[#1be600] transition-all duration-300 rounded-lg w-[450px] min-h-[250px] bg-white text-left px-6 py-4">
            <div className="flex">
                {Array(item.review).fill().map((_, i) => (
                    <HiStar key={i} 
                    className="h-5 text-yellow-500"
                    />
                ))}
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#343D48]">{item.title}</h3>
            <p className="text-[#343D48]">{item.description}</p>
            <div className="flex items-center mt-5">
                <div className="">
                    <h4 className="font-bold mb-1 text-[#343D48]">{item.name}</h4>
                    <p className="font-semibold">{item.designation}</p>
                </div>
            </div>
        </div>
    )
}