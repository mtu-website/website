import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function Facilities() {
  return (
    <section className="items-center justify-between gap-16 px-6 py-9 lg:flex lg:px-[108px] lg:py-24">
      <article className="">
        <h4 className="mb-9 font-mono text-[16px] font-semibold uppercase leading-[25.6px] tracking-[-3%] text-[#0E4510]">
          institutions and centers
        </h4>
        <h1 className="mb-9 font-sans text-2xl font-medium leading-[38.4px] tracking-[-3%] text-[#84B000] lg:text-4xl lg:leading-[54px]">
          Centre for Research, Innovation and Collaborations
        </h1>
        <p className="mb-9 font-sans text-[16px] font-normal leading-[28px] tracking-[-3%] text-[#5E5E5E] lg:text-xl lg:leading-8">
          The Centre for Research, Innovation, and Collaborations fosters
          groundbreaking research, drives innovative solutions, and strengthens
          partnerships. It empowers scholars to tackle global challenges and
          create transformative impacts through interdisciplinary collaboration
          and knowledge sharing.
        </p>
        <Link
          href="/why-mtu"
          className="flex w-fit items-center justify-between gap-3 bg-[#6C006D] px-4 py-3 text-white"
        >
          <span className="flex w-fit items-center justify-between font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%]">
            visit website
          </span>{' '}
          <ArrowTopRightIcon className="h-6 w-6" />
        </Link>
      </article>
      <Image
        src="/images/research/facility.png"
        alt="Mountain Top University College of Allied Health Sciences Building"
        width={2000}
        height={2000}
        className="mx-auto mt-12 h-[459.189px] w-[478.89px] lg:mx-0 lg:mt-0"
      />
    </section>
  );
}
