import Link from 'next/link';
import Image from 'next/image';
import { newsFeed } from '@/lib/data';

export default function LatestNews() {
  return (
    <section className="my-4 flex flex-col items-center justify-center lg:my-24">
      {/* Text */}
      <div className="lg:w-full">
        <div className="items-start justify-between lg:flex">
          <div className="mb-4">
            <div className="mb-4 items-center justify-between lg:flex">
              <div className="flex items-center">
                {/* Line */}
                <div
                  style={{
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                  }}
                  className="mr-[10px] h-5 w-1.5 bg-[#1D0039] lg:h-9"
                ></div>
                <div>
                  <h1 className="text-center font-whyte text-2xl font-bold uppercase leading-[30px] text-[#1D0039] lg:pr-12 lg:text-left lg:text-[36px] lg:leading-[49px] xl:pr-0">
                    latest news at mtu
                  </h1>
                </div>
              </div>
            </div>

            <article className="inter text-sm font-medium leading-7 text-[#3C3C3C] lg:mt-6 lg:w-[630px] xl:text-[16px]">
              Check out the latest news on Mountain Top University. Be the first
              to know what’s happening at Mountain Top University. Get insights
              into our academic breakthroughs, student successes, and much more.
            </article>
          </div>
          <Link
            href="/"
            className="inline h-fit w-fit pt-3"
            style={{ borderBottom: '1px solid #480082' }}
          >
            <span className="mr-2 text-sm font-bold capitalize text-[#480082] xl:text-[16px]">
              all MTU news
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="arrow-up-right"
              className="inline h-[14px] w-[14px] font-semibold"
            >
              <path
                fill="#480082"
                d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="grid-cols-2 gap-6 lg:grid">
          <div className="current-news">
            <div className="my-8 w-full flex-col justify-between lg:flex">
              <Image
                src="/images/news-placeholder-image.png"
                alt="News 1"
                width={700}
                height={350}
                className="w-full"
              />
              <article className="mt-8 lg:px-4">
                <h6 className="inter mb-2 text-sm leading-5 text-[#5E5E5E]">
                  24-07-2024
                </h6>
                <h1 className="inter mb-4 text-[16px] font-semibold leading-[22px] text-[#1D0039] lg:text-[20px] xl:leading-9">
                  Mountain Top University Celebrates Vice Chancellor Professor
                  Elijah Ayolabi&#39;s Remarkable 60th Diamond Jubilee!
                </h1>
                <p className="inter mb-4 text-sm font-normal leading-6 text-[#5E5E5E] lg:text-[16px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis nobis aliquid perspiciatis, dicta libero, non laborum
                  sapiente necessitatibus molestias ducimus excepturi iusto
                  eligendi nostrum at, quibusdam quo in temporibus repudiandae!
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
              </article>
            </div>
          </div>
          <div className="old-news hidden lg:block">
            {newsFeed.map((item) => {
              return (
                <article key={item.id} className="my-8 mt-8 w-full px-4">
                  <h6 className="inter mb-2 text-sm leading-5 text-[#5E5E5E]">
                    {item.date}
                  </h6>
                  <h1 className="inter mb-4 text-[16px] font-semibold leading-9 text-[#1D0039] lg:text-[20px]">
                    {item.title}
                  </h1>
                  <p className="inter mb-4 text-[16px] font-normal leading-6 text-[#5E5E5E]">
                    {item.description}
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
