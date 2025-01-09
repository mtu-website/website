import Image from 'next/image';
import Link from 'next/link';

const principals = [
  {
    id: '1',
    name: 'Prof. Elijah Ayolabi',
    position: 'Vice Chancellor',
    profileUrl: '',
    card: '/images/governance/card_1.svg',
    image: '/images/governance/professor_elijah.svg',
  },
  {
    id: '2',
    name: 'Prof. Oladele John Akinyomi',
    position: 'Deputy Vice Chancellor',
    profileUrl: '',
    card: '/images/governance/card_2.svg',
    image: '/images/governance/professor_oladele.svg',
  },
];

const principals2 = [
  {
    id: '3',
    name: 'Mr. Olufemi Oyewole',
    position: 'University Registrar',
    profileUrl: '',
    card: '/images/governance/card_3.svg',
    image: '/images/governance/mr_olufemi.svg',
  },
  {
    id: '4',
    name: 'Mr. Olagundoye Shola Rotimi',
    position: 'University Bursar',
    profileUrl: '',
    card: '/images/governance/card_3.svg',
    image: '/images/governance/mr_olagundoye.svg',
  },
  {
    id: '5',
    name: 'Dr. Akinade O. Jaiyeola Helen',
    position: 'University Librarian',
    profileUrl: '',
    card: '/images/governance/card_3.svg',
    image: '/images/governance/dr_akinade.svg',
  },
];

export default function Principals() {
  return (
    <section className="pb-24">
      <h2 className="my-9 text-center font-sans text-2xl font-medium leading-10 tracking-[-5%] lg:text-3xl lg:leading-[48px]">
        Principal Officers
      </h2>
      <div className="flex flex-col items-center justify-center gap-6">
        {principals.map((principal) => (
          <div
            key={principal.id}
            className="h-[471px] w-[300px] border-[0.5px] border-[#ACACAC] sm:w-[371px]"
            style={{ backgroundImage: `url(${principal.card})` }}
          >
            <div>
              <Image
                src={principal.image}
                alt={principal.name}
                width={200}
                height={200}
                className="mx-auto mt-16 h-[166.26px] w-[166.26px] rounded-[50%]"
              />
              <div className="my-12 text-center">
                <h3 className="mb-1 font-sans text-[16px] font-bold leading-8 tracking-[-3%] text-[#84B000] sm:text-xl">
                  {principal.name}
                </h3>
                <p className="font-sans text-sm font-medium leading-[25.6px] tracking-[-3%] text-[#6F6F6F] sm:text-[16px]">
                  {principal.position}
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="bg-[#6C006D] px-[20px] py-[15px] font-mono text-sm font-semibold uppercase leading-[22.65px] tracking-[-2%] text-white lg:text-[15.1px]"
                >
                  read profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-6 xl:flex-row">
        {principals2.map((principal) => (
          <div
            key={principal.id}
            className="h-[455px] w-[300px] border-[0.5px] border-[#ACACAC] sm:w-[358px]"
            style={{ backgroundImage: `url(${principal.card})` }}
          >
            <div>
              <Image
                src={principal.image}
                alt={principal.name}
                width={200}
                height={200}
                className="mx-auto mt-16 h-[166.26px] w-[166.26px] rounded-[50%]"
              />
              <div className="my-9 text-center">
                <h3 className="mb-1 font-sans text-[16px] font-bold leading-8 tracking-[-3%] text-[#84B000] sm:text-xl">
                  {principal.name}
                </h3>
                <p className="font-sans text-sm font-medium leading-[25.6px] tracking-[-3%] text-[#6F6F6F] sm:text-[16px]">
                  {principal.position}
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="bg-[#6C006D] px-[20px] py-[15px] font-mono text-[15.1px] font-semibold uppercase leading-[22.65px] tracking-[-2%] text-white"
                >
                  read profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
