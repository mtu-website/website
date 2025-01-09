import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Collaboration() {
  return (
    <section className="px-6 py-9 lg:px-40 lg:py-48">
      <div className="mx-auto">
        <article className="text-center">
          <h5 className="mb-3 font-mono text-[16px] font-semibold uppercase leading-[19.2px] tracking-[-3%] text-[#84B000] sm:text-[-16px] sm:leading-[25.6px]">
            Collaborations and Partnerships
          </h5>
          <h1 className="sm:text-[56px mb-3 font-sans text-[36px] font-medium leading-[43.57px] tracking-[-3%] text-[#6C006D] sm:leading-[67.77px]">
            Want to collaborate?
          </h1>
        </article>
        <div className="relative right-8 flex items-center justify-center">
          <Image
            src="images/research/curved-dotted-arrow.svg"
            alt="Curved Dotted Arrow"
            width="100"
            height="100"
            className="h-[75px] w-[65.63px]"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-8 font-sans text-2xl font-medium leading-[29.05px] tracking-[-3%] text-[#0F0F0F] sm:text-4xl sm:leading-[43.57px]">
              Get in touch!
            </h2>
            <Link
              href="/"
              className="flex w-fit items-center justify-between gap-3 bg-[#6C006D] px-4 py-3 text-white"
            >
              <span className="flex w-fit items-center justify-between font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%]">
                visit website
              </span>{' '}
              <ArrowTopRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
