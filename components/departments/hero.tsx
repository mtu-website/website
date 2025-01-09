import Image from 'next/image';
import Navigation from './navigation';

type Department = {
  id: string;
  name: string;
  introduction: string;
  heroImage: string;
};

export default function Hero({ department }: { department: Department }) {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20">
        <article className="px-6 py-12 lg:pl-12 lg:pt-12">
          <Navigation />
          <p className="my-6 font-mono text-xs font-semibold uppercase leading-[25.6px] tracking-[-3%] text-[#6F6F6F] sm:text-sm lg:my-12 lg:text-[16px]">
            college of basic and applied sciences
          </p>
          <div className="mb-6">
            <h1 className="w-auto font-whyte text-[28px] font-medium uppercase leading-[33.6px] tracking-[-3%] text-[#84B000] sm:text-4xl sm:leading-[43.2px] xl:text-[56px] xl:leading-[72.24px]">
              {`Department of ${department.name}`}
            </h1>
          </div>
          <p className="font-sans font-medium leading-8 tracking-[3%] text-[#6F6F6F] lg:text-[16px] xl:text-xl xl:leading-9">
            {department.introduction}
          </p>
        </article>
        <div className="h-[360px] lg:h-[873px] lg:min-w-[408px] xl:min-w-[552px]">
          <Image
            src={department.heroImage}
            alt="Default"
            width="0"
            height="0"
            className="h-full w-full object-cover object-center lg:block"
          />
        </div>
      </div>
    </section>
  );
}
