import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

const studyAtMtuOtherLinks = [
  {
    id: 1,
    title: 'Student Life at MTU',
    image: "/images/study-at-mtu/students' life link.png",
    href: '/why-mtu/#campus-life',
    alt: 'Mountain University Students smiling',
  },
  {
    id: 2,
    title: 'Student Testimonials',
    image: '/images/study-at-mtu/student testimonials link.png',
    href: '/why-mtu/#testimonials',
    alt: 'Mountain University Female Student smiling',
  },
];

export default function Redirects() {
  return (
    <section className="pb-9 pt-6 xl:px-6 xl:py-12">
      <h3 className="mb-9 text-center font-whyte text-[25px] font-medium leading-10 tracking-[5%]">
        Other Links
      </h3>
      {/* Links Container */}
      <div className="flex items-center justify-center">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-24">
          {studyAtMtuOtherLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="w-auto"
              style={{
                boxShadow: '0px 0px 6px 0px #00000040',
              }}
            >
              <Image
                src={link.image}
                alt={link.alt}
                width={2000}
                height={2000}
                className="h-auto w-[300px] lg:h-[356px] lg:w-[318px]"
              />
              <div className="flex items-center justify-between px-[37.5px] py-6">
                <p className="font-sans text-[16px] font-medium leading-8 tracking-[-5%]">
                  {link.title}
                </p>
                <ArrowTopRightIcon className="h-[22.2px] w-[22.31px]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
