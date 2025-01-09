import Image from 'next/image';

const cards = [
  {
    id: '1',
    imageUrl: '/images/odl/vision_image.svg',
    description: 'vision statement',
    statement: '',
  },
  {
    id: '2',
    imageUrl: '/images/odl/mission_image.svg',
    description: 'mission statement',
    statement: '',
  },
];

export default function Statement() {
  return (
    <section className="p-24">
      <div className="mx-auto flex w-fit items-center justify-center gap-12">
        {cards.map((card) => (
          <Image
            key={card.id}
            src={card.imageUrl}
            width="0"
            height="0"
            alt={card.description}
            className="h-[534px] w-[534px]"
          />
        ))}
      </div>
    </section>
  );
}

('/images/odl/hero-image.svg');
