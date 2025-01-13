import { ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[url('/images/odl/hero-background.png')] py-12 lg:h-fit lg:py-0">
      <div className="flex items-center justify-between">
        <article className="my-auto h-auto w-[880px] px-6 lg:px-12 xl:px-24">
          <h1 className="font-sans text-[36px] font-medium leading-[45px] tracking-[-4%] text-white lg:text-[45px] lg:leading-[56px] xl:text-[64px] xl:leading-[74px]">
            Bringing quality education to your{' '}
            <span className="italic text-[#84B000]">doorstep.</span>
          </h1>
          <p className="my-12 font-sans text-sm font-medium leading-7 tracking-[-4%] text-[#FFFFFF99] lg:text-[16px]">
            Mountain Top University (MTU) extends its academic excellence beyond
            traditional classrooms through its Open Distance and e-Learning
            (ODeL) Center. Designed to meet the needs of learners, we offer
            innovative, flexible, and accessible education, ensuring students
            achieve their academic goals from anywhere in the world.
          </p>
          <div className="flex flex-row gap-6">
            <Link
              href="https://applications.mtu.edu.ng/(S(isvlc14wsyqwb4q1arxk15j5))/default.aspx"
              className="flex h-[47px] w-[145px] items-center justify-center gap-6 rounded-[2px] bg-[#6C006D] px-[10px] py-[16px]"
            >
              <span className="font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%] text-white">
                apply now
              </span>
              <ArrowTopRightIcon className="h-[15px] w-[15px] text-white" />
            </Link>
            <Link
              href="https://odl.mtu.edu.ng/"
              className="flex h-[47px] w-[145px] items-center justify-center gap-6 rounded-[2px] border-2 border-[#84B000] bg-transparent px-[10px] py-[16px]"
            >
              <span className="font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%] text-[#84B000]">
                visit lms
              </span>
              <ArrowRightIcon className="h-[15px] w-[15px] text-[#84B000]" />
            </Link>
          </div>
        </article>
        <div></div>
        <Image
          src="/images/odl/hero-image2.svg"
          width="0"
          height="0"
          alt="Mountain Top University ODL Student"
          className="lg:h-full lg:w-[475px] xl:h-[768px] xl:w-[602px]"
        />
      </div>
    </section>
  );
}
