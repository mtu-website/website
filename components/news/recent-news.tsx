'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

import {
  convertToPlainText,
  formatDate,
  truncateByCharacters,
} from '@/lib/utils';

import { News, RecentNewsProps } from '@/lib/types';

export default function RecentNews({ news }: RecentNewsProps) {
  const [modifiedNews, setModifiedNews] = useState<News[]>([]);
  const [maxVisiblePages, setMaxVisiblePages] = useState(5);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access window only in the browser
      setMaxVisiblePages(window.innerWidth < 768 ? 2 : 5);
    }
  }, []);

  useEffect(() => {
    const updatedNews: News[] = news.map((item) => ({
      ...item,
      uniqueName: item.uniqueName,
      title: truncateByCharacters(item.title, 50),
      content: truncateByCharacters(convertToPlainText(item.content), 50),
      created_at: formatDate(new Date(item.created_at)),
      updated_at: formatDate(new Date(item.updated_at)),
    }));
    setModifiedNews(updatedNews);
  }, [news]);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const paginatedNews = modifiedNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // pagination handler
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const halfVisible = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(
    Math.min(currentPage - halfVisible, totalPages - maxVisiblePages + 1),
    1,
  );
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  // const startPage = Math.max(currentPage - 1, 1);
  // const endPage = Math.min(startPage + 3, totalPages);
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <section className="bg-[#FFF1FF] px-6 py-12 lg:px-12 lg:py-24">
      <h3 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-[2%] text-[#0F0F0F]">
        Recent News
      </h3>
      <div className="my-9 flex items-center">
        <div className="h-[2px] w-full bg-[#5D5D5D38] underline"></div>
        <div className="h-3 w-3 rounded-[50%] bg-[#5D5D5D38]"></div>
      </div>
      {/* <div className="mb-9 mt-3 h-[2px] bg-[#5D5D5D2B] underline"></div> */}

      {/* News Flex Container */}
      <div className="grid gap-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {paginatedNews.map((item) => (
          <article className="mb-12 xl:w-[380px]" key={item.id}>
            <div className="h-[230px] w-full">
              <Image
                src="/images/mtu_image_test.jpg"
                width="300"
                height="224"
                alt="News Image"
                quality={100}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-4 px-3">
              <h4 className="mb-2 font-sans text-xs font-medium leading-[21.72px] tracking-[4%] text-[#0E4510]">
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

      {/* pagination */}
      <Pagination className="my-16">
        <PaginationContent className="gap-0">
          {visiblePages.map((page) => (
            <PaginationItem
              key={page}
              className={`h-[38px] w-[120px] rounded-none border-[1px] border-[#C6B9B9] text-center hover:bg-[#BD2BBF] lg:w-[193px] xl:w-[263px] ${
                currentPage === page ? 'bg-[#BD2BBF]' : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              <PaginationLink
                className={`w-full bg-transparent font-sans text-xs font-semibold leading-[14.52px] hover:border-transparent hover:bg-transparent hover:text-[#FFF8F8] ${currentPage === page ? 'text-[#FFF8F8]' : 'text-[#444444]'}`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem
            className="h-[38px] w-[47px] rounded-none border-[1px] border-[#C6B9B9] text-center hover:bg-[#BD2BBF]"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <PaginationPrevious className="w-full bg-transparent font-sans text-xs font-semibold leading-[14.52px] text-[#444444] hover:border-transparent hover:bg-transparent hover:text-[#FFF8F8]" />
          </PaginationItem>
          <PaginationItem
            className="h-[38px] w-[47px] rounded-none border-[1px] border-[#C6B9B9] text-center hover:bg-[#BD2BBF]"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <PaginationNext className="w-full bg-transparent font-sans text-xs font-semibold leading-[14.52px] text-[#444444] hover:border-transparent hover:bg-transparent hover:text-[#FFF8F8]" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
