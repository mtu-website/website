import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-16 px-4 py-8 lg:flex-row lg:px-12 lg:py-24">
      <article className="font-sans text-[18px] font-normal leading-8 tracking-[-3%] text-[#555155] lg:text-[21px] lg:leading-[44.8px]">
        At MTU, research is more than an academic pursuit, it’s a driving force
        for innovation and impact. Our scholars and students works together to
        explore solutions to pressing challenges in{' '}
        <span className="font-medium text-[#6A00BD] underline">
          {' '}
          health, technology, sustainability,{' '}
        </span>{' '}
        and beyond. With cutting-edge facilities and a collaborative
        environment, every project is designed to create meaningful change. Be
        part of a university that prioritizes progress and empowers the next
        generation of leaders.
      </article>
      <Image
        src="/images/research/intro-image.png"
        alt="Mountain Top University Research Laboratory"
        width={2000}
        height={2000}
        className="h-[204px] w-auto sm:h-[459.189px] sm:w-[478.89px]"
      />
    </section>
  );
}
