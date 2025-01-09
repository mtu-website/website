import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-4 py-6 lg:px-12 lg:pb-24">
      <div className="mb-6 flex w-[250px] items-center justify-between rounded-[29px] bg-[#FFF1FF] p-2 font-mono text-xs font-bold uppercase leading-[19.2px] tracking-[3%] lg:leading-[22.4px]">
        <Link
          href=""
          className="mr-3 w-[107.5px] rounded-[29px] bg-[#BD2BBF] px-[10px] py-[5px] text-center text-white"
        >
          News
        </Link>
        <Link href="/events" className="w-[107.5px] text-center text-[#FDA5FF]">
          Events
        </Link>
      </div>
      <article>
        <h1 className="my-6 font-whyte text-[28px] font-bold uppercase leading-[42px] tracking-[-5%] text-[#84B000] lg:text-4xl lg:leading-[81.84px] xl:text-[56px]">
          Latest News at MTU
        </h1>
        <p className="my-3 font-sans text-sm font-medium leading-[28px] tracking-[3%] text-[#2E2E2E] sm:text-[16px] sm:leading-8 lg:my-6 lg:text-xl xl:leading-9">
          Check out the latest news on Mountain Top University. Be the first to
          know what’s happening at Mountain Top University. Get insights into
          our academic breakthroughs, student successes, and much more.
        </p>
      </article>
      <div className="h-[231px] w-full overflow-hidden sm:h-[400px] lg:h-auto lg:w-full">
        <Image
          src="/images/news/hero-image2.png"
          alt="MTU news hero image"
          width={2000}
          height={2000}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
