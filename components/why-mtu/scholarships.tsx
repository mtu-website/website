import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Scholarships() {
  return (
    <div className="my-12 flex lg:my-24 xl:h-[400px] xl:items-start xl:px-12">
      <div className="my-6 mr-16 hidden w-fit flex-col items-center justify-center xl:flex">
        <div className="flex h-[44px] w-[44px] animate-ping items-center justify-center rounded-[50%] border-2 border-[#6C006D]">
          <div className="h-[32px] w-[32px] rounded-[50%] bg-[#6C006D]"></div>
        </div>
        <div
          className="min-h-[500px] border-l-[2px] border-dashed border-[#6C006D] opacity-30"
          style={{ lineHeight: '1rem' }}
        ></div>
      </div>
      <section className="flex w-full justify-between">
        <article className="w-full">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="font-sans text-[35px] font-semibold capitalize tracking-[-5%] text-[#84B000] lg:text-[56px] lg:leading-[84px] xl:text-[64.56px] xl:leading-[96.84px]">
              scholarships
            </h1>
          </div>
          <div className="items-center lg:flex lg:gap-12 xl:gap-24">
            <Image
              src="/images/why-mtu/dko_foundation.png"
              alt="DKO Foundation Logo"
              width={2000}
              height={2000}
              className="mx-auto mb-6 h-[239.02px] w-[266.88px] lg:mb-0"
            />
            <article>
              <p className="font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F] xl:min-w-[800px]">
                With a robust partnership with the D.K.O foundation, our
                students have the opportunity to apply for financial support,
                with over 500 beneficiaries receiving scholarships ranging from
                partial to full coverage for tuition and feeding. This is our
                way of helping brilliant and dedicated students who might lack
                the means of pursuing their dream of getting quality education
                they can get from our institution.{' '}
                <Link
                  href="study-at-mtu"
                  className="inline-flex items-center text-[16px] font-semibold leading-[27.68px] tracking-[-3%] text-[#84B000]"
                >
                  <span className="underline">Find out more</span>
                  <ArrowTopRightIcon className="ml-2" />
                </Link>
              </p>
            </article>
          </div>
        </article>
      </section>
    </div>
  );
}
