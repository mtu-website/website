import { ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Navigation() {
  return (
    <section className="lg:py-9">
      {/* Link Description */}
      <div>
        <div className="flex w-fit font-mono text-[14px] font-medium uppercase leading-[25.6px] text-white">
          <Link href="/">Home</Link>
          <div className="ml-4 flex items-center justify-between">
            <ChevronRightIcon className="" />
            <Link href="" className="ml-4 underline">
              Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
