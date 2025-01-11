import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const halls = [
  {
    id: '1',
    name: 'Mountain Top University - Elizabeth New Hall',
    imageUrl: '/images/why-mtu/hall_1.png',
    mobileImageUrl: '/images/why-mtu/hall_1_mobile.png',
  },
  {
    id: '2',
    name: 'Mountain Top University - Daniel New Hall',
    imageUrl: '/images/why-mtu/hall_1.png',
    mobileImageUrl: '/images/why-mtu/hall_2_mobile.png',
  },
];

export default function Accommodation() {
  return (
    <section className="my-12 lg:my-24">
      <article className="lg:w-[748.92px]">
        <h2 className="mb-6 font-sans text-2xl font-medium leading-[41.52px] tracking-[-3%]">
          Living and Accomodation
        </h2>
        <div className="font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F]">
          <p className="mb-6">
            Living on campus feels like a home away from home. Our accommodation
            options are designed to suit every need, offering safe, comfortable,
            and modern living spaces where students can focus on their studies
            and personal growth. With round-the-clock security, MTU’s
            accommodation services offer spacious rooms, with all basic
            amenities for the convenience of the students and families.
          </p>
          <p>
            Beyond just housing, MTU’s residential life is vibrant and
            community-focused. Students develop friendly relationships, group
            study, and facilities for group discussion and leisure. Each hall of
            residence fosters a sense of belonging, with on-site support staff
            and facilities to handle any need. Our conducive hostels and
            world-class health facilities support a comfortable and safe stay
            for all residents.{' '}
          </p>
        </div>
      </article>
      <div className="my-12 lg:my-24">
        <Carousel>
          <div>
            <div className="absolute right-12 top-2 xl:top-0">
              <div className="w-fit bg-red-800">
                <CarouselPrevious className="-left-6 h-8 w-8 rounded-[1px] bg-[#6C006D] text-white hover:text-[#6C006D]" />
                <CarouselNext className="h-8 w-8 rounded-[1px] bg-[#6C006D] text-white hover:text-[#6C006D]" />
              </div>
            </div>
          </div>

          <CarouselContent className="mt-12">
            {halls.map((hall) => (
              <CarouselItem
                key={hall.id}
                className="flex w-full sm:basis-2/3 lg:gap-6"
              >
                <div className="relative block h-[240px] w-fit overflow-hidden sm:hidden">
                  <Image
                    src={hall.imageUrl}
                    alt={hall.name}
                    width={2000}
                    height={2000}
                    className="h-full w-fit"
                  />
                </div>
                {/* image */}
                <div className="relative hidden w-fit overflow-hidden sm:block">
                  <Image
                    src={hall.imageUrl}
                    alt={hall.name}
                    width={2000}
                    height={2000}
                    className="h-[200px] w-full object-cover sm:h-[456px] sm:w-[970.63px] sm:object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
