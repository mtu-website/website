import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-4 py-6 lg:px-12 lg:pb-24">
      <div className="items-center justify-between lg:flex">
        <div>
          <div className="mb-6 flex w-[250px] items-center justify-between rounded-[29px] bg-[#FFF1FF] p-2 font-mono text-xs font-bold uppercase leading-[19.2px] tracking-[3%] lg:mb-12 lg:leading-[22.4px]">
            <Link
              href="/news"
              className="w-[107.5px] text-center text-[#FDA5FF]"
            >
              News
            </Link>
            <Link
              href=""
              className="w-[107.5px] rounded-[29px] bg-[#BD2BBF] px-[10px] py-[5px] text-center text-white"
            >
              Events
            </Link>
          </div>
          <article>
            <h1 className="my-6 font-whyte text-[28px] font-bold uppercase leading-[42px] tracking-[-5%] text-[#84B000] lg:text-4xl lg:leading-[81.84px] xl:text-[56px]">
              Featured Events
            </h1>
            <p className="my-3 font-sans text-sm font-medium leading-[28px] tracking-[3%] text-[#2E2E2E] sm:text-[16px] sm:leading-8 lg:max-w-[594px] lg:text-xl xl:max-w-[1094px] xl:leading-9">
              Check out the latest events on Mountain Top University. Be the
              first to know what’s happening at Mountain Top University. Get
              insights into our academic breakthroughs, student successes, and
              much more.
            </p>
          </article>
        </div>
        <div className="h-[231px] w-full overflow-hidden sm:h-[400px] lg:my-0 lg:ml-6 lg:h-full lg:w-fit">
          <Image
            src="/images/events/hero_image.png"
            alt="Mountain Top University Events"
            width={2000}
            height={2000}
            className="object-cover object-center sm:h-auto sm:w-full lg:w-[594px] xl:h-auto"
          />
        </div>
      </div>
    </section>
  );
}
