'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import {
  convertToPlainText,
  formatDate,
  truncateByCharacters,
} from '@/lib/utils';

import { News, RecentNewsProps } from '@/lib/types';

export default function NewsDetail({ news }: RecentNewsProps) {
  const [modifiedNews, setModifiedNews] = useState<News[]>([]);

  useEffect(() => {
    const updatedNews: News[] = news.map((item) => ({
      ...item,
      uniqueName: item.uniqueName,
      title: truncateByCharacters(item.title, 60),
      content: truncateByCharacters(convertToPlainText(item.content), 20),
      created_at: formatDate(new Date(item.created_at)),
      updated_at: formatDate(new Date(item.updated_at)),
    }));
    setModifiedNews(updatedNews);
  }, [news]);

  return (
    <section>
      {/* News Flex Container */}
      <div className="flex flex-col justify-between lg:flex-row">
        {modifiedNews.slice(0, 3).map((item) => (
          <article
            className="mb-12 lg:w-[290px] xl:w-[400px] 2xl:w-[520px]"
            key={item.id}
          >
            <div className="h-[230px] w-full lg:h-[300px]">
              <Image
                src="/images/mtu_image_test.jpg"
                width={2000}
                height={2000}
                alt={item.title}
                quality={100}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-4 px-3">
              <h4 className="mb-2 font-sans text-xs font-medium leading-[21.72px] tracking-[4%] text-[#4D4D4D]">
                {item.created_at}
              </h4>
              <h3 className="mb-3 font-sans text-xl font-semibold leading-8 tracking-[-4%] text-[#0F0F0F]">
                {item.title}
              </h3>
              <p className="mb-3 font-sans text-sm font-normal leading-7 tracking-[4%] text-[#5E5E5E]">
                {item.content || item.title}
              </p>
              <Link
                href={`/news/${item.uniqueName}`}
                className="inter flex w-fit items-center justify-between text-sm font-semibold text-[#BD2BBF] lg:text-[16px]"
              >
                <span className="underline underline-offset-4">Read more</span>
                <ChevronRightIcon className="ml-2 h-4 w-4 text-[#BD2BBF]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
