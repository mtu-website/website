import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { studyAtMtuFaqs } from '@/lib/data';

const faqs = studyAtMtuFaqs;

export default function Faq() {
  return (
    <section className="mb-9 bg-[#84B000] px-6 py-[60px] lg:px-[90px]">
      <h2 className="text-center font-sans text-[28px] font-bold leading-9 tracking-[3%] text-[white] lg:text-[54px] lg:leading-[93.42px]">
        What you should <span className="font-medium italic">know</span>
      </h2>
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          type="single"
          collapsible
          className="my-9 border-l-[6px] border-l-[#6C006D] bg-white p-5"
          style={{ boxShadow: '0px 2px 5px 0px #00000026' }}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-sans text-[16px] font-medium leading-6 tracking-[3%] lg:text-xl lg:leading-9">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[16px]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
