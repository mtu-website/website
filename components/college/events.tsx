import Image from 'next/image';

const eventsPage = [
  {
    id: 1,
    title: '3rd Annual CBAS Conference 2024.',
    startTime: '12:00',
    endTime: '14:00',
    startMonth: 'October',
    endMonth: 'October',
    startDate: '24',
    endDate: '26',
    year: '2024',
    venue: 'The Multipurpose Hall, Mountain Top University',
    image: '/images/colleges/event-image-1.png',
    show: 'block',
  },
  {
    id: 2,
    title: 'Grand Opening Ceremony of the Counselling Unit.',
    startTime: '11:00',
    endTime: '15:00',
    startMonth: 'May',
    endMonth: 'May',
    startDate: '24',
    endDate: '27',
    year: '2024',
    venue: 'CHMS BIG LT Hall, Mountain Top University',
    image: '/images/colleges/event-image-2.png',
    show: 'hidden lg:flex',
  },
];

export default function Events() {
  return (
    <section className="px-3 py-12">
      <article className="mb-24 px-6 lg:px-12">
        <h2 className="mb-9 font-whyte text-[28px] font-medium uppercase leading-[44.8px] tracking-[-4%] text-[#84B000] underline decoration-1 underline-offset-2 lg:text-4xl lg:leading-[57.6px]">
          events and activities
        </h2>
        <p className="font-sans text-sm font-normal leading-7 tracking-[-4%] text-[#6F6F6F] lg:text-xl lg:leading-[39.4px]">
          Lorem ipsum dolor sit amet consectetur. Nibh consectetur ipsum nunc
          feugiat. Consectetur ut suspendisse ipsum sit eu duis elementum
          ornare.
        </p>
      </article>

      <div className="mb-9 grid gap-8 px-6 sm:grid-cols-2 lg:gap-6 lg:px-12">
        {eventsPage.map((event) => (
          <div key={event.id} className="flex w-full gap-6">
            {/* text */}
            <article className="2xl:w-fit">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h1 className="mb-5 max-h-[216px] w-[157.33px] font-sans text-[18px] font-semibold leading-[30px] tracking-[-4%] text-[#5E5E5E] lg:w-[239.45px] lg:text-2xl lg:leading-[35.76px]">
                    {event.title}
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
                    {event.endMonth ? (
                      <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                        {event.startMonth} {event.startDate}, {event.year} -{' '}
                        {event.endMonth} {event.endDate}, {event.year}
                      </span>
                    ) : (
                      <span className="text-xs text-[#5E5E5E] lg:text-[14px]">
                        {event.startDate}, {event.year}
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
                      {event.venue}
                    </span>
                  </div>
                </div>
              </div>
            </article>
            {/* image */}
            <div className="relative w-fit overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={189.33}
                height={387}
                className="min-h-[238.75px] w-[170px] object-cover object-center lg:h-[287px] lg:w-[285.26px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
