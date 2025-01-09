import { ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Navigation() {
  return (
    <section className="px-4 py-6 lg:px-12 lg:py-12">
      {/* Link Description */}
      <div>
        <div className="flex w-fit font-mono text-xs font-medium uppercase leading-[25.6px] tracking-[-3%] lg:text-[16px]">
          <Link href="/">Home</Link>
          <div className="ml-4 flex items-center justify-between text-[#84B000]">
            <ChevronRightIcon className="" />
            <Link href="/news" className="ml-4 underline underline-offset-4">
              News
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
