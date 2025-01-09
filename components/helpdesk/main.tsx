import Image from 'next/image';

export default function Main() {
  return (
    <section>
      <div className="h-[234px] overflow-hidden lg:h-[392px]">
        <Image
          src="/images/helpdesk/hero-image.png"
          alt="mtu control tower"
          width={2000}
          height={2000}
          className="h-full w-full object-cover object-center lg:h-auto lg:object-left-top"
        />
      </div>
      <div className="px-6 py-12 lg:px-12 xl:px-12">
        <div className="w-fit">
          <h1 className="font-sans text-[28px] font-semibold leading-[60px] tracking-[-4%] text-[#84B000] lg:text-[45px] xl:text-[56px]">
            Help Desk
          </h1>
          <p className="font-sans text-[16px] font-medium leading-[32px] tracking-[-4%] text-[#6F6F6F] lg:text-[18px]">
            Thank you for visiting our website
          </p>
          <div className="mt-3 h-[14.66px] w-full bg-[#84B000]"></div>
        </div>
        {/* <div className="mx-auto h-[.5px] w-[90%] bg-[#5E5E5E4D]"></div> */}
      </div>
    </section>
  );
}
