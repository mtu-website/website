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
    image: '/images/alumni/alumnus-news1.svg',
    title:
      'Peace talks about spiritual, cultural, and mental shifts over four years as an MTU student',
    quote: 'How Mountain Top University changed my life in four years',
    link: '/alumni-stories/1',
    alt: 'Alumni Story 1',
  },
  {
    id: '2',
    image: '/images/alumni/alumnus-news1.svg',
    title:
      'Peace talks about spiritual, cultural, and mental shifts over four years as an MTU student',
    quote: 'How Mountain Top University changed my life in four years',
    link: '/alumni-stories/1',
    alt: 'Alumni Story 1',
  },
];

export default function Stories() {
  return (
    <section className="relative mb-9 items-center justify-between overflow-clip pb-24 lg:flex lg:gap-12 lg:py-36 lg:pl-12 xl:gap-24 xl:pl-24">
      <article className="mb-12 w-auto lg:mb-0">
        <h2 className="mb-6 hidden font-sans text-4xl font-medium uppercase leading-[43.2px] tracking-[-3%] text-[#5E5E5E] lg:inline-block lg:text-[24px] lg:leading-[42px]">
          hear from students
        </h2>
        <p className="text-center font-trial text-4xl font-bold leading-[43.2px] tracking-[-1.5%] text-[#84B000] lg:w-[567px] lg:text-left lg:text-[54.56px] lg:leading-[81.84px]">
          Through the eyes of our students
        </p>
      </article>

      <Carousel>
        <CarouselContent className="-right-80 flex gap-6 lg:pl-12">
          {alumniStories.map((story) => (
            <CarouselItem
              key={story.id}
              className="m-0 max-w-[407px] bg-black p-2"
            >
              <article className="max-w-[407px] p-6">
                <p className="mb-6 font-sans text-sm font-normal leading-8 tracking-[-4%] text-[#6E6E6E]">
                  {story.title}
                </p>

                <div className="flex items-center justify-between">
                  <article>
                    <h2 className="mb-4 font-sans text-[28px] font-bold leading-[42px] tracking-[-3%] text-white">
                      &quot;How Mountain Top University changed my life in four
                      years&quot;
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
                alt="mtu alumnus"
                width={2000}
                height={2000}
                className="h-[250px] w-[406.4px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-20 right-20 lg:-bottom-12 lg:right-80">
          <div className="w-fit bg-red-800">
            <CarouselPrevious className="-left-6 h-8 w-8 rounded-[1px] bg-transparent text-black hover:text-[#6C006D]" />
            <CarouselNext className="h-8 w-8 rounded-[1px] bg-transparent text-black hover:text-[#6C006D]" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
