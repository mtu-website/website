import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20">
        <div className="px-6 py-12 lg:pl-12 lg:pt-12">
          <article>
            <Navigation />
            <p className="my-6 font-mono text-xs font-semibold uppercase leading-[25.6px] tracking-[-3%] text-[#6F6F6F] sm:text-sm lg:my-12 lg:text-[16px]">
              department of computer science and mathematics
            </p>
            <div className="mb-6">
              <h1 className="w-auto font-whyte text-[28px] font-medium uppercase leading-[33.6px] tracking-[-3%] text-[#84B000] lg:text-4xl lg:leading-[43.2px] xl:text-[56px] xl:leading-[72.24px]">
                BSc. COMPUTER SCIENCE
              </h1>
            </div>
            <p className="font-sans font-medium leading-8 tracking-[3%] text-[#6F6F6F] lg:text-[16px] xl:text-xl xl:leading-9">
              This programme is designed to prepare you for a career in the
              ever-growing field of technology. You will learn the fundamentals
              of computer science, including programming, data structures,
              algorithms, and operating systems. You will also have the
              opportunity to specialize in a particular area of computer
              science, such as artificial intelligence, machine learning, or
              software engineering.
            </p>
          </article>
          <div>
            <article className="my-6 flex items-center gap-2">
              <Image
                src="/images/programmes/nuc-logo.svg"
                width="0"
                height="0"
                alt="NUC logo"
                className="h-[37px] w-[37px]"
              />
              <p className="w-[380px] font-sans text-xs font-normal leading-[22px] tracking-[-4%] text-[#6E6E6E] sm:text-sm">
                The computer science programme is accredited by the Nigerian
                University Commission.{' '}
                <Link href="/" className="font-medium text-[#6C006D] underline">
                  Verify here
                </Link>
              </p>
            </article>
            <Link
              href="/"
              target="_blank"
              className="flex h-[60px] w-[180px] items-center justify-between gap-3 bg-[#941196] px-[16px] py-[10px] text-white"
            >
              <span className="leading-[21px]tracking-[-2%] font-mono text-sm font-bold uppercase">
                apply now
              </span>
              <ArrowTopRightIcon width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className="h-[360px] lg:h-[873px] lg:min-w-[408px] xl:min-w-[552px]">
          <Image
            src="/images/programmes/hero-image.svg"
            alt="Default"
            width="0"
            height="0"
            className="h-full w-full object-cover object-center lg:block"
          />
        </div>
      </div>
    </section>
  );
}
