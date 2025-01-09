import Link from 'next/link';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const journalLinks = [
  {
    id: '1',
    link: 'mtu-mujast',
    href: 'https://mujast.mtu.edu.ng',
  },
  {
    id: '2',
    link: 'mtu-jhumass',
    href: 'https://jhumass.mtu.edu.ng/',
  },
];

export default function Journals() {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-6 bg-[#FED7FF] px-6 py-9 lg:gap-24 lg:px-[108px] lg:py-24 xl:flex-row">
      <div>
        <article className="">
          <h4 className="mb-9 font-mono text-[16px] font-semibold uppercase leading-[25.6px] tracking-[-3%] text-[#BD2BBF]">
            journals
          </h4>
          <h1 className="mb-9 font-sans text-2xl font-medium leading-[54px] tracking-[-3%] text-[#000000] sm:text-[32px] lg:text-4xl">
            Our Research Journals
          </h1>
          <p className="mb-9 font-sans text-[16px] font-normal leading-7 tracking-[-3%] text-[#565656] sm:text-[18px] sm:leading-9 lg:text-xl lg:leading-8">
            Explore cutting-edge research and scholarly articles published by
            our esteemed faculty and students. These journals cover diverse
            fields, offering valuable insights into advancements across
            disciplines and contributing to global knowledge.
          </p>
        </article>
        <div>
          {journalLinks.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b-[1px] border-b-[#E6E6E6] py-4 text-[18px] leading-[27px] text-[#6C006D] sm:text-xl sm:leading-[30px]"
            >
              <Link
                href={item.href}
                target="_blank"
                className="font-sans text-xl font-medium uppercase leading-[30px] tracking-[-4%]"
              >
                {item.link}
              </Link>
              <ArrowRightIcon className="h-auto w-5" />
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/research/journals.png"
        width={2000}
        height={2000}
        alt="Mountain Top University Research Papers"
        className="max-h-[347px] w-[591.58px]"
      />
    </section>
  );
}
