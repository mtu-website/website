import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const images = [
  {
    id: '1',
    alt: 'Mountain Top University Biology Laboratory',
    src: '/images/why-mtu/biology-lab.png',
  },
  {
    id: '2',
    alt: 'Mountain Top University Library',
    src: '/images/why-mtu/library.png',
  },
  {
    id: '3',
    alt: 'Mountain Top University Sport Centre',
    src: '/images/why-mtu/sport-centre.png',
  },
];
export default function Facilities() {
  return (
    <div className="my-12 flex lg:my-0 lg:h-[900px] xl:items-start xl:px-12">
      <div className="my-6 mr-16 hidden w-fit flex-col items-center justify-center xl:flex">
        <div className="flex h-[44px] w-[44px] animate-ping items-center justify-center rounded-[50%] border-2 border-[#6C006D]">
          <div className="h-[32px] w-[32px] rounded-[50%] bg-[#6C006D]"></div>
        </div>
        <div
          className="min-h-[900px] border-l-[2px] border-dashed border-[#6C006D] opacity-30"
          style={{ lineHeight: '1rem' }}
        ></div>
      </div>
      <section className="flex justify-between xl:w-full">
        <article className="xl:w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-sans text-[35px] font-semibold capitalize tracking-[-5%] text-[#84B000] lg:text-[56px] lg:leading-[84px] xl:text-[64.56px] xl:leading-[96.84px]">
              our facilities
            </h1>
          </div>
          <article className="xl:pr-36">
            <p className="my-6 font-sans font-medium leading-[28px] tracking-[-3%] text-[#6F6F6F] lg:text-[16px] xl:min-w-[800px]">
              <span className="font-semibold italic text-[#84B000]">
                MTU is equipped
              </span>{' '}
              with modern facilities that support every step of the learning
              journey. We offer state-of-the-art laboratories equipped with
              modern technology, giving students a hands-on industry-based
              experience thereby giving students adequate training tailored to
              their specific discipline.
            </p>
            <p className="my-6 font-sans font-medium leading-[28px] tracking-[-3%] text-[#6F6F6F] lg:text-[16px] xl:min-w-[800px]">
              <span className="font-semibold italic text-[#84B000]">
                With air-conditioned classrooms,
              </span>{' '}
              we ensure a comfortable learning experience throughout the
              academic year. Students can study without distractions in an
              ambient environment and constant temperature. MTU’s high-tech
              library provides access to a wealth of resources and research
              materials. We are a hub of knowledge, designed to support both
              academic success and intellectual curiosity.
            </p>
            <p className="my-6 font-sans font-medium leading-[28px] tracking-[-3%] text-[#6F6F6F] lg:text-[16px] xl:min-w-[800px]">
              We offer our students{' '}
              <span className="font-semibold italic text-[#84B000]">
                a fully digitised, Wi-fi enabled campus environment,
              </span>{' '}
              ensuring seamless high-speed connectivity across all facilities,
              allowing them to stay connected in classrooms, libraries, study
              areas, hostels and recreational spaces, enhancing their learning
              and daily campus experience.
            </p>
          </article>
          <Carousel className="my-6">
            <CarouselContent className="flex">
              {images.map((image) => (
                <CarouselItem key={image.id} className="max-w-fit">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={2000}
                    height={2000}
                    className="h-[198px] w-[288px] lg:h-[392px] lg:w-[488px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </article>
      </section>
    </div>
  );
}
