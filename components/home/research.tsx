import { ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    id: 1,
    title: 'mtu-mujast',
    href: 'https://mujast.mtu.edu.ng',
  },
  {
    id: 2,
    title: 'mtu-jhumass',
    href: 'https://jhumass.mtu.edu.ng/',
  },
  {
    id: 3,
    title: 'cegrib',
    href: 'research',
  },
];

export default function Research() {
  return (
    <section className="px-6 py-12 lg:px-12 lg:py-24">
      <div className="text-center">
        <h3 className="font-mono text-xs font-semibold uppercase leading-6 tracking-[-4%] text-[#84B000] lg:text-[16px]">
          research
        </h3>
        <h1 className="mb-6 mt-3 font-sans text-xl font-semibold leading-8 tracking-[-2%] text-[#0F0F0F] lg:mb-16 lg:mt-8 lg:text-4xl">
          Building new knowledge
        </h1>
      </div>
      {/*  */}
      <div className="flex flex-col-reverse items-start justify-between gap-12 lg:flex-row">
        <article className="lg:w-[660px] xl:w-[680px] 2xl:w-[1100px]">
          <p className="font-sans text-[16px] font-normal leading-8 tracking-[-4%] text-[#5E5E5E]">
            Our research shapes the future. We push the boundaries of discovery
            with bold ideas, cutting-edge facilities, and collaborative
            solutions to global challenges. Your journey into groundbreaking
            exploration starts here.
          </p>
          <Link
            href="/research"
            className="mb-4 mt-8 flex h-[43px] w-fit items-center justify-between gap-4 bg-[#6C006D] px-6 py-3 font-mono text-[16px] font-semibold uppercase leading-[18.78px] tracking-[-4%] text-white lg:my-12"
          >
            <span>Research at mtu</span>{' '}
            <ArrowTopRightIcon height={13} width={13} />
          </Link>
          {
            <div>
              {links.map((link) => (
                <Link href={link.href} key={link.id}>
                  <div
                    style={{ borderBottom: '1px solid #DFCECE' }}
                    className="my-6 flex items-center justify-between py-4 text-[#6C006D]"
                  >
                    <h2 className="font-sans text-[16px] font-medium uppercase leading-6 lg:text-[18px]">
                      {link.title}
                    </h2>
                    <ArrowRightIcon height={20} width={20} />
                  </div>
                </Link>
              ))}
            </div>
          }
        </article>

        <div
          className={`h-[270px] w-full overflow-hidden lg:h-[444px] lg:w-[443px] xl:h-[444px] xl:w-[592.42px]`}
        >
          <Image
            src="/images/research/1724968304016.jpeg"
            alt="Image of a microscope for Research at Mountain Top University"
            width={2000}
            height={2000}
            className={`h-full w-full object-cover object-center`}
          />
        </div>
      </div>
    </section>
  );
}
