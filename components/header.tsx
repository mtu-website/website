'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SearchModal from './search-modal';
import Sidebar from './sidebar';

const navigationLinks = [
  { name: 'study at mtu', href: '/study-at-mtu' },
  { name: 'research', href: '/research' },
  { name: 'student corner', href: '/student-corner' },
  { name: 'staff corner', href: '/staff-corner' },
  { name: 'governance', href: '/governance' },
];

interface HeaderProps {
  themeColor: string;
  fontColor: string;
}

export default function Header({ themeColor, fontColor }: HeaderProps) {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const pathname = usePathname();

  return (
    <section>
      <Sidebar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />
      <SearchModal
        searchModalOpen={searchModalOpen}
        setSearchModalOpen={setSearchModalOpen}
      />
      <nav
        style={{ background: themeColor }}
        className={`${sidebarOpen ? 'relative -z-10' : 'sticky top-0'} ${
          searchModalOpen ? 'relative -z-10' : 'sticky top-0'
        } z-40 flex items-center justify-between bg-white`}
      >
        <div className="flex h-[56px] w-[100vw] items-center justify-center lg:w-[800px] lg:justify-start">
          {/* Sidebar - desktop & Mobile */}
          <button
            onClick={() => setSideBarOpen(!sidebarOpen)}
            className="absolute left-0 mx-4 lg:relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
              id="align-left"
              width={24}
            >
              <path
                fill={fontColor ? fontColor : '#84B000'}
                d="M3,7h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,5,2,5.4,2,6S2.4,7,3,7z M3,11h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H3c-0.6,0-1,0.4-1,1S2.4,11,3,11z M21,13H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,13,21,13z M17,17H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S17.6,17,17,17z"
              ></path>
            </svg>
          </button>
          {/* Mountain Top University Emblem - Mobile */}
          <Link
            href="/"
            className="flex items-center justify-between lg:hidden"
          >
            <Image
              src="/images/logo.png"
              alt="Mountain Top University Logo"
              width={32}
              height={12}
              className=""
            />
            <span
              className="logo-text inline-block font-whyte text-[0.8em] font-bold uppercase text-[#84B000]"
              // style={{ color: fontColor }}
            >
              Mountain Top University
            </span>
          </Link>

          <div>
            <ul className="hidden font-neue text-[#84B000] lg:flex">
              {navigationLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={link.name} className="nav-link">
                    <Link
                      href={link.href}
                      className={isActive ? 'text-[#84B000]' : 'text-[#ADADAD]'}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/*search button mobile */}
        <div className="flex justify-end lg:hidden">
          <div
            className="flex items-center justify-center rounded-b-[60px]"
            style={{
              height: '73px',
              width: '43px',
              background: '#84B000',
              padding: '12px',
              position: 'absolute',
              top: '0',
              right: '0',
            }}
          >
            <button onClick={() => setSearchModalOpen(!searchModalOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="search"
                className="navbar-search-btn"
                style={{ width: '21px', height: '21px' }}
              >
                <path
                  fill="#fff"
                  d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mountain Top University Emblem */}
        <div className="hidden items-center justify-between lg:flex">
          <Link
            href="/"
            className="flex items-center justify-center px-[24px] py-[14px]"
          >
            <Image
              src="/images/logo.png"
              alt="Mountain Top University Logo"
              width={72}
              height={64}
              className="logo mx-2 my-3"
            />
            <span
              className="logo-text font-whyte font-bold uppercase text-[#84B000]"
              // style={{ color: fontColor }}
            >
              Mountain Top University
            </span>
          </Link>

          {/*search button desktop */}
          <button
            className="search-btn-container flex h-[110px] min-w-[72px] animate-pulse items-center justify-center bg-[#84B000] p-3"
            onClick={() => setSearchModalOpen(!searchModalOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="search"
              className="search-btn h-5 w-5"
            >
              <path
                fill="#fff"
                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>
  );
}
