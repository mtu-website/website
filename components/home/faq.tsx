import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// import { PlusIcon } from '@radix-ui/react-icons';

const faqs = [
  {
    id: 1,
    question: 'Getting your transcript',
    answer: '',
  },
  {
    id: 2,
    question: 'What if I don’t receive my certificate?',
    answer: '',
  },
  {
    id: 3,
    question: 'The name on my certificate is wrong',
    answer: '',
  },
  {
    id: 4,
    question: 'Can I get a replacement certificate?',
    answer: '',
  },
  {
    id: 5,
    question: 'What are the perks of being an MTU alumni?',
    answer: '',
  },
];

export default function FAQ() {
  return (
    <section className="flex flex-col items-start justify-between gap-4 px-6 py-12 lg:flex-row lg:gap-24 lg:px-12 lg:py-24">
      <div className="lg:w-[50%]">
        <h3 className="font-mono text-xs font-semibold uppercase leading-6 tracking-[-4%] text-[#84B000] lg:text-[16px]">
          faqs
        </h3>
        <h1 className="my-4 font-sans text-xl font-semibold leading-8 tracking-[-2%] text-[#0F0F0F] lg:text-4xl">
          Common inquiries students have about MTU
        </h1>
        <p className="font-sans text-[16px] font-medium leading-6 tracking-[-4%] text-[#0F0F0F] lg:leading-8">
          We’ve got you covered. We’ve answered some of the most common
          questions students have.
        </p>
      </div>
      <div className="w-full lg:w-[50%]">
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            type="single"
            collapsible
            className="my-2 border-b-[1px] border-b-[#E6E6E6] py-5 lg:my-9"
            // style={{ boxShadow: '0px 2px 5px 0px #00000026' }}
          >
            <AccordionItem value="item-1 ">
              <AccordionTrigger className="mr-6 flex items-center justify-between text-left font-sans text-[16px] font-medium leading-4 tracking-[3%] text-[#0F0F0F] lg:text-xl lg:leading-5">
                {faq.question}
                {/* <PlusIcon className="h-8 w-8 text-[#0F0F0F]" /> */}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] text-[#0F0F0F]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
