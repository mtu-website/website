import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import EventDetails from './eventDetails';

export default async function Events() {
  const data = await fetch('https://media.mtu.edu.ng/api/mtu-events');
  const events = await data.json();

  return (
    <section className="px-6 py-12 lg:px-12 lg:py-24">
      <div className="mb-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
          <article>
            <h1 className="mb-4 font-sans text-xl font-semibold leading-8 text-[#0F0F0F] lg:text-[28px]">
              Events
            </h1>
            <p className="font-sans text-[16px] font-normal leading-8 tracking-[-4%] text-[#5E5E5E]">
              From groundbreaking research projects to inspiring workshops and
              conferences, Mountain Top University hosts events that drive
              innovation and knowledge sharing. Be a part of our ceremonies
              celebrating excellence and progress.
            </p>
          </article>
          <Link
            href="/events"
            className="flex w-full items-center gap-2 text-[#BD2BBF] lg:justify-end"
          >
            <span className="text-sm font-semibold capitalize leading-[16.94px] tracking-[-4%] underline underline-offset-4 xl:text-[16px]">
              all events
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <EventDetails events={events} />
    </section>
  );
}
