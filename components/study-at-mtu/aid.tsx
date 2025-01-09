import Image from 'next/image';
import Link from 'next/link';

export default function Aid() {
  return (
    <section
      id="financial-aid"
      className="p-6 xl:mx-auto xl:max-w-[1400px] xl:px-6 xl:py-12"
    >
      <h3 className="mb-6 font-sans text-2xl font-medium leading-[41.52px] tracking-[-3%]">
        Financial Aid at MTU
      </h3>
      <div className="lg:flex lg:flex-row-reverse lg:items-start lg:justify-between">
        <Image
          src="/images/why-mtu/dko_foundation.png"
          width={2000}
          height={2000}
          alt="DKO Foundation Logo"
          className="w-auto sm:h-[282px] lg:h-auto lg:w-[380px]"
        />
        <article>
          <p className="mb-4 mt-6 font-sans text-[16px] font-medium leading-[34.6px] tracking-[-3%] text-[#6F6F6F] lg:pr-24">
            At Mountain Top University, we understand that access to quality
            education shouldn’t come with financial barriers. MTU’s financial
            aid programme is built to help make your academic dreams a reality,
            no matter your background. Our scholarships to flexible payment
            plans and merit-based awards, we’ve got you covered. We’re committed
            to empowering students with the resources they need to succeed. We
            believe that the cost of education should never hinder your dream.
            MTU’s financial support extends beyond just easing the burden. It’s
            about giving you the peace of mind to focus entirely on your
            studies. At Mountain Top University, we are dedicated to breaking
            down financial barriers so that no dream goes unfulfilled, and every
            student has the opportunity to unlock their potential.
          </p>
          <Link
            href="/https://www.mtudkof.org.ng/"
            className="font-bold text-[#480082]"
          >
            Get Financial Aid Now
          </Link>
        </article>
      </div>
    </section>
  );
}
