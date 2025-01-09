import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const images = [
  {
    id: '1',
    src: '/images/why-mtu/virtual_tour_image1.svg',
    alt: 'Virtual Tour Image',
  },
  {
    id: '2',
    src: '/images/why-mtu/virtual_tour_image2.svg',
    alt: 'Virtual Tour Image',
  },
  {
    id: '3',
    src: '/images/why-mtu/virtual_tour_image3.svg',
    alt: 'Virtual Tour Image',
  },
  {
    id: '4',
    src: '/images/why-mtu/virtual_tour_image4.svg',
    alt: 'Virtual Tour Image',
  },
];

export default function VirtualTour() {
  return (
    <section className="bg-white px-8 py-12 lg:px-12 lg:py-24">
      <h1 className="mb-9 text-center font-sans text-[28px] font-bold leading-[44.48px] tracking-[-3%] text-[#84B000] lg:text-[54px] lg:leading-[93.42px]">
        Take our virtual tour <span className="font-medium italic">here</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        <div className="relative grid grid-cols-2 gap-2 lg:gap-6">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width="0"
              height="0"
              className="w-[430px] lg:h-[250px]"
            />
          ))}
          <Link
            href="/"
            className="absolute inset-0 m-auto h-fit w-fit rounded-[50px] bg-[#84B000] px-8 py-5 text-center font-mono text-[16px] font-bold tracking-[-3%] text-white lg:text-3xl lg:leading-[51.9px]"
          >
            <span className="inline-flex items-center justify-between gap-3">
              Explore Mountain Top{' '}
              <ArrowTopRightIcon width={33.53} height={28.16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
