import Link from 'next/link';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

// import { admissions } from '@/lib/data';

import { Department } from '@/lib/types';
// const courses = admissions[0].undergraduate;

export default function CoursesOffered({
  department,
}: {
  department: Department;
}) {
  const courses = department.programs;
  return (
    <section className="bg-[#FFF1FF] px-4 py-12 lg:px-24 lg:py-24">
      <h2 className="text-center font-whyte text-[24px] font-bold uppercase leading-[24px] tracking-[-3%] text-[#1F1F1F] lg:text-[28px] xl:text-3xl xl:leading-9">
        courses offered
      </h2>
      <div className="justify-center lg:flex">
        <div className="mb-9 mt-16 grid gap-4 sm:grid-cols-2 lg:gap-16">
          {courses?.map((course) => (
            <Link
              key={course.id}
              href={`/programmes`}
              // href={`/programmes/${generateSlug(course.name)}`}
              className="h-auto w-full lg:w-[500px]"
              style={{ boxShadow: '0px 0px 4px 0px #00000040' }}
            >
              {/* <Image
                src={course.programs[0].src}
                alt={course.programs[0].program}
                width="546"
                height="378"
                className="h-auto w-auto lg:h-auto lg:w-[546px]"
              /> */}

              <div className="flex items-center justify-between bg-white px-[25px] py-8">
                <article>
                  <h4 className="font-mono text-[10px] font-semibold uppercase leading-6 tracking-[-5%] text-[#2E2E2E] lg:text-[16px]">
                    {course?.honours}
                    <span className="uppercase"> in </span>
                    {course?.field}
                  </h4>
                  <h2 className="font-sans text-[14.83px] font-medium capitalize leading-[23.74px] tracking-[-3%] text-[#941196] lg:text-2xl lg:leading-[38.4px]">
                    {course?.program}
                  </h2>
                </article>
                <ArrowTopRightIcon className="h-auto w-[19.78px] text-[#941196] lg:w-8" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
