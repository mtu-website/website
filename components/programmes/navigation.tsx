import { ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Navigation() {
  return (
    <section>
      {/* Link Description */}
      <div>
        <div className="flex w-fit items-center gap-4 font-mono text-xs font-medium uppercase leading-[25.6px] sm:text-[16px]">
          <Link href="/">home</Link>
          <ChevronRightIcon className="" />
          <Link href="/department">department</Link>
          <div className="flex items-center justify-between text-[#84B000]">
            <ChevronRightIcon className="" />
            <Link href="" className="ml-4 underline">
              programmes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
