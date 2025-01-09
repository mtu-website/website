'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { admissions } from '@/lib/data';
const courses = admissions[0].undergraduate;

export default function FilteredSearch() {
  const [search, setSearch] = useState('');

  return (
    <section className="px-6 py-6 lg:px-32 lg:py-24">
      <div className="flex justify-center">
        <div className="relative w-fit">
          <input
            type="text"
            name=""
            id=""
            className="h-[45.18px] w-[300px] bg-[#F1F1F1] px-5 py-[10px] text-sm leading-[13.45px] focus:outline-[#6F6A6A] sm:w-[400px] lg:h-[86px] lg:w-[698px]"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search for a course"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-9 mt-16 grid gap-16 sm:grid-cols-2">
          {courses
            .filter((course) =>
              course.programs[0].program.toLowerCase().includes(search),
            )
            .map((course) => (
              <Link
                key={course.id}
                href={course.programs[0].url}
                className="h-auto w-fit"
                style={{ boxShadow: '0px 0px 4px 0px #00000040' }}
              >
                <Image
                  src={course.programs[0].src}
                  alt={course.programs[0].program}
                  width="546"
                  height="378"
                  className="h-[200px] w-auto lg:h-auto lg:w-[546px]"
                />
                <div className="flex items-center justify-between px-[25px] py-8">
                  <article>
                    <h4 className="font-sans text-[10px] font-normal capitalize leading-6 tracking-[-5%] text-[#777777] lg:text-[16px]">
                      {course.programs[0].honours}
                      <span className="normal-case"> in </span>
                      {course.programs[0].field}
                    </h4>
                    <h2 className="font-sans text-[14.83px] font-medium capitalize leading-[23.74px] tracking-[-3%] text-[#BD2BBF] lg:text-2xl lg:leading-[38.4px]">
                      {course.programs[0].program}
                    </h2>
                  </article>
                  <ArrowTopRightIcon className="h-auto w-[19.78px] text-[#BD2BBF] lg:w-8" />
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* pagination */}
      <Pagination className="my-16">
        <PaginationContent className="gap-0">
          <PaginationItem className="h-[38px] w-[47px] rounded-none border-[1px] border-[#C6B9B9] text-center hover:bg-[#BD2BBF]">
            <PaginationPrevious
              href="#"
              className="w-full bg-transparent font-sans text-xs font-semibold leading-[14.52px] text-[#444444] hover:border-transparent hover:bg-transparent hover:text-[#FFF8F8]"
            />
          </PaginationItem>
          <PaginationItem className="h-[38px] w-[53px] rounded-none border-[1px] border-[#C6B9B9] text-center hover:bg-[#BD2BBF] sm:w-[214.8px]">
            <PaginationLink
              href="#"
              className="w-full bg-transparent font-sans text-xs font-semibold leading-[14.52px] text-[#444444] hover:border-transparent hover:bg-transparent hover:text-[#FFF8F8]"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="h-[38px] w-[53px] rounded-none border-[1px] border-[#C6B9B9] text-center hover:bg-[#BD2BBF] sm:w-[214.8px]">
            <PaginationLink
              href="#"
              className="w-full bg-transparent font-sans text-xs font-semibold leading-[14.52px] text-[#444444] hover:border-transparent hover:bg-transparent hover:text-[#FFF8F8]"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="h-[38px] w-[47px] rounded-none border-[1px] border-[#C6B9B9] text-center hover:bg-[#BD2BBF]">
            <PaginationNext
              href="#"
              className="w-full bg-transparent font-sans text-xs font-semibold leading-[14.52px] text-[#444444] hover:border-transparent hover:bg-transparent hover:text-[#FFF8F8]"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
