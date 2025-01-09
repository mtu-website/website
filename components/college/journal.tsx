import { College } from '@/lib/types';
import Image from 'next/image';

export default function JournalSection({ college }: { college: College }) {
  return (
    <section className="flex items-center justify-between gap-4 bg-[#84B000] px-6 py-12 lg:py-24 lg:pl-12">
      <article className="w-fit font-sans tracking-[-3%] text-white">
        <h2 className="mb-6 text-[28px] font-semibold leading-[48.44px]">
          {college?.journal?.title}
        </h2>
        <p className="text-sm font-normal leading-7 sm:text-[16px] lg:text-xl lg:leading-[34.6px]">
          {college?.journal?.description}
        </p>
      </article>
      <div className="hidden h-[386.5px] w-full overflow-hidden sm:block xl:h-auto">
        <Image
          src="/images/colleges/journal-image.svg"
          alt="mujast journal"
          width="300"
          height="300"
          className="h-full w-full object-cover object-left xl:object-none xl:object-center"
        />
      </div>
    </section>
  );
}
