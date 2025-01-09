const researchAreas = [
  {
    id: '1',
    title: 'Digital & Communication Technologies',
    content:
      'By leveraging cutting-edge advancements in technology, our work fosters global connectivity, drives innovation in communication systems, and enhances digital accessibility. We empower communities with the tools and knowledge to thrive in an interconnected world.',

    cardUrl: "bg-[url('/images/research/icon_1.svg')]",
    backgroundUrl: '/images/research/card1.png',
  },
  {
    id: '2',
    title: 'Health Sciences',
    content:
      'With a multidisciplinary approach, our work supports healthier communities through new insights into disease prevention, treatment strategies, and biomedical applications.',

    cardUrl: "bg-[url('/images/research/icon_2.svg')]",
    backgroundUrl: '/images/research/card2.png',
  },
  {
    id: '3',
    title: 'Environment Sustainability',
    content:
      'Guided by a commitment to a greener future, our initiatives promote sustainable practices, protect natural ecosystems, and combat climate change. Through research and innovation, we aim to ensure a balanced coexistence between humanity and the environment.',

    cardUrl: "bg-[url('/images/research/icon_3.svg')]",
    backgroundUrl: '/images/research/card3.png',
  },
];

export default function ResearchAreas() {
  return (
    <section className="mx-auto px-4 py-8 lg:px-12 lg:py-24">
      <article>
        <h4 className="mb-9 font-mono text-[16px] font-semibold uppercase leading-[19.2px] tracking-[-3%] text-[#0E4510] lg:text-[16px] lg:leading-[25.6px]">
          research areas
        </h4>
        <h2 className="mb-9 font-sans text-2xl font-medium leading-[38.4px] tracking-[-3%] text-[#84B000] lg:text-4xl lg:leading-[54px]">
          Curious about the future? Our team of passionate scholars are pushing
          boundaries in tech, health, and sustainability.{' '}
        </h2>
      </article>
      <div className="items-center justify-between gap-4 lg:flex">
        {researchAreas.map((area) => (
          <div
            key={area.id}
            className={`mb-6 h-auto w-auto rounded-[21px] bg-cover bg-no-repeat px-9 py-6 lg:h-[420px] xl:mb-0`}
            style={{
              // height: '400px', // Increase height explicitly
              backgroundImage: `url(${area.backgroundUrl})`,
              backgroundPosition: 'right', // Ensure the image is centered
            }}
          >
            <div
              className={`mb-6 h-[54px] w-[54px] rounded-[5px] ${area.cardUrl}`}
            ></div>
            <h5 className="mb-6 font-sans text-xl font-medium capitalize leading-[24.2px] tracking-[-3%] text-white xl:text-2xl xl:leading-[29.05px]">
              {area.title}
            </h5>
            <p className="mb-6 font-sans text-sm font-medium leading-[22px] tracking-[-3%] text-white xl:leading-[26px]">
              {area.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
