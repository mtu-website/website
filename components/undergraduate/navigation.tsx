import { ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Navigation() {
  return (
    <section className="absolute -top-2 my-12 lg:top-16">
      {/* Link Description */}
      <div>
        <div className="flex w-fit items-center gap-4 font-mono text-xs font-medium uppercase leading-[14px] sm:text-[16px] sm:leading-[25.6px]">
          <Link href="/">home</Link>
          <div className="hidden items-center justify-between sm:flex">
            <ChevronRightIcon />
            <Link href="/study-at-mtu" className="ml-4">
              study at mtu
            </Link>
          </div>
          <div className="flex items-center justify-between font-semibold text-[#84B000]">
            <ChevronRightIcon />
            <Link href="" className="ml-4 underline underline-offset-4">
              undergraduate programme
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
