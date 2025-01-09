import Image from 'next/image';
import Link from 'next/link';

import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';

const events = [
  {
    id: '1',
    title: '2024 Convocation Ceremony',
    date: '19, December, 2024',
    location: 'Multipurpose Hall, Mountain Top University',
    description:
      'A lively event where alumni can meet and share their experiences.',
    image: '/images/alumni/event-image.png',
  },
  {
    id: '2',
    title: '2024 Convocation Thanksgiving',
    date: '23, December, 2024',
    location: 'Ikeja, Lagos Mainland',
    description:
      'A lively event where alumni can meet and share their experiences.',
    image: '/images/alumni/event-image.png',
  },
];

export default function Events() {
  return (
    <section className="py-24">
      <h2 className="mb-12 text-center font-whyte text-4xl font-medium uppercase leading-[57.6px] tracking-[-4%] text-white">
        alumni events
      </h2>
      <div className="relative mx-auto flex h-[344px] flex-col items-center justify-center bg-black lg:h-[344px] lg:w-[910px] lg:flex-none xl:h-[474px] xl:w-[1254px]">
        <div className="mb-12 flex h-[81px] w-[81px] flex-col items-center justify-center bg-[#84B000] lg:absolute lg:right-12 lg:top-12 lg:mb-0">
          <p className="font-sans text-[35px] font-semibold italic text-white">
            14
          </p>
          <p className="font-sans text-[16px] font-medium uppercase text-white">
            Feb
          </p>
        </div>
        <article className="bottom-12 left-12 lg:absolute">
          <h1 className="text-center font-sans font-semibold tracking-[-3%] text-white lg:text-left lg:text-[45px] lg:leading-[54px] xl:text-[56px] xl:leading-[95.15px]">
            Featured Event
          </h1>
          <p className="mb-2 font-sans text-[18px] font-medium leading-[31.15px] tracking-[-3%] text-white">
            Maiden Alumni Hangout
          </p>
          <p className="flex items-center gap-2 font-sans text-[16px] leading-[27.68px] tracking-[-3%] text-[#777777]">
            <UilMapMarker className="w-[16px]" color="#777777" />
            <span className="font-semibold">Ikeja, Lagos Mainland</span>
          </p>
        </article>
      </div>
      <div className="mx-auto w-fit items-center justify-between px-8 lg:mt-16 lg:flex lg:w-[910px] lg:px-0 xl:w-[1254px]">
        {events.map((event) => (
          <Link key={event.id} href="/">
            <Image
              src={event.image}
              alt={event.description}
              width={2000}
              height={2000}
              className="mt-6 h-[208px] w-[388px] lg:mt-0 lg:h-[235.12px] lg:w-[433.8px] xl:h-[293.9px] xl:w-[590.75px]"
            />
            <article className="mb-6 bg-black p-6 lg:mb-0">
              <h1 className="font-sans text-sm font-normal uppercase leading-[24.22px] tracking-[-3%] text-[#6F6F6F]">
                {event.date}
              </h1>
              <p className="font-sans text-xl font-semibold leading-[34.6px] tracking-[-3%] text-white">
                {event.title}
              </p>
              <p className="font-sans text-[16px] font-normal leading-[27.68px] tracking-[-3%] text-white">
                {event.location}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
