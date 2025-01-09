import Navigation from '@/components/programmes/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function Hero() {
  return (
    <section className="p-12">
      <div className="gap-12 lg:flex">
        <div>
          <Navigation />
          <article className="h-auto w-auto">
            <p className="mb-6 font-mono text-[16px] font-semibold uppercase leading-[25.6px] tracking-[-3%] text-[#6F6F6F]">
              department of computer science and mathematics
            </p>
            <div className="mb-6 font-whyte text-4xl font-bold leading-9 tracking-[3%] text-[#84B000] lg:text-6xl xl:text-[96px] xl:leading-[96px]">
              <h1 className="w-auto font-whyte text-[56px] font-bold leading-[67.2px] tracking-[-3%] text-[#84B000]">
                BSc. COMPUTER SCIENCE
              </h1>
            </div>
            <p className="font-sans font-medium leading-8 tracking-[3%] text-[#6F6F6F] lg:text-[16px] xl:text-xl xl:leading-10">
              This programme is designed to prepare you for a career in the
              ever-growing field of technology. You will learn the fundamentals
              of computer science, including programming, data structures,
              algorithms, and operating systems. You will also have the
              opportunity to specialize in a particular area of computer
              science, such as artificial intelligence, machine learning, or
              software engineering.
            </p>
          </article>
          <div className="mt-9 flex items-center gap-6">
            <Link
              href="/"
              target="_blank"
              className="flex h-auto w-fit items-center gap-3 bg-[#6C006D] px-[15px] py-[10px] text-white"
            >
              <span className="leading-[21px]tracking-[-2%] font-mono text-sm font-bold uppercase">
                apply now
              </span>
              <ArrowTopRightIcon width={20} height={20} />
            </Link>
            <article className="flex items-center justify-between gap-2">
              <Image
                src="/images/programmes/nuc-logo.svg"
                width="0"
                height="0"
                alt="NUC logo"
                className="h-[37px] w-[37px]"
              />
              <p className="w-[380px] font-sans text-sm font-normal leading-[22px] tracking-[-4%] text-[#6E6E6E]">
                The computer science programme is accredited by the Nigerian
                University Commission.{' '}
                <Link href="/" className="font-medium text-[#6C006D] underline">
                  Verify here
                </Link>
              </p>
            </article>
          </div>
        </div>
        <Image
          src="/images/programmes/hero-image.png"
          alt="MTU news hero image"
          width="808"
          height="462"
          className="h-auto lg:w-[420px] xl:h-[450px] xl:w-[450px]"
        />
      </div>
    </section>
  );
}
