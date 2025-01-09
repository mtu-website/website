import { ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    id: 1,
    title: 'Undergraduate Courses',
    href: 'study-at-mtu/undergraduate',
  },
  {
    id: 2,
    title: 'Postgraduate Courses',
    href: 'study-at-mtu/postgraduate',
  },
  {
    id: 3,
    title: 'Scholarships and Financial Aid',
    href: 'study-at-mtu',
  },
];

export const images = [
  {
    id: 1,
    alt: 'Mountain Top University Scenery',
    src: '/images/home/study-image-1.png',
    width: 550,
    widthLg: '404px',
    class: 'col-span-2',
  },
  {
    id: 2,
    alt: 'Mountain Top University Biology Laboratory',
    src: '/images/home/study-image-2.png',
    width: 260,
    widthLg: '194px',
    class: 'row-span-2',
  },
  {
    id: 3,
    alt: 'Mountain Top University Library',
    src: '/images/home/study-image-3.png',
    width: 260,
    widthLg: '194px',
    class: 'row-span-2',
  },
];

export default function StudyAtMtu() {
  return (
    <section className="px-6 py-12 lg:px-12 lg:py-24">
      <div className="text-center">
        <h3 className="font-mono text-xs font-semibold uppercase leading-6 tracking-[-4%] text-[#84B000] lg:text-[16px]">
          begin your journey
        </h3>
        <h1 className="mb-6 mt-3 font-sans text-xl font-semibold leading-8 tracking-[-2%] text-[#0F0F0F] lg:mb-16 lg:mt-8 lg:text-4xl">
          Study at MTU
        </h1>
      </div>
      {/*  */}
      <div className="flex flex-col-reverse items-start justify-between gap-12 lg:flex-row">
        <article className="lg:w-[660px] xl:w-[680px] 2xl:w-[1100px]">
          <p className="font-sans text-[16px] font-normal leading-8 tracking-[-4%] text-[#5E5E5E]">
            Choosing Mountain Top University Nigeria (MTU) means committing to a
            future of excellence, innovation, and global impact since MTU is
            ranked 1st in the nation for Quality Education. Here, you’ll benefit
            from a dynamic learning environment that integrates cutting-edge
            research, intensive skills acquisition and community engagement.
            MTU’s commitment to sustainability and social responsibility ensures
            that your education is more than just a degree, it’s a pathway to
            making a meaningful difference in the world.{' '}
          </p>
          <Link
            href="/why-mtu"
            className="mb-4 mt-8 flex h-[43px] w-fit items-center justify-between gap-4 bg-[#6C006D] px-6 py-3 font-mono text-[16px] font-semibold uppercase leading-[18.78px] tracking-[-4%] text-white lg:my-12"
          >
            <span>Why MTU?</span> <ArrowTopRightIcon height={13} width={13} />
          </Link>
          {
            <div>
              {links.map((link) => (
                <Link href={link.href} key={link.id} target="_blank">
                  <div
                    style={{ borderBottom: '1px solid #DFCECE' }}
                    className="my-6 flex items-center justify-between py-4 text-[#6C006D]"
                  >
                    <h2 className="font-sans text-[16px] font-medium leading-6 lg:text-[18px]">
                      {link.title}
                    </h2>
                    <ArrowRightIcon height={20} width={20} />
                  </div>
                </Link>
              ))}
            </div>
          }
        </article>
        <div className="hidden gap-6 lg:grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`hidden lg:block ${image.class} xl:min-w-[${image.width}] lg:min-w-[${image.widthLg}] overflow-hidden lg:min-h-[310px] xl:min-h-[257.6px]`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={2000}
                className={`h-full w-auto object-cover object-center xl:w-full`}
              />
            </div>
          ))}
        </div>
        <div
          className={`hidden h-[240px] w-full overflow-hidden sm:h-[520px] lg:hidden lg:h-[444px] lg:w-[443px] xl:h-[444px] xl:w-[592.42px]`}
        >
          <Image
            src="/images/home/study-mobile.png"
            alt="Mountain Top University Students"
            width={2000}
            height={2000}
            className={`h-full w-full object-cover object-center`}
          />
        </div>
      </div>
    </section>
  );
}
