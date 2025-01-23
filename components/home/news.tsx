import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import NewsDetail from './newsDetails';

export default async function News() {
  const data = await fetch('https://media.mtu.edu.ng/api/mtu-news');
  const news = await data.json();

  return (
    <section className="bg-[#FFF1FF] px-6 py-12 lg:px-12 lg:py-24">
      <div className="mb-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
          <article>
            <h1 className="mb-4 font-sans text-xl font-semibold leading-8 text-[#0F0F0F] lg:text-[28px]">
              Latest News at MTU
            </h1>
            <p className="font-sans text-[16px] font-normal leading-8 tracking-[-4%] text-[#5E5E5E]">
              Check out the latest news on Mountain Top University. Be the first
              to know what’s happening at Mountain Top University. Get insights
              into our academic breakthroughs, student successes, and much more.
            </p>
          </article>
          <Link
            href="/news"
            className="flex w-full items-center gap-2 text-[#BD2BBF] lg:justify-end"
          >
            <span className="text-sm font-semibold capitalize leading-[16.94px] tracking-[-4%] underline underline-offset-4 xl:text-[16px]">
              all MTU news
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <NewsDetail news={news} />
    </section>
  );
}
