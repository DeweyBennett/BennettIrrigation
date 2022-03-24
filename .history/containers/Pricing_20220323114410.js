import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import PriceTable from 'components/cards/price-table';
import SectionHeading from 'components/section-heading';

const data = [
  {
    id: 1,
    title: 'Starter Pack',
    amount: 18.99,
    is_recommended: false,
    library_access: true,
    multiple_user: true,
    refund_policy: false,
    google_analytics: false,
    support: false,
    trial_period: 15,
  },
  {
    id: 2,
    title: 'Premium Pack',
    amount: 23.99,
    is_recommended: true,
    library_access: true,
    multiple_user: true,
    refund_policy: true,
    google_analytics: false,
    support: false,
    trial_period: 30,
  },
  {
    id: 3,
    title: 'Custom Pack',
    amount: 29.99,
    is_recommended: false,
    library_access: true,
    multiple_user: true,
    refund_policy: true,
    google_analytics: true,
    support: false,
    trial_period: 30,
  },
  {
    id: 4,
    title: 'Ultimate Pack',
    amount: 35.99,
    is_recommended: false,
    library_access: true,
    multiple_user: true,
    refund_policy: true,
    google_analytics: true,
    support: true,
    trial_period: 45,
  },
];

const settings = {
  // slidesToShow: 3,
  // slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        // fade: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Pricing(){
    const isTablet = useMediaQuery({
        query: '(min-width: 1024px)',
      });

      
}