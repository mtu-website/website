import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { admissions } from '@/lib/data';
const courses = admissions[0].undergraduate;

export default function Courses() {
  return (
    <section>
      <div className="px-6 py-12 lg:px-12 lg:py-24">
        <article className="">
          <h4 className="font-mono text-sm font-medium uppercase leading-[16.44px] tracking-[-4%] text-[#84B000] underline lg:text-[16px]">
            courses
          </h4>
          <h1 className="my-4 font-sans text-xl font-medium leading-7 tracking-[-4%] text-[#0F0F0F] lg:text-2xl lg:leading-8 xl:text-4xl xl:leading-[45px]">
            Check out our available programmes.
          </h1>
        </article>

        <div className="relative my-6 min-w-full lg:my-12">
          <Carousel>
            <div className="absolute -top-0 right-12 sm:-top-10 sm:block lg:-top-16">
              <div className="w-fit">
                <CarouselPrevious className="-left-6 h-8 w-8 rounded-[1px] bg-[#FED7FF] text-[#BD2BBF] hover:bg-[#BD2BBF] hover:text-[#FFFFFF]" />
                <CarouselNext className="h-8 w-8 rounded-[1px] bg-[#FED7FF] text-[#BD2BBF] hover:bg-[#BD2BBF] hover:text-[#FFFFFF]" />
              </div>
            </div>

            <CarouselContent className="my-9 lg:my-0 lg:py-4">
              {courses.slice(0, 2).map((course) => (
                <CarouselItem
                  key={course.id}
                  className="mx-4 flex max-w-fit p-0"
                >
                  <Link
                    href={`/programmes/${course.college}/${course.programs[0].program}`}
                    className="h-fit w-full overflow-hidden"
                    style={{ boxShadow: '0px 0px 4px 0px #00000040' }}
                  >
                    <Image
                      src={course.programs[0].src}
                      alt={course.programs[0].program}
                      width="546"
                      height="378"
                      className="h-full w-full object-cover object-top lg:h-[378px] lg:w-[500px]"
                    />
                    <div className="flex items-center justify-between px-[25px] py-8">
                      <article>
                        <h4 className="font-sans text-[10px] font-normal capitalize leading-6 tracking-[-5%] text-[#2E2E2E] lg:text-[16px]">
                          {course.programs[0].honours}
                          <span className="normal-case"> in </span>
                          {course.programs[0].field}
                        </h4>
                        <h2 className="font-sans text-[14.83px] font-medium capitalize leading-[23.74px] tracking-[-3%] text-[#941196] lg:text-2xl lg:leading-[38.4px]">
                          {course.programs[0].program}
                        </h2>
                      </article>
                      <ArrowTopRightIcon className="h-auto w-[19.78px] text-[#941196] lg:w-8" />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
