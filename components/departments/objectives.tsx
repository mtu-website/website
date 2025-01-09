import { Department } from '@/lib/types';

export default function Objectives({ department }: { department: Department }) {
  console.log(department);
  return (
    <section className="rounded-[5px] bg-[#84B000] bg-cover px-6 py-12 lg:w-full lg:px-12 lg:py-24">
      <article className="mx-auto items-center justify-between gap-12 lg:flex lg:w-[1170px] lg:gap-24 xl:w-[1440px]">
        <h4 className="mb-4 text-center font-whyte text-[24px] font-bold uppercase leading-[24px] tracking-[-3%] text-white lg:text-[28px] xl:text-3xl xl:leading-9">
          objectives
        </h4>
        <p className="text-center font-sans text-sm font-medium leading-[28px] tracking-[-4%] text-[#F5F4F4] lg:text-left lg:text-[16px] xl:leading-9">
          {department.objectives}
        </p>
      </article>
    </section>
  );
}
