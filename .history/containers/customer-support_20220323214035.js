import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import Testiminial from '../components/cards/_testimonial';
import ButtonGroup from '../components/_button-group';
import support from '../public/assets/images/support.png';
import 'react-multi-carousel/lib/styles.css';

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
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
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
        <section id="support" className="bg-[#F9FBFD] pb-32">
            <div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="relative flex items-center text-center">
                        <Image src={support} loading="lazy" alt="support" className="max-w-full"/>
                    </div>
                    <div className="flex flex-col justify-center -mt-3 text-left">
                        <h1 className="text-heading text-3xl font-bold mb-10">
                        Customer satisfaction is our number one priority.
                        </h1>
                        <p className="text-textSecondary text-lg max-w-[470px]">
                        Check out what our clients are saying, and feel free to leave a review as well.
                        </p>
                        <div className="w-full mx-auto">
                            <Carousel {...carouselParams}>
                                {data.map((item) => (
                                    <Testiminial key={item.id} item={item} />
                                ))}
                            </Carousel>
                        </div>
                        {/* <div className="py-4 mx-auto overflow-hidden">
                            <div className="text-center">
                                    <h1 className="text-2xl text-white font-bold">Testiminials</h1>
                                    <p className="text-lg text-white">See what our customers are saying!</p>
                            </div>
                            <div className="flex justify-end flex-col items-end w-full px-2">
                                <Carousel {...carouselParams}>
                                        {data.map((item) => (
                                            <Testiminial key={item.id} item={item} />
                                        ))}
                                </Carousel>
                            </div> 
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}