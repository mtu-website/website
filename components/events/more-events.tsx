import Image from 'next/image';
import { Event } from '@/lib/types';

// import { events } from '@/lib/data';
import { replacePublicWithStorage } from '@/lib/utils';

const events = await fetch(`https://mtu.edu.ng/api/mtu-events`).then((res) =>
  res.json(),
);

export default function MoreEvents() {
  const moreEvents: Event[] = events.slice(0, 2);
  return (
    <div className="h-fit">
      <h4 className="mb-3 font-sans text-2xl font-semibold leading-9 tracking-[-2%] text-[#5E5E5E]">
        More events at MTU
      </h4>
      {moreEvents.map((event) => {
        return (
          <div className="mb-9" key={event.id}>
            <div className="relative mb-3 w-full overflow-hidden lg:w-fit">
              <Image
                src={replacePublicWithStorage(event.url)}
                alt={event.title || 'Mountain Top University Event image'}
                width={2000}
                height={2000}
                className="h-[129px] w-full object-cover object-top lg:h-[185px] lg:min-w-[433px]"
              />
            </div>
            <article className="2xl:w-fit">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="mb-2 font-mono text-xs font-semibold uppercase leading-[17.88px] tracking-[-4%] text-[#5E5E5E]">
                    event
                  </p>
                  <h1 className="mb-3 w-auto font-sans text-xl font-semibold leading-[35.76px] tracking-[-4%] text-[#5E5E5E] lg:max-h-[144px] lg:w-[433px]">
                    {event?.title}
                  </h1>
                </div>
                <div className="w-auto">
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
                      {event?.startTime} - {event?.endTime}
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
                    {event?.endMonth ? (
                      <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                        {event?.startMonth} {event?.startDate}, {event?.year} -{' '}
                        {event?.endMonth} {event?.endDate}, {event?.year}
                      </span>
                    ) : (
                      <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                        {event?.startDate} - {event?.endDate}
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
                      {event?.location}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
