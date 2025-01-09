import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{
        background:
          'linear-gradient(106.78deg, #000000 30.69%, #666666 188.38%)',
      }}
      className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:pl-12"
    >
      <article className="px-4 py-12 lg:pr-36">
        <h1 className="font-whyte text-[28px] font-bold uppercase leading-[67.2px] tracking-[-3%] text-white lg:mb-6 lg:text-[45px] lg:leading-[54px] xl:text-[56px]">
          Alumni
        </h1>
        <p className="font-sans text-[16px] font-medium leading-[30px] tracking-[-4%] text-[#6F6F6F] lg:text-[18px] lg:leading-8 xl:text-xl xl:leading-9">
          Rooted in a strong foundation of moral and academic excellence, MTU
          Alumni don’t just aim for the top; they shape it. Each graduate
          carries the MTU legacy of integrity, excellence, and leadership,
          driving meaningful change across the globe. Our alumni redefine
          success by combining knowledge with purpose. Our Alumni’s
          accomplishments serve as a testament to the transformative power of an
          MTU education, a legacy that inspires future generations.
        </p>
      </article>
      <Image
        src="/images/alumni/hero-image.png"
        width={2000}
        height={2000}
        alt="Mountain Top University Alumnus"
        className="hidden lg:block lg:h-auto lg:w-[422px] xl:h-[784.81px] xl:w-[585px]"
      />
      <div className="block h-[282px] w-full overflow-hidden sm:h-[482px] lg:hidden">
        <Image
          src="/images/alumni/hero-image.png"
          width={2000}
          height={2000}
          alt="Mountain Top University Alumnus"
          className="h-auto w-auto object-cover"
        />
      </div>
    </section>
  );
}
