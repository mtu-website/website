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
    question:
      'How can I get an official recommendation letter for future endeavors?',
    answer:
      'You can obtain a recommendation letter by visiting your department and speaking with your Head of Department (HOD).',
  },
  {
    id: 2,
    question:
      'What documents do I need to bring along to collect my certificate?',
    answer:
      "You'll need your Statement of Purpose, School ID card, and Convocation receipt.",
  },
  {
    id: 3,
    question: 'What should I do if I’ve misplaced my ID card?',
    answer:
      'Visit a Federal or State High Court to obtain an official affidavit, duly stamped and signed.',
  },
  {
    id: 4,
    question: 'What should I do if the name on my certificate is incorrect?',
    answer:
      "Report this issue to the Registrar's Office to initiate the correction process.",
  },
  {
    id: 5,
    question: 'Can I get a replacement for my certificate?',
    answer:
      "Yes, replacement certificates are available. Please contact the Registrar's Office with valid proof of your request.",
  },
  {
    id: 6,
    question: 'How can I give back to the school?',
    answer:
      'We love alumni support! Reach out to the Alumni Relations Office to discuss how you can contribute.',
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
