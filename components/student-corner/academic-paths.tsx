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
    id: 'undergrad',
    title: 'Undergraduate Resources',
    resources: [
      {
        id: '1',
        icon: '/images/students-corner/icon-1.svg',
        directory:
          'https://mtu.edu.ng/mtu-news/academic-calendar-for-20232024-session',
        text: 'Academic Calendar',
      },
      {
        id: '2',
        icon: '/images/students-corner/icon-2.svg',
        directory: 'https://studentportal.mtu.edu.ng/',
        text: 'Students’ Portal',
      },
      {
        id: '3',
        icon: '/images/students-corner/icon-3.svg',
        directory:
          'https://mtu.edu.ng/uploads/supplementary_course_registration_form.pdf',
        text: 'Supplementary Course Registration',
      },
      {
        id: '4',
        icon: '/images/students-corner/icon-4.svg',
        directory: 'https://records.mtu.edu.ng/(S(1icwx2ehihid0ngvzx24t1oo))/',
        text: 'Transcript Request',
      },
      {
        id: '5',
        icon: '/images/students-corner/icon-5.svg',
        directory: 'https://mtu.edu.ng/uploads/NEW_STUDENT_AFFIDAVIT.pdf',
        text: 'Affidavit',
      },
      {
        id: '6',
        icon: '/images/students-corner/icon-6.svg',
        directory: 'https://mtu.edu.ng/uploads/AMENDMENT_OF_RESULT.pdf',
        text: 'Result Amendment Form',
      },
      {
        id: '7',
        icon: '/images/students-corner/icon-7.svg',
        directory:
          'https://mtu.edu.ng/uploads/Requirements_for_Collection_of_Certificates.pdf',
        text: 'Certificate Collection',
      },
      {
        id: '8',
        icon: '/images/students-corner/icon-8.svg',
        directory: '',
        text: 'Payment Warning',
      },
      {
        id: '9',
        icon: '/images/students-corner/icon-9.svg',
        directory: '',
        text: 'Students’ Handbook',
      },
      {
        id: '10',
        icon: '/images/students-corner/icon-10.svg',
        directory:
          'https://drive.google.com/file/d/1zk7nQquyiWokc_DCO7xUy-_tWzjXJTpr/view',
        text: 'Prohibited Items for Hostel',
      },
      {
        id: '11',
        icon: '/images/students-corner/icon-11.svg',
        directory:
          'https://docs.google.com/document/u/3/d/e/2PACX-1vSvLpa8AE9HBxC8U9rYRxvEld0HHT44UHYOW5GrkpcVf70esw90X2fa4nnDAkzwiT0xCupfi30VrQTf/pub?urp=gmail_link',
        text: 'Course Registration Guide',
      },
      {
        id: '12',
        icon: '/images/students-corner/icon-12.svg',
        directory: '',
        text: 'NYSC Related Affairs',
      },
    ],
  },
  {
    id: 'postgrad',
    title: 'Postgraduate Resources',
    resources: [
      {
        id: '1',
        icon: '/images/students-corner/icon-1.svg',
        directory:
          'https://mtu.edu.ng/mtu-news/academic-calendar-for-20232024-session',
        text: 'Academic Calendar',
      },
      {
        id: '2',
        icon: '/images/students-corner/icon-2.svg',
        directory: 'https://studentportal.mtu.edu.ng/',
        text: 'Students’ Portal',
      },
      {
        id: '3',
        icon: '/images/students-corner/icon-3.svg',
        directory:
          'https://mtu.edu.ng/uploads/supplementary_course_registration_form.pdf',
        text: 'Supplementary Course Registration',
      },
      {
        id: '4',
        icon: '/images/students-corner/icon-4.svg',
        directory: 'https://records.mtu.edu.ng/(S(1icwx2ehihid0ngvzx24t1oo))/',
        text: 'Transcript Request',
      },
      {
        id: '5',
        icon: '/images/students-corner/icon-5.svg',
        directory: 'https://mtu.edu.ng/uploads/NEW_STUDENT_AFFIDAVIT.pdf',
        text: 'Affidavit',
      },
      {
        id: '6',
        icon: '/images/students-corner/icon-6.svg',
        directory: 'https://mtu.edu.ng/uploads/AMENDMENT_OF_RESULT.pdf',
        text: 'Result Amendment Form',
      },
      {
        id: '7',
        icon: '/images/students-corner/icon-7.svg',
        directory:
          'https://mtu.edu.ng/uploads/Requirements_for_Collection_of_Certificates.pdf',
        text: 'Certificate Collection',
      },
      {
        id: '11',
        icon: '/images/students-corner/icon-11.svg',
        directory:
          'https://docs.google.com/document/u/3/d/e/2PACX-1vSvLpa8AE9HBxC8U9rYRxvEld0HHT44UHYOW5GrkpcVf70esw90X2fa4nnDAkzwiT0xCupfi30VrQTf/pub?urp=gmail_link',
        text: 'Course Registration Guide',
      },
      {
        id: '12',
        icon: '/images/students-corner/icon-12.svg',
        directory:
          'https://mtu.edu.ng/uploads/2024-2025_Postgraduate_School_Advertisement.pdf',
        text: 'Postdraduate School Advert',
      },
    ],
  },
];

export default function AcademicPaths() {
  return (
    <section className="bg-[#1E1E1E] px-6 py-12 lg:px-12 lg:py-24">
      <h3 className="font-sans text-2xl font-medium leading-[62.28px] tracking-[-4%] text-white lg:text-4xl">
        Academic Paths
      </h3>
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
                    target="_blank"
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
