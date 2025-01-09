import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

const studyAtMtuOtherLinks = [
  {
    id: 1,
    title: 'Postgraduate',
    image: '/images/alumni/hero-image.png',
    href: '/study-at-mtu/postgraduate',
  },
  {
    id: 2,
    title: 'Transfer to MTU',
    image: '/images/study-at-mtu/transfer.png',
    href: '/study-at-mtu/undergraduate',
  },
];

export default function Redirects() {
  return (
    <section className="mb-9 py-9">
      <h3 className="mb-9 text-center font-whyte text-[25px] font-medium leading-10 tracking-[5%]">
        Other Links
      </h3>
      {/* Links Container */}
      <div className="flex items-center justify-center">
        <div className="grid gap-24 sm:grid-cols-2">
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
                alt="MTU Graduate Pathway"
                width={2000}
                height={2000}
                className="h-auto w-[270px] sm:h-[380px] sm:w-[400px]"
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
