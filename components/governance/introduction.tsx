import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="px-3 py-12 lg:px-12 lg:py-24">
      <article className="mx-auto flex w-fit flex-col-reverse justify-between gap-12 lg:flex-row">
        <div className="px-3 text-left font-sans text-[16px] font-normal leading-8 tracking-[-4%] text-[#6F6F6F] xl:w-[850px]">
          <p className="my-2">
            <span className="font-bold">Professor Daniel Olukoya,</span> the
            Chancellor of Mountain Top University (MTU) has played a pivotal
            role in shaping the institution into a centre of academic excellence
            and spiritual grounding. His leadership is deeply rooted in a vision
            to integrate cutting-edge education with strong moral and spiritual
            principles. This dual focus reflects his beliefs in raising leaders
            who are not only academically and professionally competent but also
            spiritually upright, a philosophy embedded in the university’s
            motto:
            <span className="font-semibold italic text-[#84B000]">
              “Empowered to Excel”.
            </span>{' '}
          </p>

          <p className="my-2">
            <span className="font-bold">Mountain Top University (MTU)</span> has
            cemented its reputation as a leader in quality education in Nigeria,
            being ranked{' '}
            <span className="font-semibold italic text-[#84B000]">
              first in the country for Sustainability Development Goal 4
              (Quality Education)
            </span>{' '}
            by Times Higher Education’s 2024 Impact Rankings. Under the
            transformative leadership of its Chancellor, Professor D. K.
            Olukoya, and Vice-Chancellor, Professor Elijah Ayolabi, Mountain Top
            University has established a governance framework that exemplifies
            inclusivity, accountability, and student-centric progress. While
            Professor Olukoya’s visionary leadership lays the foundation for
            integrating moral, spiritual, and academic excellence, Professor
            Ayolabi, as the academic head, drives the operational and
            intellectual growth of the institution. Together, they have crafted
            a governance structure that effectively bridges strategic direction
            with academic execution.
          </p>
        </div>
        <div className="">
          <Image
            src="/images/governance/professor_olukoya.png"
            alt="Professor D.K. Olukoya"
            width={2000}
            height={2000}
            className="mx-auto h-[285px] w-[280px] lg:h-[381px] lg:w-[413px]"
          />
          <article className="text-center">
            <h3 className="font-sans text-xl font-bold capitalize leading-8 tracking-[-3%] text-[#84B000]">
              prof. D.K. olukoya
            </h3>
            <p className="mx-auto w-[327px] font-sans text-sm font-medium capitalize leading-[22.4px] tracking-[-3%] text-[#6F6F6F] lg:text-[16px] lg:leading-[25.6px]">
              Chairman and Chancellor, Mountain Top University
            </p>
          </article>
        </div>
      </article>
    </section>
  );
}
