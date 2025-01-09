import Image from 'next/image';

export default function Introduction() {
  return (
    <div className="justify-center lg:flex lg:py-24">
      <section className="bg-[#FAECFF] px-4 py-6 lg:flex lg:max-w-[1000px] lg:rounded-xl lg:p-0 xl:max-w-[1440px] 2xl:w-full">
        <div className="items-center justify-center lg:my-0 lg:flex">
          {/* Header */}
          <div className="introduction-header lg:ml-12">
            <div className="lg:flex xl:mt-12 xl:w-[300px]">
              {/* Line */}
              <div
                style={{
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
                className="mb-[15px] mr-[10px] hidden h-[200px] w-6 bg-[#1D0039] lg:block"
              ></div>
              <div className="flex items-center justify-center">
                <div className="px-24 lg:px-0">
                  <h1 className="text-center font-trial text-[28px] font-bold uppercase leading-[30px] text-[#1D0039] lg:pr-12 lg:text-left lg:text-[45px] lg:leading-[49.5px] xl:pr-0">
                    we are mountain top university
                  </h1>
                  <p className="inter hidden text-xs font-normal leading-6 lg:mt-4 lg:block lg:w-[232px]">
                    Mountain Top University is the official varsity institution
                    of Mountain of Fire and Miracles Ministries
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons Tablets and Small Laptops */}
            <div className="mt-12 hidden items-center lg:flex xl:hidden">
              <button className="raleway mb-4 flex w-full items-center justify-center bg-[#480082] px-5 py-3 font-mono text-[14px] font-semibold uppercase text-white lg:mb-0 lg:max-h-[49px] lg:max-w-[168px] lg:justify-between xl:text-sm">
                <span className="mr-3">learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="arrow-right"
                  className="h-[25.6px] w-[25.6px]"
                >
                  <path
                    fill="#fff"
                    d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                  ></path>
                </svg>
              </button>
              <button className="flex w-full items-center justify-center px-5 py-3 font-mono text-[14px] font-semibold uppercase text-[#480082] lg:max-h-[49px] lg:w-[314px] lg:justify-between xl:text-sm">
                <span className="mr-2">our governing officials</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="arrow-up-right"
                  className="h-[25.6px] w-[25.6px]"
                >
                  <path
                    fill="#480082"
                    d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="my-8 lg:my-12 lg:ml-24 lg:mr-6 xl:mx-20">
            {/* Image - Tablets and Small laptops */}
            <div className="">
              <Image
                src="/images/mtu-small.png"
                alt=""
                width={424}
                height={160}
                className="mb-8 hidden lg:block xl:hidden"
              />
            </div>

            {/* Text */}
            {/* lg:mb-16 mb-12 */}
            <article className="mb-8">
              <p className="inter my-3 text-sm font-medium leading-[25.6px] text-[#5E5E5E] xl:text-[16px]">
                <span className="purple-text font-semibold">
                  Within its nine years of existence,{' '}
                </span>
                Mountain Top University is currently ranked best university in
                Nigeria for quality education and amongst the top 5 Universities
                in Nigeria for global partnerships with leading research bodies
                and industries according to SDG rankings, amplifying
                our global impact.
              </p>
              <p className="inter my-3 text-sm font-medium leading-[25.6px] text-[#5E5E5E] xl:text-[16px]">
                <span className="purple-text font-semibold">
                  We are committed{' '}
                </span>
                to shaping tomorrow&apos;s leaders as evident in the success of
                our students and alumni.
              </p>
              <p className="inter my-3 text-sm font-medium leading-[25.6px] text-[#5E5E5E] xl:text-[16px]">
                <span className="purple-text font-semibold">Our programs </span>
                are designed to equip you with the knowledge and skills needed
                to make a lasting impact on society and the world at large.
              </p>
            </article>

            {/* Buttons */}
            <div className="items-center lg:hidden lg:w-[483px] xl:flex">
              <button className="raleway mb-4 flex w-full items-center justify-center bg-[#480082] px-5 py-3 font-mono text-sm font-semibold uppercase text-white lg:mb-0 lg:max-h-[49px] lg:max-w-[188px] lg:justify-between lg:text-[16px]">
                <span className="mr-3">learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="arrow-right"
                  className="h-[25.6px] w-[25.6px]"
                >
                  <path
                    fill="#fff"
                    d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                  ></path>
                </svg>
              </button>
              <button className="flex w-full items-center justify-center px-5 py-3 font-mono text-sm font-semibold uppercase text-[#480082] lg:max-h-[49px] lg:min-w-[294px] lg:justify-between lg:text-[16px]">
                <span className="mr-2">our governing officials</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="arrow-up-right"
                  className="h-[25.6px] w-[25.6px]"
                >
                  <path
                    fill="#480082"
                    d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <Image
          src="/images/mtu.png"
          alt=""
          width={383}
          height={609}
          className="hidden lg:max-w-[300px] xl:block 2xl:min-w-[383px]"
        />
      </section>
    </div>
  );
}
