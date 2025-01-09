import Image from 'next/image';
import Navigation from './navigation';
export default function Hero() {
  return (
    <section className="mb-9 h-screen bg-[url('/images/why-mtu/hero-background.png')] bg-cover bg-no-repeat lg:h-full">
      <div className="block h-[347px] lg:hidden">
        <Image
          src="/images/undergraduate/hero-image.png"
          alt="Mountain Top University Learning Session"
          width={2000}
          height={2000}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative flex flex-col-reverse items-stretch lg:flex-row lg:gap-4 xl:gap-24">
        <article className="my-auto px-4 py-24 lg:py-0 xl:px-12">
          <Navigation />

          <h1 className="my-6 font-whyte text-[28px] font-bold uppercase leading-[42px] tracking-[-5%] text-[#84B000] lg:text-4xl lg:leading-[81.84px] xl:text-[56px]">
            undergraduate programmes
          </h1>
          <p className="my-6 font-sans text-sm font-medium leading-7 tracking-[-3%] text-[#5E5E5E] sm:text-[16px] sm:leading-8 xl:text-xl xl:leading-10">
            Find your future at MTU, where academic excellence thrives. Mountain
            Top University isn’t just a university, it’s a place where your
            potential is nurtured. With a supportive community, outstanding
            facilities, and a serene campus, MTU is designed to bring out the
            best in every student. Join us and discover what sets MTU apart.
          </p>
        </article>
        <div className="lg:h-[748px] lg:min-w-[420px] xl:min-w-[548px]">
          <Image
            src="/images/undergraduate/hero-image.svg"
            alt="Default"
            width="0"
            height="0"
            className="hidden h-full w-full object-cover object-center lg:block"
          />
        </div>
      </div>
    </section>
  );
}
