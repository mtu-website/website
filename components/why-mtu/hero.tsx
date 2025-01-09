import Image from 'next/image';
import Navigation from './navigation';

export default function Hero() {
  return (
    <section className="mb-9 h-fit bg-[url('/images/why-mtu/hero-background.png')] bg-cover bg-no-repeat lg:h-auto">
      <div className="block h-[232px] lg:hidden">
        <Image
          src="/images/why-mtu/hero-image.png"
          alt="Mountain Top University Scenery"
          width={548}
          height={784}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative flex flex-col-reverse items-stretch lg:flex-row lg:gap-4 xl:gap-24">
        <article className="my-auto px-8 py-24 lg:py-0 xl:px-12">
          <Navigation />
          <p className="my my-6 font-sans text-xs font-medium uppercase leading-[14px] tracking-[-5%] text-[#6F6F6F] sm:text-[16px] sm:leading-6">
            study with us
          </p>
          <h1 className="my-6 font-whyte text-[28px] font-bold uppercase leading-[42px] tracking-[-5%] text-[#84B000] lg:text-4xl lg:leading-[81.84px] xl:text-[56px]">
            why mtu
          </h1>
          <p className="my-6 font-sans text-sm font-medium leading-7 tracking-[-3%] text-[#5E5E5E] lg:text-[16px] lg:leading-8 xl:text-xl xl:leading-10">
            Find your future at MTU, where academic excellence thrives. Mountain
            Top University isn’t just a university, it’s a place where your
            potential is nurtured. With a supportive community, outstanding
            facilities, and a serene campus, MTU is designed to bring out the
            best in every student. Join us and discover what sets MTU apart.
          </p>
        </article>
        <div className="lg:h-[748px] lg:min-w-[420px] xl:min-w-[548px]">
          <Image
            src="/images/why-mtu/hero-image.png"
            alt="Mountain Top University Scenery"
            width={2000}
            height={2000}
            className="hidden h-full w-full object-cover object-center lg:block"
          />
        </div>
      </div>
    </section>
  );
}
