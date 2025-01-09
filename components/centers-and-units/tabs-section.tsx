import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const centers = [
  {
    id: '1',
    name: 'Centre for Continuing Education',
    href: '/',
  },
  {
    id: '2',
    name: 'Centre for Gender Studies',
    href: '/',
  },
  {
    id: '3',
    name: 'Centre for Genomic Research in Biomedicine',
    href: '/',
  },
  {
    id: '4',
    name: 'Centre for New Life',
    href: '/',
  },
  {
    id: '5',
    name: 'Centre for Entrepreneurial Development and General studies',
    href: '/',
  },
  {
    id: '6',
    name: 'Centre for Information and Communication Technology',
    href: '/',
  },
  {
    id: '7',
    name: 'Every Student a Musician',
    href: '/',
  },
  {
    id: '8',
    name: 'Student Industrial Work Experience Scheme',
    href: '/',
  },
];

const units = [
  {
    id: '1',
    name: 'Registry',
    href: '/',
  },
  {
    id: '2',
    name: 'Bursary',
    href: '/',
  },
  {
    id: '3',
    name: 'Medical Center',
    href: '/',
  },
  {
    id: '4',
    name: 'Centre for New Life',
    href: '/',
  },
  {
    id: '5',
    name: 'Chaplaincy',
    href: '/',
  },
  {
    id: '6',
    name: 'Open Educational Resource',
    href: '/',
  },
  {
    id: '7',
    name: 'Student Affairs',
    href: '/',
  },
];

export default function TabsSection() {
  return (
    <Tabs defaultValue="centers" className="rounded-none">
      <TabsList
        style={{ boxShadow: '-7px 2px 30px 0px #00000026' }}
        className="h-24 w-full justify-normal gap-12 rounded-none bg-[#84B000] px-6 py-12 lg:px-24 lg:py-6"
      >
        <TabsTrigger
          value="centers"
          className="text-[16px] capitalize text-[#D9D9D9] underline-offset-8 hover:text-white hover:underline focus:bg-transparent"
        >
          centers
        </TabsTrigger>
        <TabsTrigger
          value="units"
          className="text-[16px] capitalize text-[#D9D9D9] underline-offset-8 hover:text-white hover:underline focus:bg-transparent"
        >
          units
        </TabsTrigger>
      </TabsList>
      <TabsContent value="centers" className="pb-12">
        <ul className="px-6 lg:px-24">
          {centers.map((center) => (
            <li
              key={center.id}
              className="flex items-center justify-between border-b border-[#5E5E5E4D] py-6"
            >
              <Link
                href={center.href}
                className="w-[270px] font-sans text-[16px] font-medium leading-6 tracking-[-2%] text-[#5E5E5E] sm:w-fit sm:text-[16px] lg:text-[18px] xl:text-xl"
              >
                {center.name}
              </Link>
              <ArrowTopRightIcon />
            </li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="units" className="pb-12">
        <ul className="px-6 lg:px-24">
          {units.map((unit) => (
            <li
              key={unit.id}
              className="flex items-center justify-between border-b border-[#5E5E5E4D] py-6"
            >
              <Link
                href={unit.href}
                className="w-[270px] font-sans text-[16px] font-medium leading-6 tracking-[-2%] text-[#5E5E5E] sm:w-fit sm:text-[16px] lg:text-[18px] xl:text-xl"
              >
                {unit.name}
              </Link>
              <ArrowTopRightIcon />
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}
