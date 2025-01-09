import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Images = [
  {
    id: '1',
    alt: 'Mountain Top University Scenery',
    src: '/images/why-mtu/serene_environment_1.png',
  },
  {
    id: '2',
    alt: 'Mountain Top University Scenery',
    src: '/images/why-mtu/serene_environment_2.png',
  },
  {
    id: '3',
    alt: 'Mountain Top University Scenery',
    src: '/images/why-mtu/serene_environment_3.png',
  },
  {
    id: '4',
    alt: 'Mountain Top University Scenery',
    src: '/images/why-mtu/serene_environment_4.png',
  },
];

export default function Information() {
  return (
    <div className="my-12 flex lg:my-0 lg:h-[700px] xl:items-start xl:px-12">
      <div className="my-6 mr-16 hidden w-fit flex-col items-center justify-center xl:flex">
        <div className="flex h-[44px] w-[44px] animate-ping items-center justify-center rounded-[50%] border-2 border-[#6C006D]">
          <div className="h-[32px] w-[32px] rounded-[50%] bg-[#6C006D]"></div>
        </div>
        <div
          className="min-h-[700px] border-l-[2px] border-dashed border-[#6C006D] opacity-30"
          style={{ lineHeight: '1rem' }}
        ></div>
      </div>
      <section className="flex justify-between xl:w-full">
        <article className="xl:w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-sans text-[35px] font-semibold capitalize tracking-[-5%] text-[#84B000] lg:text-[56px] lg:leading-[84px] xl:text-[64.56px] xl:leading-[96.84px]">
              serene environment
            </h1>

            <p className="hidden font-sans text-xl capitalize leading-8 tracking-[-3%] text-[#6C006D] lg:block">
              <span className="font-bold">ibafo,</span>{' '}
              <span className="font-medium">nigeria</span>
            </p>
          </div>

          <p className="my-3 font-sans font-medium leading-[28px] tracking-[-3%] text-[#6F6F6F] lg:my-0 lg:text-[16px] xl:w-[800px]">
            MTU’s campus is a{' '}
            <span className="italic text-[#84B000]">breath of fresh air,</span>{' '}
            away from the distractions of city life. Surrounded by greenery and
            open spaces, it’s the perfect place to focus, reflect, and grow.
            Here, students can escape the daily rush and find a calm space
            that’s ideal for learning and personal growth.
          </p>
          <Carousel className="my-6">
            <CarouselContent className="flex">
              {Images.map((image) => (
                <CarouselItem key={image.id} className="max-w-fit">
                  {/* <div className="h-[198px] w-[288px] overflow-hidden lg:h-[392px] lg:w-[488px]"> */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={2000}
                    height={2000}
                    className="h-[198px] w-[288px] lg:h-[392px] lg:w-[488px]"
                    priority
                  />
                  {/* </div> */}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </article>
      </section>
    </div>
  );
}
