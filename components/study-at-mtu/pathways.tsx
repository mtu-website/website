import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@radix-ui/react-icons';

const academicPathwaysLinks = [
  {
    id: 1,
    image: '/images/study-at-mtu/undergraduate.png',
    title: 'Undergraduate',
    href: '/study-at-mtu/undergraduate',
    alt: 'Mountain Top University Students in Class',
  },
  {
    id: 2,
    image: '/images/study-at-mtu/foundation.png',
    title: 'Foundation Studies',
    href: '/study-at-mtu/undergraduate',
    alt: 'Mountain Top University Students',
  },
  {
    id: 3,
    image: '/images/study-at-mtu/postgraduate.png',
    title: 'Postgraduate',
    href: 'https://postgraduate.mtu.edu.ng',
    alt: 'Mountain Top University Graduate Hat',
  },
  {
    id: 4,
    image: '/images/study-at-mtu/transfer.png',
    title: 'Transfer to MTU',
    href: '/study-at-mtu/undergraduate',
    alt: 'Mountain Top University Female Student',
  },
];

export default function Pathways() {
  return (
    <section className="p-6 xl:px-6 xl:py-12">
      <h2 className="mb-6 text-center font-sans text-[28px] font-semibold capitalize tracking-[-3%] text-[#84B000] lg:text-[40px] xl:leading-[69.2px]">
        academic pathways
      </h2>

      {/* Links Container */}
      <div className="flex items-center justify-center">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-24">
          {academicPathwaysLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="xl:w-[477px]"
              style={{
                boxShadow: '0px 0px 6px 0px #00000040',
              }}
            >
              <Image
                src={link.image}
                alt={link.alt}
                width={2000}
                height={2000}
                className="h-auto w-full lg:h-[321.25px]"
              />
              <div className="flex items-center justify-between p-6 lg:px-[37.5px] lg:py-12">
                <p className="font-sans text-[16px] font-medium leading-8 tracking-[-5%]">
                  {link.title}
                </p>
                <ArrowRightIcon className="h-auto w-[22.31px]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
