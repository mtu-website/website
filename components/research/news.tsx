import Link from 'next/link';
export default function News() {
  return (
    <section className="flex h-[536px] items-end bg-[url('/images/research/research-news-background.png')] bg-cover px-4 py-8 lg:px-12 lg:py-24">
      <article className="px-3 py-6 sm:px-9 sm:pb-9">
        <h4 className="mb-3 font-mono text-[16px] font-semibold uppercase leading-[25.6px] tracking-[-3%] text-[#84B000]">
          research news
        </h4>
        <h1 className="mb-3 font-sans text-2xl font-medium leading-[38.4px] tracking-[-4%] text-white lg:text-[32px] lg:leading-[50px]">
          Journal of Humanities, Management and Social Sciences: MTU-JHUMASS
        </h1>
        <Link href="https://jhumass.mtu.edu.ng/">
          <span className="inter flex w-fit items-center justify-between text-sm font-semibold text-[#84B000] lg:text-[16px]">
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
                stroke="#84B000"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Read More
          </span>{' '}
        </Link>
      </article>
    </section>
  );
}
