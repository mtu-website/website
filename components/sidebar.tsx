'use client';
import Image from 'next/image';
import Link from 'next/link';

import { PlusIcon } from '@radix-ui/react-icons';

type Props = {
  sidebarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const links = [
  {
    id: '1',
    destination: 'home',
    href: '/',
    style:
      'font-sans font-medium text-[14px] leading-[16.94px] tracking-[-4%] text-[#FFFFFF80] capitalize',
  },
  {
    id: '2',
    destination: 'why mtu',
    href: '/why-mtu',
    style:
      'font-sans font-semibold text-[24px] leading-[29.05px] lg:leading-[33.89px] tracking-[-4%] text-white uppercase',
  },
  {
    id: '3',
    destination: 'study at mtu',
    href: '/study-at-mtu',
    style:
      'font-sans font-semibold text-[24px] leading-[29.05px] lg:leading-[33.89px] tracking-[-4%] text-white uppercase',
  },
  {
    id: '4',
    destination: 'research',
    href: '/research',
    style:
      'font-sans font-semibold text-[24px] leading-[29.05px] lg:leading-[33.89px] tracking-[-4%] text-white uppercase',
  },
  {
    id: '5',
    destination: 'centers and units',
    href: '/centers-and-units',
    style:
      'font-sans font-semibold text-[24px] leading-[29.05px] lg:leading-[33.89px] tracking-[-4%] text-white uppercase',
  },
  // {
  //   id: '6',
  //   destination: 'mtu at a glance',
  //   href: '/mtu-at-a-glance',
  //   style:
  //     'font-sans font-semibold text-[24px] leading-[29.05px] lg:leading-[33.89px] tracking-[-4%] text-white uppercase',
  // },
  {
    id: '7',
    destination: 'events',
    href: '/events',
    style:
      'font-sans font-medium text-[14px] leading-[16.94px] tracking-[-4%] text-[#FFFFFF80] capitalize',
  },
  {
    id: '8',
    destination: 'latest news at MTU',
    href: '/news',
    style:
      'font-sans font-medium text-[14px] leading-[16.94px] tracking-[-4%] text-[#FFFFFF80] capitalize',
  },
];

const informationLinks = [
  {
    id: '1',
    destination: 'helpdesk',
    href: '/helpdesk',
  },
  {
    id: '2',
    destination: 'alumni',
    href: '/alumni',
  },
  {
    id: '3',
    destination: "student's corner",
    href: '/student-corner',
  },
  {
    id: '4',
    destination: 'staff corner',
    href: '/staff-corner',
  },
  {
    id: '5',
    destination: 'governance',
    href: '/governance',
  },
];

const quickLinks = [
  {
    id: '1',
    destination: 'Open Distance Learning',
    href: '/odl',
  },
  {
    id: '2',
    destination: 'undergraduate admission',
    href: '/study-at-mtu/undergraduate',
  },
  {
    id: '3',
    destination: 'postgraduate admission',
    href: 'https://postgraduate.mtu.edu.ng',
  },
  {
    id: '4',
    destination: 'colleges',
    href: '/colleges',
  },
];

const Sidebar: React.FC<Props> = ({ sidebarOpen, setSideBarOpen }) => {
  // const [show, setShow] = useState<string>('hidden');

  return (
    <section
      className={`fixed top-0 z-50 mx-auto flex h-full max-w-[1920px] bg-[#0F0F0F] ${
        sidebarOpen
          ? 'pointer-events-auto w-full -translate-x-0'
          : 'pointer-events-none w-0 -translate-x-full'
      } transform transition-all duration-500 ease-in-out`}
    >
      <div
        className={`0 w-full overflow-y-auto transition-opacity delay-100 duration-200 ease-in-out ${
          sidebarOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex w-full items-center justify-end p-3 text-white lg:p-12">
          <Image
            src="/images/logo.png"
            alt="Mountain Top University Logo"
            width={72}
            height={64}
            className="mx-2 my-3 h-auto w-[32.4px]"
          />
          <span className="font-whyte text-sm font-bold uppercase leading-[19.8px] tracking-[-3%] text-[#84B000]">
            Mountain Top University
          </span>
        </div>
        <div className="items-start justify-between px-6 py-3 sm:p-12 lg:flex lg:p-24">
          <div className="mb-9 grid gap-3 lg:mb-0 lg:gap-6">
            {links.map((link) => (
              <ul key={link.id}>
                <li>
                  <Link className={`${link.style}`} href={link.href}>
                    {link.destination}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="mb-9 grid gap-3 lg:mb-0 lg:gap-6">
            <h3 className="font-mono text-xl font-semibold uppercase leading-[23.48px] tracking-[-4%] text-[#84B000] lg:text-2xl lg:leading-[28.18px]">
              information
            </h3>
            {informationLinks.map((link) => (
              <ul key={link.id}>
                <li>
                  <Link
                    className="font-sans text-[14px] font-medium capitalize leading-[16.94px] tracking-[-4%] text-[#FFFFFF80]"
                    href={link.href}
                  >
                    {link.destination}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="mb-9 grid gap-3 lg:mb-0 lg:gap-6">
            <h3 className="font-mono text-xl font-semibold uppercase leading-[23.48px] tracking-[-4%] text-[#84B000] lg:text-2xl lg:leading-[28.18px]">
              quickLinks
            </h3>
            {quickLinks.map((link) => (
              <ul key={link.id}>
                <li>
                  <Link
                    className="font-sans text-[14px] font-medium capitalize leading-[16.94px] tracking-[-4%] text-[#FFFFFF80]"
                    href={link.href}
                  >
                    {link.destination}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <footer className="absolute bottom-0 right-[44px] hidden items-center justify-between px-5 py-6 font-mono sm:flex lg:right-[72px] lg:block">
          <div className="font-mono text-[10px] font-semibold leading-[13.68px] text-white lg:text-sm">
            <Link href="/documentation" className="mr-2 uppercase">
              documentation
            </Link>
            <Link href="/terms-of-use" className="mx-2 uppercase">
              terms of use
            </Link>
            <Link href="/privacy-policy" className="mx-2 uppercase">
              privacy policy
            </Link>
          </div>
        </footer>
      </div>

      <div
        className={`h-full w-[44px] bg-[#84B000] py-10 lg:w-[72px] ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex h-36 items-center justify-center py-24">
          <button
            className="flex h-[44px] min-w-[150px] rotate-90 items-center gap-6 lg:h-[72px]"
            onClick={() => setSideBarOpen(!sidebarOpen)}
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

export default Sidebar;
