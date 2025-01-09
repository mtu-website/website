'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { PlusIcon } from '@radix-ui/react-icons';

type Props = {
  searchModalOpen: boolean;
  setSearchModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface CourseData {
  [key: string]: string[];
}

interface PeopleData {
  [key: string]: string[];
}

interface AdmissionsData {
  [key: string]: string[];
}

interface OtherData {
  [key: string]: string[];
}

interface SearchResult {
  [key: string]: string[];
}

type Data = (CourseData | PeopleData | AdmissionsData | OtherData)[];

const data: Data = [
  {
    courses: ['Computer Science'],
  },
  {
    people: ['Prof. D.K Olukoya', 'Prof. Elijah Ayolabi'],
  },
  {
    admissions: ['undergraduate', 'postgraduate', 'open and distance learning'],
  },
  {
    other: ['alumni', 'students', 'governance', 'research'],
  },
];

const filterButtons = ['courses', 'people', 'admissions', 'other'];

const SearchModal: React.FC<Props> = ({
  searchModalOpen,
  setSearchModalOpen,
}) => {
  // const [show, setShow] = useState('hidden');
  const [results, setResults] = useState<SearchResult[]>([]);

  function handleSearch(query: string) {
    const lowerCaseQuery = query.toLowerCase();

    const response = data.reduce((acc, item) => {
      for (const key in item) {
        const matches = item[key].filter((value: string) =>
          value.toLowerCase().includes(lowerCaseQuery),
        );
        if (matches.length > 0) {
          //&& key === "courses"
          acc.push({ [key]: matches });
        }
      }
      return acc;
    }, [] as SearchResult[]);

    setResults(response);
  }

  return (
    <section
      className={`fixed top-0 z-50 mx-auto flex h-full max-w-[1920px] bg-[#0F0F0F] ${
        searchModalOpen ? 'w-full -translate-y-0' : 'w-0 -translate-y-full'
      } transform transition-all duration-500 ease-in-out`}
    >
      <div
        className={`duration-2000 w-full overflow-y-auto transition-opacity delay-100 ease-in-out ${
          searchModalOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex">
          <Image
            src="/images/search-modal-image.png"
            alt="MTU Library"
            width="184"
            height="650"
            className="hidden h-screen lg:block lg:w-[184px] xl:w-[300px]"
          />
          <div className="w-full p-8 sm:px-12 lg:py-24 xl:p-24">
            <p className="mb-12 font-sans text-sm font-medium leading-[16.94px] tracking-[-4%] text-[#FFFFFF75]">
              What are you looking for?
            </p>
            <div className="mb-12 flex min-w-[80px] flex-col justify-between gap-3 lg:w-[102px] lg:flex-row">
              {filterButtons.map((btn, index) => (
                <button
                  key={index}
                  className="rounded-[2px] border-[1px] border-[#232323] bg-transparent px-6 py-4 font-mono text-sm font-semibold uppercase leading-[16.44px] tracking-[-4%] text-[#303030] focus:bg-white"
                >
                  {btn}
                </button>
              ))}
            </div>
            <div className="mb-8 flex w-full items-center justify-between lg:mb-24">
              <input
                className="h-auto w-full cursor-text bg-transparent font-sans text-xl font-bold uppercase leading-[33.89px] tracking-[-3%] text-[#FFFFFF2B] caret-[#84B000] outline-none placeholder:text-[#FFFFFF2B] sm:text-[28px] lg:text-[45px] lg:leading-[54.46px]"
                placeholder="type to search..."
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
              />
              {/* <UilSearch className=" text-[#FFFFFF2B] w-6 h-6" /> */}
            </div>

            <div className="flex flex-col justify-between lg:flex-row">
              {results.map((result, index) => (
                <div key={index}>
                  {/* Iterate over each key (like "courses", "people", etc.) in the result object */}
                  {Object.keys(result).map((category) => (
                    <div key={category} className="mb-6 lg:mb-0">
                      <h3 className="font-mono text-xl font-semibold uppercase leading-[23.48px] tracking-[-4%] text-[#84B000] lg:mb-6 lg:text-2xl lg:leading-[28.18px]">
                        {category}
                      </h3>{' '}
                      {/* Category title */}
                      <ul>
                        {/* List each item under the category */}
                        {result[category].map((item: string, i: number) => (
                          <li key={i}>
                            <Link
                              href=""
                              className="mb-3 font-sans text-[14px] font-medium capitalize leading-[16.94px] tracking-[-4%] text-[#FFFFFF80]"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-full w-[44px] bg-[#84B000] py-10 lg:w-[72px] ${
          searchModalOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex h-36 items-center justify-center py-24">
          <button
            className="flex h-[44px] min-w-[150px] rotate-90 items-center gap-6 lg:h-[72px]"
            onClick={() => setSearchModalOpen(!searchModalOpen)}
          >
            <PlusIcon className="h-[24px] w-[24px] rotate-45 text-[#FFFFFFAD]" />
            <p className="rotate-180 font-sans text-[16px] font-medium uppercase leading-[19.36px] tracking-[10%] text-[#FFFFFFAD]">
              close
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchModal;
