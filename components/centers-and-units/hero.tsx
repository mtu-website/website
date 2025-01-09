import Image from 'next/image';
import Navigation from './navigation';

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20">
        <article className="items-stretch justify-around px-6 py-12 lg:flex lg:flex-col lg:pl-12 lg:pt-12">
          <Navigation />
          <div>
            <h1 className="my-6 w-auto font-whyte text-[28px] font-medium uppercase leading-[33.6px] tracking-[-3%] text-[#84B000] lg:text-4xl lg:leading-[43.2px] xl:text-[56px] xl:leading-[72.24px]">
              Centers and Units
            </h1>
            <p className="font-sans text-[16px] font-medium leading-8 tracking-[3%] text-[#6F6F6F] lg:text-[16px] xl:text-xl xl:leading-9">
              At Mountain Top University, our centers and units are the heart of
              innovation, collaboration, and excellence. From groundbreaking
              research to community-driven initiatives, these hubs empower
              students, faculty, and industry leaders to push the boundaries of
              knowledge. Each center and unit is dedicated to addressing global
              challenges, fostering interdisciplinary learning, and advancing
              impactful solutions that shape a brighter future.
            </p>
          </div>
        </article>
        <div className="h-[234px] lg:h-[708px] lg:min-w-[558px] xl:h-[658px] xl:w-[567px]">
          <Image
            src="/images/centers-and-units/hero-image.png"
            alt="Default"
            width={2000}
            height={2000}
            className="h-full w-full object-cover object-center lg:block"
          />
        </div>
      </div>
    </section>
  );
}
