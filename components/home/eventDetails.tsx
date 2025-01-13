'use client';
import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { Event } from '@/lib/types';
import { useEffect, useState } from 'react';

import {
  convertToPlainText,
  formatDateToText,
  formatTime,
  truncateByCharacters,
  replacePublicWithStorage,
} from '@/lib/utils';

export default function EventDetails({ events }: { events: Event }) {
  const [modifiedEvents, setModifiedEvents] = useState<Event[]>([]);

  useEffect(() => {
    const today = new Date();

    const updatedEvents: Event[] = events.map((event: Event) => {
      const eventDate = new Date(event.endDate);
      const isUpcoming = eventDate >= today;

      return {
        ...event,
        uniqueName: event.uniqueName,
        title: truncateByCharacters(event.eventName, 40),
        content: truncateByCharacters(convertToPlainText(event.content), 70),
        startTime: formatTime(event.startTime),
        endTime: formatTime(event.endTime),
        startDate: formatDateToText(event.startDate),
        endDate: formatDateToText(event.endDate),
        location: truncateByCharacters(event.location, 50),
        url: replacePublicWithStorage(event.url),
        isUpcoming,
      };
    });

    setModifiedEvents(updatedEvents);
  }, [events]);

  return (
    <section>
      <Carousel>
        <CarouselContent>
          {modifiedEvents
            .slice(0, 3)
            .filter((event) => !event.isUpcoming)
            .map((event) => (
              <CarouselItem
                key={event.id}
                className="mr-6 flex w-full gap-6 sm:basis-2/3 lg:basis-1/3"
              >
                {/* text */}
                <article className="2xl:w-fit">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="mb-6 font-mono text-xs font-semibold uppercase leading-[17.88px] tracking-[-4%] text-[#84B000]">
                        event
                      </p>
                      <h1 className="mb-6 max-h-[216px] w-[157.33px] font-sans text-[18px] font-semibold leading-[30px] tracking-[-4%] text-[#0F0F0F] lg:w-[180px] lg:text-xl lg:leading-8">
                        {event.theme}
                      </h1>
                    </div>
                    <div className="w-[157.33px]">
                      <div className="mb-2 flex items-center">
                        <svg
                          id="clock"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="mr-4 h-[13.25px] min-w-[13.25px]"
                        >
                          <path
                            fill="#5E5E5E"
                            d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"
                          ></path>
                        </svg>
                        <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                          {event.startTime} - {event.endTime}
                        </span>
                      </div>

                      <div className="mb-2 flex items-center lg:w-auto 2xl:w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="calender"
                          className="mr-4 h-[13.25px] min-w-[13.25px]"
                        >
                          <path
                            fill="#5E5E5E"
                            d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"
                          ></path>
                        </svg>

                        {event.endDate === event.startDate ? (
                          <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                            {event.startDate}- {event.endDate}
                          </span>
                        ) : (
                          <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                            {event.startDate}
                          </span>
                        )}
                      </div>

                      <div className="mb-2 flex items-center lg:w-auto 2xl:w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="location-point"
                          className="mr-4 h-[13.25px] min-w-[13.25px]"
                        >
                          <path
                            fill="#5E5E5E"
                            d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"
                          ></path>
                        </svg>
                        <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                {/* image */}
                <Link
                  href={`/events/${event.uniqueName}`}
                  className="relative h-full w-fit overflow-hidden"
                >
                  <Image
                    src={event.url}
                    alt={event.theme}
                    width={2000}
                    height={2000}
                    className="h-full w-[300px] object-cover object-center lg:min-h-[440px] lg:w-[200px] 2xl:w-[320px]"
                  />
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
