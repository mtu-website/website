import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Link from 'next/link';

const pathways = [
  {
    id: 'staff-resources',
    title: 'Staff Resources',
    resources: [
      {
        id: '1',
        icon: '/images/students-corner/icon-1.svg',
        directory:
          'https://staffportal.mtu.edu.ng/(S(c4c54mhtldv4qa4nrjnomejo))/StaffLoginPage.aspx',
        text: 'Staff Portal',
      },
      {
        id: '2',
        icon: '/images/students-corner/icon-2.svg',
        directory: 'https://directory.mtu.edu.ng/',
        text: 'A-Z Staff Directory',
      },
      {
        id: '3',
        icon: '/images/students-corner/icon-3.svg',
        directory:
          'https://staffportal.mtu.edu.ng/(S(suuuj3ljvzbuxdtlxlexpsjx))/StaffLoginPage.aspx',
        text: 'APER Form',
      },
      {
        id: '4',
        icon: '/images/students-corner/icon-4.svg',
        directory:
          'https://mtu.edu.ng/uploads/ANNUAL_APPRAISAL_EVALUATION_REVIEW_(APER)_FOR%20_2023-2024.pdf',
        text: 'Annual Appraisal Review',
      },
      {
        id: '5',
        icon: '/images/students-corner/icon-5.svg',
        directory:
          'https://mtu.edu.ng/uploads/How_to_perform_2023-2024_Appraisal_on_MTU_Staff_Portal.pdf',
        text: 'Guidelines on APER 2025',
      },
    ],
  },
];

export default function AcademicPaths() {
  return (
    <section className="bg-[#1E1E1E] px-6 py-12 lg:px-12 lg:py-24">
      <h3 className="font-sans text-2xl font-medium leading-[62.28px] tracking-[-4%] text-white lg:text-4xl"></h3>
      {pathways.map((pathway) => (
        <Accordion
          key={pathway.id}
          type="single"
          collapsible
          className="my-9 border-l-[6px] border-l-white bg-black px-6 py-6 lg:px-12"
          style={{ boxShadow: '0px 2px 5px 0px #00000026' }}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="mb-6 flex items-center justify-between text-left font-sans text-[16px] font-medium leading-6 tracking-[3%] text-white no-underline lg:text-xl lg:leading-9">
              {pathway.title}
            </AccordionTrigger>
            <AccordionContent className="my-12 text-[16px] text-white">
              <div className="grid items-center justify-center gap-12 lg:grid-cols-4">
                {pathway.resources.map((resource) => (
                  <Link
                    href={resource.directory}
                    key={resource.id}
                    className="mx-auto w-[180px] lg:w-[230px]"
                  >
                    <div className="flex h-[180px] w-[180px] items-center justify-center rounded-[15px] bg-[#DBB8FF] lg:h-[230px] lg:w-[230px]">
                      <Image
                        alt={resource.text}
                        src={resource.icon}
                        width={54}
                        height={54}
                      />
                    </div>
                    <p className="mt-4 text-center font-sans text-[16px] font-medium leading-6 tracking-[3%] text-white">
                      {resource.text}
                    </p>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
