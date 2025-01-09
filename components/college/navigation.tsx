import { ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type College = {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
};

export default function Navigation({ college }: { college: College }) {
  return (
    <section className="lg:py-9">
      {/* Link Description */}
      <div>
        <div className="flex w-fit font-mono text-[16px] font-medium uppercase leading-[25.6px]">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-[#6F6F6F]">
              home
            </Link>
            <ChevronRightIcon />
            <Link href="/" className="text-[#6F6F6F]">
              all colleges
            </Link>
            <ChevronRightIcon color="#84B000" />
            <Link href="/news" className="ml-4 text-[#84B000] underline">
              {college.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
