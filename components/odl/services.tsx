import Image from 'next/image';

const cards = [
  {
    id: '1',
    imageUrl: '/images/odl/services-icon-1.svg',
    title: 'Flexibility to learn on your schedule',
    description:
      'Our ODL programs are tailored for working professionals and busy individuals, providing a self-paced learning structure to balance education with other commitments. ',
  },
  {
    id: '2',
    imageUrl: '/images/odl/services-icon-2.svg',
    title: 'Affordable tuition and payment plans. ',
    description:
      'The ODL Center offers cost-effective tuition with flexible payment options, making quality education accessible to a broader audience without financial strain.',
  },
  {
    id: '3',
    imageUrl: '/images/odl/services-icon-3.svg',
    title: 'Access to world-class faculty and learning resources. ',
    description:
      'Students benefit from the expertise of MTU’s acclaimed faculty and a wealth of digital resources, including an learning management system, and interactive course materials.',
  },
  {
    id: '4',
    imageUrl: '/images/odl/services-icon-4.svg',
    title: 'Support services like online tutoring and career guidance.',
    description:
      'We support our ODL students with personalized online tutoring, mentorship, and career counseling, ensuring academic success and career readiness​',
  },
];

export default function Services() {
  return (
    <section className="bg-[#FFF1FF] px-6 py-12 lg:px-12 lg:py-24">
      <article className="mx-auto mb-12 w-fit">
        <h4 className="text-center font-mono text-sm font-medium uppercase leading-[16.44px] tracking-[-4%] text-[#84B000] underline lg:text-[16px]">
          our services
        </h4>
        <h1 className="my-4 text-center font-sans text-xl font-medium leading-7 tracking-[-4%] text-[#0F0F0F] lg:text-2xl lg:leading-8 xl:text-4xl xl:leading-[45px]">
          What makes MTU Open and Distance Learning Center unique?
        </h1>
      </article>
      <div className="mx-auto grid w-fit gap-9 lg:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.id}
            className="flex h-auto w-full flex-col items-start justify-between gap-6 rounded-3xl bg-white p-9 xl:w-[638px]"
          >
            <Image
              className="h-[64px] w-[64px] rounded-[10px] bg-[#EFFFC0]"
              src={card.imageUrl}
              alt={card.title}
              width="0"
              height="0"
            />
            <h3 className="font-sans text-[16px] font-semibold leading-7 tracking-[-4%] text-[#0F0F0F] lg:text-xl xl:text-2xl xl:leading-9">
              {card.title}
            </h3>
            <p className="font-sans text-sm font-normal leading-7 tracking-[-4%] text-[#4D4D4D] lg:text-[16px]">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
