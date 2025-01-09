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

export default function Faq() {
  return (
    <section className="bg-transparent px-8 py-[60px] lg:px-[90px]">
      <h2 className="text-center font-sans text-[28px] font-bold leading-9 tracking-[3%] text-[white] lg:text-[54px] lg:leading-[93.42px]">
        Need <span className="font-medium italic">help?</span>
      </h2>
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          type="single"
          collapsible
          className="my-9 border-l-[6px] border-l-white bg-black p-5"
          style={{ boxShadow: '0px 2px 5px 0px #00000026' }}
        >
          <AccordionItem value="item-1 ">
            <AccordionTrigger className="flex items-center justify-between text-left font-sans text-[16px] font-medium leading-6 tracking-[3%] text-white lg:text-xl lg:leading-9">
              {faq.question}
              {/* <PlusIcon className="h-8 w-8 text-white" /> */}
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-white">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
