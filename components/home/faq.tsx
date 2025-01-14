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
    question: 'Is it possible to gain admission into MTU without JAMB?',
    answer:
      'Absolutely! At MTU, we offer a Foundation Programme that provides an alternative pathway to admission. It’s a great opportunity to kickstart your academic journey with us!',
  },
  {
    id: 2,
    question: 'How can I log in to my student portal?',
    answer:
      'Accessing your student portal is quick and easy! Simply visit the Student Corner page, enter your matriculation number as your username, and use your password to log in. If you’re logging in for the first time or need assistance, don’t hesitate to reach out to the ICT Support Team for guidance.',
  },
  {
    id: 3,
    question: 'How do I access my MTU email?',
    answer:
      'Just stop by the ICT center and submit a request. The friendly team there will guide you through the process and get you set up in no time!',
  },
  {
    id: 4,
    question: 'How do I request my official transcript?',
    answer:
      "It's simple! Head over to the Student Corner page and find the 'Transcript Request' tab. Click on it, follow the instructions, and you're good to go!",
  },
  {
    id: 5,
    question: 'What perks come with being an MTU alumnus?',
    answer:
      'As an MTU alumnus, you unlock a world of global opportunities, exclusive updates from the university, and a lifelong connection to a network of achievers. Stay inspired, stay informed, and stay ahead with MTU!',
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
