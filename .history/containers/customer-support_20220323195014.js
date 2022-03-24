import Image from 'next/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import support from '../public/assets/images/support.png';

const data = [
    {
      id: 1,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: '/avatar1.png',
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 4,
    },
    {
      id: 2,
      title: 'Design Quality & performance',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: '/avatar2.png',
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 5,
    },
    {
      id: 3,
      title: 'Layout and organized layers',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: '/avatar3.png',
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 5,
    },
    {
      id: 4,
      title: 'Modern look & trending design',
      description:
        'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
      avatar: '/avatar4.png',
      name: 'Denny Hilguston',
      designation: '@denny.hil',
      review: 4,
    },
];
  
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
const carouselParams = {
    additionalTransfrom:0,
    arrows:false,
    autoPlaySpeed:3000,
    centerMode:false,
    className:"w-full mx-auto",
    containerClass:"carousel-container",
    customButtonGroup:<ButtonGroup />,
    dotListClass:"",
    draggable: true,
    focusOnSelect:false,
    infinite:true,
    itemClass:"",
    keyBoardControl: true,
    minimumTouchDrag:80,
    renderButtonGroupOutside: true,
    renderDotsOutside:false,
    responsive:responsive,
    showDots:false,
    sliderClass:"",
    slidesToSlide:1,
}

export default function CustomerSupport(){

    return(
        <section className="py-40">
            <div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="relative flex items-center text-center">
                        <Image src={support} loading="lazy" alt="support" className="max-w-full"/>
                    </div>
                    <div className="flex flex-col justify-center -mt-3 text-left">
                        <h1 className="text-heading text-3xl font-bold mb-10">
                        Customer support is our main priority with their hundred percent
                        satisfaction.
                        </h1>
                        <p className="text-textSecondary text-lg max-w-[470px]">
                        Get your tests delivered at let home collect sample from the
                        victory of the managements that supplies best design system
                        guidelines ever.
                        </p>

                        <ul className="grid grid-cols-2 list-none mt-5">
                            {list.map((item, i) => (
                                <li key={i} className="flex items-center text-lg text-textSecondary font-semibold">
                                    <IoIosCheckmarkCircle
                                        className="text-green-400 mr-2"
                                        size="20px"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}