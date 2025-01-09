import Link from 'next/link';
export default function HeroBottom() {
  return (
    <section className="h-auto bg-[url('/images/programmes/bottom-hero-image2.png')] px-6 py-12 lg:px-[120px] lg:py-16">
      <article className="mx-auto w-[310px] py-9 lg:w-[523px] xl:w-[880px]">
        <h1 className="text-center font-sans text-[28px] font-bold leading-[41.72px] tracking-[-4%] text-white lg:text-4xl lg:leading-[53.64px] xl:text-[56px] xl:leading-[80.46px]">
          What&#39;s next?
        </h1>
        <p className="my-6 text-center font-sans text-sm font-medium leading-6 tracking-[-4%] text-[#BFBFBF] lg:my-12 lg:text-[16px] lg:leading-7 xl:text-xl">
          Lorem ipsum dolor sit amet consectetur. Mauris commodo cursus mi
          varius fringilla eget tincidunt. Amet quam praesent tortor sagittis
          nulla aliquam senectus felis donec. Pellentesque eget cursus nunc nec
          ut eget pretium
        </p>
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
          <Link
            href="/"
            target="_blank"
            className="block w-fit rounded-[1px] bg-[#6C006D] px-6 py-4 font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%] text-white lg:text-[18px] lg:leading-[27px]"
          >
            start your application
          </Link>
          <Link
            href="/"
            target="_blank"
            className="block w-fit rounded-[1px] bg-transparent px-6 py-4 font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%] text-white lg:text-[18px] lg:leading-[27px]"
          >
            get your fee breakdown
          </Link>
        </div>
      </article>
    </section>
  );
}
