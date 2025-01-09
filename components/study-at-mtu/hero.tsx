import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mb-9 h-screen bg-[url('/images/why-mtu/hero-background.png')] bg-cover bg-no-repeat lg:h-full">
      <div className="block h-[347px] lg:hidden">
        <Image
          src="/images/study-at-mtu/hero-image-2.jpg"
          alt="Mountain Top University Bridge"
          width={2000}
          height={2000}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative flex flex-col-reverse items-stretch lg:flex-row lg:gap-4 xl:gap-24">
        <article className="my-auto px-4 py-24 lg:py-0 xl:px-12">
          <p className="mb-6 font-mono text-[16px] font-medium uppercase leading-6 tracking-[-5%] text-[#5E5E5E]">
            Your Journey Begins Here
          </p>
          <h1 className="my-6 font-whyte text-[28px] font-bold uppercase leading-[42px] tracking-[-5%] text-[#84B000] lg:text-4xl lg:leading-[81.84px] xl:text-[56px]">
            study at mtu
          </h1>
          <p className="my-6 font-sans text-sm font-medium leading-7 tracking-[-3%] text-[#5E5E5E] sm:text-[16px] sm:leading-8 xl:text-xl xl:leading-10">
            At Mountain Top University, we take pride in offering the best
            education in Nigeria. Ranked first in Nigeria for quality education,
            we ensure that every student receives a comprehensive, world-class
            learning experience, preparing them for a successful future.
          </p>
        </article>
        <div className="lg:h-[748px] lg:min-w-[420px] xl:min-w-[548px]">
          <Image
            src="/images/study-at-mtu/hero-image-2.jpg"
            alt="Default"
            width={2000}
            height={2000}
            className="hidden h-full w-full object-cover object-center lg:block"
          />
        </div>
      </div>
    </section>
  );
}
