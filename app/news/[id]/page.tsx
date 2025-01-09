import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

import { formatDate, truncateByCharacters } from '@/lib/utils';

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

export default function NewsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const news = use(
    fetch(`https://mtu.edu.ng/api/mtu-news/${id}`).then((res) => res.json()),
  );

  return (
    <section>
      {/* Header */}
      <div className="px-4 py-6 lg:px-12">
        <div>
          <h1 className="my-2 font-sans text-[24px] font-semibold leading-10 tracking-[4%] text-[#84B000] lg:text-[56px] lg:leading-[83.44px]">
            {news?.title}
          </h1>
          <p className="my-3 font-sans text-[16px] font-medium leading-7 tracking-[-3%] text-[#505050]">
            Check out the latest news on Mountain Top University. Be the first
            to know what’s happening at Mountain Top University. Get insights
            into our academic breakthroughs, student successes, and much more.
          </p>
          <div className="flex w-fit items-center justify-between font-sans text-[10.5px] font-semibold uppercase leading-9 tracking-[-3%] text-[#6F6F6F] lg:text-sm">
            <div className="flex items-center justify-between">
              <p>{news?.writer || truncateByCharacters(news?.author, 20)}</p>
              <div className="mx-2 h-2 w-2 rounded-[50%] bg-[#A92413]"></div>
            </div>
            <div className="flex items-center justify-between">
              <p>
                {news?.readTime || '5'} {news?.readTimeUnit || 'mins'} read
              </p>
              <div className="mx-2 h-2 w-2 rounded-[50%] bg-[#A92413]"></div>
            </div>
            <div className="flex items-center justify-between">
              <p>{formatDate(news?.created_at)}</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full py-6">
          <Image
            src={news?.imageUrl || '/images/mtu_image_test.jpg'}
            alt={news?.title || 'Default'}
            width="808"
            height="462"
            className="mx-auto h-full w-auto object-cover object-center"
          />
        </div>
      </div>
      {/* Content */}
      <div className="bg-[#FFF1FF] px-4 py-6 lg:px-12 lg:py-24">
        <article className="mb-16">
          <h3 className="my-2 font-sans text-[18px] font-semibold leading-[30px] tracking-[-4%] text-[#434343] lg:text-[28px] lg:leading-[41.72px]">
            {news?.title}
          </h3>
          <p className="my-4 font-sans text-sm font-normal leading-8 tracking-[-4%] text-[#434343] lg:text-[16px] lg:leading-[34px]">
            {news.content}
          </p>
        </article>
        <div className="grid grid-cols-1">
          <div className="mb-4 h-[2px] w-[85%] justify-self-end bg-[#545454] underline"></div>
          <div className="flex items-center justify-self-end">
            <p className="mr-4 font-sans text-[16px] font-medium uppercase leading-6 tracking-[2%] text-[#6C006D]">
              share on:
            </p>
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="border-[1.3px] border-[#6C006D] p-4"
            >
              <InstagramLogoIcon className="h-[30px] w-[30px] text-[#6C006D]" />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="border-[1.3px] border-[#6C006D] p-4"
            >
              <LinkedInLogoIcon className="h-[30px] w-[30px] text-[#6C006D]" />
            </Link>
            <Link
              href="https://x.com/"
              target="_blank"
              className="border-[1.3px] border-[#6C006D] p-4"
            >
              <TwitterLogoIcon className="h-[30px] w-[30px] text-[#6C006D]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
