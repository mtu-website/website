import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { ChevronRightIcon } from '@radix-ui/react-icons';

const alumniStories = [
  {
    id: '1',
    image: '/images/alumni/alumnus-news-1.png',
    title:
      'Peace talks about spiritual, cultural, and mental shifts over four years as an MTU student',
    quote: 'How Mountain Top University changed my life in four years',
    link: '/alumni-stories/1',
    alt: 'Mountain Top University Alumnus',
  },
  {
    id: '2',
    image: '/images/alumni/alumnus-news-2.jpg',
    title:
      'Former SRC President Daniel talks about how his experience as an MTU student shaped him',
    quote: 'Mountain Top University prepared me for the future',
    link: '/alumni-stories/1',
    alt: 'Mountain Top University Alumnus',
  },
];

export default function Stories() {
  return (
    <section className="relative items-center justify-between overflow-clip px-8 pb-24 lg:flex lg:gap-12 lg:py-36 lg:pl-12 xl:gap-24 xl:pl-24">
      <article className="mb-12 w-auto lg:mb-0">
        <h2 className="mb-6 font-trial text-4xl font-bold capitalize leading-[43.2px] tracking-[-1.5%] text-white lg:text-[64.56px] lg:leading-[77.47px]">
          alumni stories
        </h2>
        <p className="font-sans text-sm font-normal leading-8 tracking-[-4%] text-[#6F6F6F] lg:w-[367px]">
          Discover the incredible journeys of MTU alumni who are breaking
          barriers, driving innovation, and inspiring change. From life-changing
          careers to impacting industries, these stories showcase the power of
          an MTU education. Be inspired by their paths and their stories.
        </p>
      </article>

      <Carousel>
        <CarouselContent className="-right-80 flex gap-6 lg:pl-12">
          {alumniStories.map((story) => (
            <CarouselItem
              key={story.id}
              className="m-0 max-w-[407px] bg-black p-0"
            >
              <article className="max-w-[407px] p-6">
                <p className="mb-6 font-sans text-sm font-normal leading-8 tracking-[-4%] text-[#6E6E6E]">
                  {story.title}
                </p>

                <div className="gap- flex items-center justify-between">
                  <article>
                    <h2 className="mb-4 font-sans text-[28px] font-bold leading-[42px] tracking-[-3%] text-white">
                      &quot;{story.quote}&quot;
                    </h2>
                    <p className="font-sans text-xs font-medium uppercase leading-[20.76px] tracking-[-3%] text-white">
                      alumni stories
                    </p>
                  </article>
                  <Link href="/" target="_blank">
                    <ChevronRightIcon className="h-[32px] w-[32px] text-white" />
                  </Link>
                </div>
              </article>
              <Image
                src={story.image}
                alt={story.alt}
                width={2000}
                height={2000}
                className="h-[250px] w-[406.4px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-20 right-20 lg:-bottom-12 lg:right-80">
          <div className="w-fit bg-red-800">
            <CarouselPrevious className="-left-6 h-8 w-8 rounded-[1px] bg-transparent text-white hover:text-[#6C006D]" />
            <CarouselNext className="h-8 w-8 rounded-[1px] bg-transparent text-white hover:text-[#6C006D]" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
