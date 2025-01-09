import Image from 'next/image';
export default function Hero() {
  return (
    <section className="bg-[#1E1E1E]">
      <div className="mb-6 h-[240px] w-auto overflow-hidden lg:h-[660px]">
        <Image
          src="/images/staff-corner/hero-image.png"
          alt="Mountain Top University Administrative Block"
          width={2000}
          height={2000}
          className="h-full w-full object-cover object-left lg:object-top"
        />
      </div>

      <article className="flex flex-col justify-between gap-6 px-6 lg:flex-row lg:items-center lg:gap-0 lg:px-12 lg:py-24">
        <div className="w-fit">
          <h1 className="max-w-[165px] font-sans text-[28px] font-semibold tracking-[-4%] text-white lg:text-[45px] lg:leading-[60px] xl:max-w-full xl:text-[56px]">
            Staff&apos; Corner
          </h1>
          <h1 className="font-sans text-[28px] font-semibold leading-[60px] tracking-[-4%] text-white lg:text-[45px] xl:text-[56px]"></h1>
          <div className="mt-3 h-[14.66px] w-full bg-white lg:w-[220px] xl:w-full"></div>
        </div>
        <div className="w-auto lg:w-[526.4px] xl:w-[1000px]">
          <p className="font-sans text-[16px] font-normal leading-[30px] tracking-[-3%] text-white">
            Welcome to the Staff Corner – the heartbeat of Mountain Top
            University&apos;s success! This dedicated space is designed to equip
            you with the tools and resources needed to drive academic
            excellence, innovation, and collaboration. Access administrative
            services, and discover opportunities for professional growth. As
            vital contributors to MTU&apos;s mission, your dedication inspires
            students and shapes our institution&apos;s future. Together, we
            foster a culture of excellence, impact, and progress. Whether
            you&apos;re teaching, researching, or supporting operations, this is
            your platform to shine. Thank you for making MTU a beacon of
            knowledge and success!
          </p>
        </div>
      </article>
    </section>
  );
}
