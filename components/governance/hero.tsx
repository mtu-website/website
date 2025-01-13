import { DownloadIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-6 py-12 lg:px-12 lg:py-12">
      <article className="mx-auto lg:w-[960px]">
        <h1 className="mb-4 text-center font-whyte text-[28px] font-bold uppercase leading-[67.2px] tracking-[-3%] text-[#84B000] lg:mb-6 lg:text-[56px]">
          governance
        </h1>
        <p className="mb-9 text-center font-sans text-[16px] font-medium leading-7 tracking-[-3%] text-[#6F6F6F] lg:text-[16px] lg:leading-8">
          Our governance is steered by a dedicated team of professionals
          committed to upholding the highest standards of institutional
          management. From the board of trustees to the Vice-Chancellor and
          Senate, each level of governance plays a vital role in shaping
          policies, fostering academic growth, and maintaining a nurturing
          environment for staff and students.
        </p>
        <Link
          href="https://drive.google.com/file/d/1qchuBhZZW4zqVdQJZ1MDDRd48Hjoqqgs/view?usp=sharing"
          target="_blank"
          className="mx-auto flex h-auto w-fit items-center gap-3 bg-[#6C006D] px-[15px] py-[10px] text-white"
        >
          <span className="leading-[21px]tracking-[-2%] font-mono text-sm font-bold uppercase">
            download pdf
          </span>
          <DownloadIcon width={20} height={20} />
        </Link>
      </article>
    </section>
  );
}
