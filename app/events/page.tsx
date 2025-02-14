import { Metadata } from 'next';
import Hero from '@/components/events/hero';
import PastEvents from '@/components/events/past-events';
import UpcomingEvents from '@/components/events/upcoming-events';

export const metadata: Metadata = {
  title: 'Our Events',
  description: '',
};

export default async function Events() {
  const data = await fetch('https://media.mtu.edu.ng/api/mtu-events');
  const events = await data.json();

  return (
    <div>
      <Hero />
      <UpcomingEvents events={events} />
      <PastEvents events={events} />
    </div>
  );
}
