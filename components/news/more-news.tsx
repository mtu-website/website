import Image from 'next/image';
import Link from 'next/link';

export default function MoreNews() {
  return (
    <div className="py-16">
      <h3 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-[2%] text-[#0E4510]">
        More News
      </h3>
      <div className="flex items-center">
        <div className="h-[2px] w-full bg-[#545454] underline"></div>
        <div className="h-3 w-3 rounded-[50%] bg-[#545454]"></div>
      </div>

      <div className="mt-9 grid gap-2 lg:grid-cols-2 xl:grid-cols-3">
        <article className="mb-4 xl:w-[500px]">
          <div className="h-[228px] w-full">
            <Image
              src="/images/news/hero_image.png"
              width="300"
              height="224"
              alt="news image"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-4 px-3">
            <h4 className="mb-2 font-sans text-xs font-medium leading-[21.72px] tracking-[4%] text-[#0E4510]">
              25-06-2024
            </h4>
            <h3 className="mb-3 font-sans text-2xl text-[18px] font-semibold leading-[30px] tracking-[-4%] text-[#84B000] lg:leading-[35.76px]">
              Mountain Top University Celebrates Vice Chancellor Professor
              Elijah Ayolabis Remarkable 60th Diamond Jubilee!
            </h3>
            <p className="mb-3 font-sans text-[16px] font-normal leading-[30px] tracking-[4%] text-[#5E5E5E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis
              nobis aliquid perspiciatis, dicta libero, non laborum.
            </p>
            <Link href="/">
              <span className="inter flex w-fit items-center justify-between text-sm font-semibold text-[#480082] lg:text-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="2"
                  viewBox="0 0 29 2"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M1 1H28"
                    stroke="#480082"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Read More
              </span>{' '}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
