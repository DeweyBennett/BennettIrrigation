import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    id: 1,
    title: `01. Which domain should I purchase?`,
    contents: (
      <div>
        Get your website tests delivered at the home collect a sample. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. What are some tips when choosing a name?`,
    contents: (
      <div>
        We make it easy to move to CometNine. Simply contact us and we'll move
        your hosting account from any other provider, regardless of the control
        panel. If at anytime your website is down for more than 0.1% result with
        proper investigation experiments.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. What if I need help choosing the right domain?`,
    contents: (
      <div>
        Create a hub for cross-functional work that also works with all. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Can I upgrade or downgrade my web hosting subscription system?`,
    contents: (
      <div>
        The pricing made me a little hesitant at first but I have been. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. Learn from community on Brandwagon`,
    contents: (
      <div>
        Stop your viewers from getting distracted. Publish videos to. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
  },
];

export default function FAQ() {

    return(
        <section id="faq" className="pt- pt-4 pb-6">
            <div>
                <SectionHeading
                className="mb-8"
                slogan="Get your question answer"
                title="Frequently asked question"
                />

                <Accordion items={data} />
                <div className="text-center">
                    <button className="inline-flex items-center justify-center font-bold min-h-[50px] px-2 py-4 rounded-lg transition duration-300 ease-in-out whitespace-nowrap cursor-pointer text-tex">Still Question? Contact us</button>
                </div>
            </div>
        </section>
    )
}