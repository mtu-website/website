import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

import { eventSpeakers } from '@/lib/data';

const speakers = eventSpeakers;

export default function SpeakersCarousel() {
  return (
    <section className="pt-11">
      {/* Carousel */}
      <div className="mb-9">
        <Carousel>
          <div className="mb-6">
            <p className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-[-2%] text-[#0E4510]">
              speakers
            </p>
            <div className="absolute right-12 top-3 lg:top-0">
              <div className="w-fit bg-red-800">
                <CarouselPrevious className="-left-6 h-8 w-8 rounded-[1px] bg-[#6C006D] text-white hover:text-[#6C006D]" />
                <CarouselNext className="h-8 w-8 rounded-[1px] bg-[#6C006D] text-white hover:text-[#6C006D]" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-[2px] w-full bg-[#545454] underline"></div>
            <div className="h-3 w-3 rounded-[50%] bg-[#545454]"></div>
          </div>
          <CarouselContent className="mt-12">
            {speakers.map((speaker) => (
              <CarouselItem
                key={speaker.id}
                className="3xl:basis-1/6 flex w-[60px] gap-2 sm:basis-1/2 2xl:basis-1/4"
              >
                {/* text */}
                <article className="2xl:w-fit">
                  <div className="flex h-full flex-col justify-center">
                    <div>
                      <h1 className="mb-4 max-h-[216px] w-[133.33px] font-sans text-xl font-semibold leading-[35.76px] tracking-[-4%] text-[#5E5E5E] lg:text-2xl">
                        {speaker.name}
                      </h1>
                      <p className="mb-6 w-[133.33px] font-mono text-xs font-semibold uppercase leading-[17.88px] tracking-[-4%] text-[#5E5E5E]">
                        {speaker.role}
                      </p>
                    </div>
                  </div>
                </article>
                {/* image */}
                <div className="relative w-fit overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={189.33}
                    height={387}
                    className="h-[268px] object-cover object-center lg:w-[144.33px]"
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
