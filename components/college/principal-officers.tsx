import Image from 'next/image';
import Link from 'next/link';

const officers = [
  {
    id: '1',
    name: 'Mr. John Doe',
    position: 'College Officer',
    image: '/images/colleges/person-placeholder-image.png',
  },
  {
    id: '2',
    name: 'Mr. John Doe',
    position: 'College Dean',
    image: '/images/colleges/person-placeholder-image.png',
  },
  {
    id: '3',
    name: 'John Doe',
    position: 'Secretary to the Dean',
    image: '/images/colleges/person-placeholder-image.png',
  },
];
export default function PrincipalOfficers() {
  return (
    <section className="px-3 py-12">
      <article className="mb-9 px-6 lg:px-12">
        <h2 className="mb-9 text-center font-whyte text-xl font-medium uppercase leading-[44.8px] tracking-[-4%] text-[#84B000] underline decoration-1 underline-offset-2 lg:text-left lg:text-4xl lg:text-[28px] lg:leading-[57.6px]">
          Principal Officers
        </h2>
        <div className="mx-auto w-fit items-center justify-between gap-16 lg:flex">
          {officers.map((officer) => (
            <div
              key={officer.id}
              className="mb-6 grid h-full w-full gap-4 overflow-hidden border-[0.5px] border-[#ACACAC] pb-9 lg:mb-0"
            >
              <Image
                src={officer.image}
                alt={officer.name}
                width="300"
                height="300"
                className="h-[193px] w-[295px] object-cover object-top"
              />
              <article>
                <h2 className="text-center font-sans text-[18px] font-bold leading-[28.8px] tracking-[-3%] text-[#6F6F6F] lg:text-xl lg:leading-8">
                  {officer.name}
                </h2>
                <p className="text-center font-sans text-[16px] font-normal leading-[25.6px] tracking-[-3%] text-[#6F6F6F]">
                  {officer.position}
                </p>
              </article>
              <div className="grid justify-center">
                <Link
                  href="/"
                  target="_blank"
                  className="h-[53px] w-auto bg-black px-5 py-[15px] text-[15.1px] capitalize leading-[22.55px] tracking-[-2%] text-white"
                >
                  read profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
