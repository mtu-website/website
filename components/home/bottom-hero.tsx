import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function BottomHero() {
  return (
    <section className="lg:justify-none flex flex-col-reverse items-center justify-center bg-[#080808] lg:flex-row">
      <article className="p-12 text-center opacity-100 lg:text-left xl:w-[800px] xl:p-24">
        <p className="font-whyte text-[28px] font-bold uppercase leading-[30px] tracking-[-2%] text-[#A8D915] lg:text-[35px] lg:leading-[38.5px] lg:text-[#941196] xl:text-[45px] xl:leading-[49.5px]">
          We are
        </p>
        <p className="font-whyte text-[28px] font-bold uppercase leading-[40px] tracking-[-2%] text-white underline decoration-1 underline-offset-8 lg:text-[35px] lg:leading-[48.5px] xl:text-[45px] xl:leading-[59.5px]">
          mountain top university
        </p>
        <p className="my-6 font-sans text-sm font-medium leading-[25.2px] tracking-[-4%] text-[#FAFFEA] lg:text-[16px] lg:leading-[28.8px] xl:my-12">
          Mountain Top University is the official varsity institution of
          Mountain of Fire and Miracles Ministries
        </p>
        <Link
          href="/study-at-mtu/undergraduate"
          target="_blank"
          className="mx-auto flex h-[43px] w-fit items-center justify-between gap-4 bg-[#6C006D] px-6 py-3 font-mono text-[16px] font-semibold uppercase leading-[18.78px] tracking-[-4%] text-white lg:mx-0"
        >
          <span>apply now</span> <ArrowTopRightIcon height={13} width={13} />
        </Link>
      </article>
      <div className="h-full w-full overflow-hidden sm:h-[280px] lg:block lg:h-[773px] xl:h-full">
        <Image
          src="/images/home/mask-image.png"
          alt="Mountain Top University Students at the Administrative Building"
          width={2000}
          height={2000}
          className="h-full w-full object-cover object-center opacity-70 lg:opacity-100"
        />
      </div>
    </section>
  );
}
