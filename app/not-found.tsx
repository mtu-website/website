import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <div className="h-screen bg-[url('/images/404_background.svg')] px-4">
        <div className="flex h-screen items-center justify-center">
          <article className="relative mb-32 flex flex-col items-center justify-center lg:w-[600px]">
            <h1 className="mb-6 text-center font-trial text-[35px] font-semibold leading-[42px] tracking-[-2%] text-[#84B000] lg:text-[50px] lg:leading-[60px]">
              This is a blank page.
            </h1>
            <div>
              <p className="text-center font-sans text-[16px] font-normal leading-[25px] tracking-[-4%] text-[#716D6D] lg:text-xl">
                You must’ve lost your way, but hopefully, we can help you find
                what you’re looking for. For inquiries, please contact
              </p>
              <Link href="/helpdesk">
                <p className="text-center font-sans text-[16px] lg:text-xl font-semibold leading-[25px] tracking-[-4%] text-[#716D6D] underline underline-offset-4">
                  Mountain Top Help Desk
                </p>
              </Link>
            </div>
            <Link className="absolute -bottom-36" href="/">
              <div className="flex h-[60px] w-[220px] items-center justify-between gap-2 bg-[#6C006D] px-4 py-[10px]">
                <p className="font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%] text-white">
                  back to homepage
                </p>
                <ArrowTopRightIcon
                  className="text-white"
                  width={16}
                  height={16}
                />
              </div>
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
}
