import SectionHeading from '../components/_section-heading';

import icon1 from '/public/assets/images/features/1.png';
import icon2 from '/public/assets/images/features/2.png';
import icon3 from '/public/assets/images/features/3.png';
import icon4 from '/public/assets/images/features/4.png';
import icon5 from '/public/assets/images/features/5.png';
import icon6 from '/public/assets/images/features/6.png';
import Feature from '../components/cards/_feature';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Email Subscription',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Bolt Performance',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Secure Transaction',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Multiple Options',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Customer Support',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Integrated with Shopify',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
];

export default function ServiceFeatures() {

    return(
        <section id="features" className="bg-[#F9FBFD] pt-10 pb-18">
            <div className="">
              <div>
                <SectionHeading
                  className="mb-7"
                  slogan="Ideal solutions for you"
                  title="Go beyond ultimate features"
                />
              </div>
              <div className="grid grid-cols-3 max-w-[1080px] mx-auto my-auto">
                {data?.map((item) => (
                    <Feature className="feature-item" key={item.id} data={item} />
                ))}
                </div>
            </div>
        </section>
    )
}