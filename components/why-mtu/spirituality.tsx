import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const images = [
  {
    id: '1',
    alt: 'mountain top university students reading scriptures',
    imageUrl: '/images/why-mtu/spirituality_image_1.png',
    mobileImageUrl: '/images/why-mtu/spirituality_image_1.png',
  },
  {
    id: '2',
    alt: 'mountain top university students reading praying',
    imageUrl: '/images/why-mtu/spirituality_image_2.png',
    mobileImageUrl: '/images/why-mtu/spirituality_image_2.png',
  },
  {
    id: '3',
    alt: 'mountain top university students listening to the word of God',
    imageUrl: '/images/why-mtu/spirituality_image_3.png',
    mobileImageUrl: '/images/why-mtu/spirituality_image_3.png',
  },
];

export default function Spirituality() {
  return (
    <section className="my-12 lg:my-24">
      <article className="lg:w-[748.92px]">
        <h2 className="mb-6 font-sans text-2xl font-medium leading-[41.52px] tracking-[-3%]">
          Spirituality
        </h2>
        <div className="font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F]">
          <p className="mb-6">
            Spirituality at MTU is not an idea, it is a lifestyle. Founded by
            Professor D. K. Olukoya, a shepherd known for his deep commitment to
            Christian faith and values, we are rooted in a mission to nurture
            students’ spiritual growth alongside their academic journey. It is
            not a separate entity here rather it is incorporated into the
            general lifestyle with an enabling ecosystem for students.
          </p>
          <p>
            Professor Olukoya’s vision is for each student to emerge not only as
            a knowledgeable graduate but as persons of integrity and purpose and
            we are committed to achieving just that. Find out about our chapel
          </p>
        </div>
      </article>
      <div className="my-12">
        <Carousel className="my-6">
          <CarouselContent className="flex">
            {images.map((image) => (
              <CarouselItem key={image.id} className="max-w-fit">
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  width={2000}
                  height={2000}
                  className="h-[198px] w-[288px] lg:h-[392px] lg:w-[588px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
