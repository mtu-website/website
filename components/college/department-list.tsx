import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { College, Department } from '@/lib/types';
import { generateSlug } from '@/lib/utils';

export default function DepartmentList({ college }: { college: College }) {
  const collegeUrl = generateSlug(college.name);
  const departments = college.departments;
  return (
    <section className="bg-[#84B000] px-3 py-12">
      <article className="mb-9 px-6 lg:px-12">
        <h2 className="mb-9 font-whyte text-[28px] font-medium uppercase leading-[44.8px] tracking-[-4%] text-white underline decoration-1 underline-offset-2 lg:text-4xl lg:leading-[57.6px]">
          Departments
        </h2>
        <p className="font-sans text-sm font-normal leading-7 tracking-[-4%] text-white lg:text-xl lg:leading-[39.4px]">
          {college.departmentText}
        </p>
      </article>
      <div className="mb-9 px-6 lg:px-12">
        {departments?.map((department: Department) => (
          <Link
            href={`/colleges/${collegeUrl}/${generateSlug(department.name)}`}
            key={department.id}
            className="mb-4 flex justify-between bg-white p-[18px] lg:min-w-[500px] lg:px-[26.8px] lg:py-[34.51px] xl:min-w-[624.55px]"
            style={{
              boxShadow: '0px 2px 5px 0px #00000026',
              borderLeft: '4.2px solid #540096',
            }}
          >
            <p className="text-[16px] lg:text-2xl">{department.name}</p>

            <ArrowTopRightIcon className="h-auto w-[15.4px] text-black lg:w-8" />
          </Link>
        ))}
      </div>
    </section>
  );
}
