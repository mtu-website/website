import Image from 'next/image';
import Link from 'next/link';

import { PlusIcon } from '@radix-ui/react-icons';

import {
  formatDateToText,
  formatTime,
  replacePublicWithStorage,
} from '@/lib/utils';

import MoreEvents from '@/components/events/more-events';
import SpeakersCarousel from '@/components/events/speakers-carousel';
import Socials from '@/components/ui/socials';

type Params = Promise<{ id: string }>;

export default async function EventDetail({ params }: { params: Params }) {
  // const event = events.find((n) => n.id === params.id);
  // const moreEvents = events.slice(0, 2);

  const { id } = await params;

  const event = await fetch(`https://mtu.edu.ng/api/mtu-events/${id}`).then(
    (res) => res.json(),
  );
  // const parsedContent = parse(event.content);

  return (
    <section className="">
      <div className="items-start justify-between gap-12 px-4 py-6 sm:flex lg:px-12 lg:pb-24">
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase leading-[17.88px] tracking-[-4%] text-[#0E4510]">
            event
          </h3>
          <h1 className="font-sans text-[24px] font-semibold leading-10 tracking-[-4%] text-[#84B000] lg:text-[45px] lg:leading-[64px] xl:text-[56px] xl:leading-[71.12px]">
            {event.eventName}
          </h1>
          <Link
            href={replacePublicWithStorage(event.url)}
            target="_blank"
            className="my-6 flex w-[222px] items-center rounded-[1px] bg-[#6C006D] lg:my-12 lg:h-[64px] lg:w-[317px]"
          >
            <div className="flex h-[44px] w-[44px] items-center justify-center bg-black p-[7.33px] text-[#5E5E5E] lg:h-[64px] lg:w-[64px] lg:p-[10px]">
              <PlusIcon className="h-auto w-[18.55] lg:w-6" />
            </div>
            <span className="mx-auto font-mono text-sm font-semibold uppercase leading-[21px] tracking-[-2%] text-white lg:text-xl lg:leading-[30px]">
              Explore Banner
            </span>
          </Link>
          <div className="">
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
                <span className="font-sans text-xs font-bold uppercase leading-[21.72px] tracking-[-4%]">
                  time:{' '}
                </span>
                <span className="underline">
                  {formatTime(event?.startTime)} - {formatTime(event?.endTime)}
                </span>
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

              {event.endDate !== event.startDate ? (
                <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                  <span className="font-sans text-xs font-bold uppercase leading-[21.72px] tracking-[-4%]">
                    date:{' '}
                  </span>
                  <span className="underline">
                    {formatDateToText(event.startDate)} -{' '}
                    {formatDateToText(event.endDate)}
                  </span>
                </span>
              ) : (
                <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                  <span className="font-sans text-xs font-bold uppercase leading-[21.72px] tracking-[-4%]">
                    date:{' '}
                  </span>
                  <span className="underline">
                    {formatDateToText(event.startDate)}
                  </span>
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
                <span className="font-sans text-xs font-bold uppercase leading-[21.72px] tracking-[-4%]">
                  Location:{' '}
                </span>
                <span className="underline">{event?.location}</span>
              </span>
            </div>

            <div className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="money-bill"
                className="mr-4 h-[13.25px] min-w-[13.25px]"
              >
                <path
                  fill="#5E5E5E"
                  d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm12,0a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm2-6H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z"
                ></path>
              </svg>
              <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                <span className="font-sans text-xs font-bold uppercase leading-[21.72px] tracking-[-4%]">
                  cost:{' '}
                </span>
                <span className="underline">Free</span>
              </span>
            </div>
          </div>
        </div>

        <Image
          src={
            replacePublicWithStorage(event.url) ||
            '/images/events/calender_image3.svg'
          }
          alt="Calendar Icon"
          width={2000}
          height={2000}
          className="hidden sm:block sm:h-auto sm:w-[377px] lg:h-[555px] lg:w-[500px] xl:w-auto"
          // className="hidden sm:block sm:h-auto sm:w-[377px] lg:h-[555px] lg:w-[500px] xl:w-[648px]"
        />

        <Image
          src={
            replacePublicWithStorage(event.url) ||
            '/images/events/calender_image_mobile.svg'
          }
          alt="Calendar Icon"
          width={2000}
          height={2000}
          className="visible mt-6 h-auto w-full sm:hidden"
        />
      </div>
      <div className="bg-[#FFF1FF] px-4 py-12 lg:px-12 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-8 lg:px-0 xl:gap-16">
          <MoreEvents />
          <article className="w-full">
            <h3 className="font-sans text-[24px] font-bold uppercase leading-[42px] tracking-[-2%] text-[#555155] lg:text-[28px]">
              overview
            </h3>
            <p className="my-4 font-sans text-[16px] font-normal leading-[34px] tracking-[-2%] text-[#555155]">
              {event.theme}
            </p>
            <p className="my-4 font-sans text-sm font-normal leading-[34px] tracking-[-2%] text-[#555155] lg:text-[16px]">
              {/* {parsedContent.textContent} */}
            </p>
            {event.speakers && <SpeakersCarousel />}
          </article>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex justify-end">
            <div className="mb-4 flex items-center">
              <div className="h-3 w-3 rounded-[50%] bg-[#545454]"></div>
              <div className="h-[2px] w-[290px] bg-[#545454] underline sm:w-[500px] lg:w-[700px] xl:min-w-[1100px] 2xl:min-w-[1480px]"></div>
            </div>
          </div>
          <Socials />
        </div>
      </div>
    </section>
  );
}
