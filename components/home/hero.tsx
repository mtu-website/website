import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-black bg-[url('/images/home/hero-background-mobile.PNG')] bg-[center_top_-70px] bg-repeat sm:bg-[center_top_0px] lg:h-fit lg:bg-transparent lg:bg-[url('/images/home/hero-background.png')] lg:bg-cover xl:bg-[center_top_-100px]">
      <div className="flex flex-col-reverse items-stretch justify-between lg:flex-row lg:gap-4">
        <div className="px-6 py-24 lg:py-0 xl:px-12">
          <Image
            src="/images/home/logo.svg"
            alt="Mountain Top University Logo"
            width="0"
            height="0"
            className="hidden h-[91px] w-[207px] lg:my-12 lg:block"
          />
          <Image
            src="/images/home/logo-2.svg"
            alt="Mountain Top University Logo"
            width="0"
            height="0"
            className="h-[91px] w-[207px] lg:my-12 lg:hidden"
          />
          <article className="my-16 lg:w-[380px] lg:px-6 xl:my-28 xl:w-[600px]">
            <h1 className="font-neue text-[28px] font-bold leading-[42px] tracking-[-5%] text-[#FFFFFF4D] lg:my-2 lg:w-[380px] lg:text-4xl lg:leading-[80px] lg:text-[#0000004D] xl:my-6 xl:w-[640px] xl:text-[82px]">
              Unlock your <span className="text-[#84B00080]">potential</span>
            </h1>
            <div className="my-3 h-[5px] w-[320px] rounded-[20px] bg-white lg:h-[10px] lg:w-[380px] lg:bg-[#0000004D] xl:w-full"></div>
            <p className="font-neue text-sm font-normal leading-7 tracking-[-3%] text-[#FFFFFF] lg:text-[16px] lg:leading-8 lg:text-[#5E5E5E] xl:text-xl xl:leading-10">
              Mountain Top University is where your dreams take flight. Ranked
              1st in Nigeria for Quality Education, Mountain Top University
              offers more than just academics. We provide the support,
              opportunities, and experiences you need to succeed.
            </p>
          </article>
        </div>
        <div className="hidden lg:flex lg:gap-6 2xl:gap-12">
          <div className="xl:pt-22 h-full lg:w-[400px] lg:pt-10 xl:w-[450px] 2xl:w-[503.67px]">
            <Image
              src="/images/home/hero-image.png"
              alt="Mountain Top University Female Student - Goodness"
              width={2000}
              height={2000}
              className="h-full w-full object-contain object-bottom lg:block"
            />
          </div>
          <div className="hidden h-full w-[72px] bg-[#475E00] py-10 xl:block">
            <div className="flex h-36 items-center justify-center py-24">
              <Link
                href="/study-at-mtu/undergraduate"
                className="flex h-[44px] min-w-[150px] rotate-90 items-center gap-6 lg:h-[72px]"
              >
                <p className="-rotate-180 font-sans text-[16px] font-medium uppercase leading-[19.36px] tracking-[10%] text-[#FFFFFFAD]">
                  find a course
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
