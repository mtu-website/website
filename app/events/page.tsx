import Hero from '@/components/events/hero';
import PastEvents from '@/components/events/past-events';
import UpcomingEvents from '@/components/events/upcoming-events';

export default async function Events() {
  const data = await fetch('https://mtu.edu.ng/api/mtu-events');
  const events = await data.json();

  return (
    <div>
      <Hero />
      <UpcomingEvents events={events} />
      <PastEvents events={events} />
    </div>
  );
}
