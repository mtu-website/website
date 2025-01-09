import Image from 'next/image';

import { ranks } from '@/lib/data';

export default function Ranking() {
  return (
    <div className="my-12 flex lg:my-0 xl:h-[1800px] xl:items-start xl:px-12">
      <div className="my-6 mr-16 hidden w-fit flex-col items-center justify-center xl:flex">
        <div className="flex h-[44px] w-[44px] animate-ping items-center justify-center rounded-[50%] border-2 border-[#6C006D]">
          <div className="h-[32px] w-[32px] rounded-[50%] bg-[#6C006D]"></div>
        </div>
        <div
          className="min-h-[1900px] border-l-[2px] border-dashed border-[#6C006D] opacity-30"
          style={{ lineHeight: '1rem' }}
        ></div>
      </div>
      <section className="flex justify-between lg:w-full">
        <article className="lg:w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-sans text-[35px] font-semibold capitalize tracking-[-5%] text-[#84B000] lg:text-[56px] lg:leading-[84px] xl:text-[64.56px] xl:leading-[96.84px]">
              highly ranked
            </h1>

            <p className="hidden font-sans text-xl capitalize leading-8 tracking-[-3%] text-[#6C006D] lg:block">
              <span className="font-bold">top 5</span>{' '}
              <span className="font-medium">private university (Nigeria)</span>
            </p>
          </div>

          <p className="my-4 font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F] xl:w-[800px]">
            Mountain Top University has set new standards in Nigerian Higher
            Education, achieving impressive rankings for quality education,
            achieving impressive rankings for quality education and sustainable
            goals. We are proud to be among the top institutions in Nigeria,
            reflecting our commitment to excellence, well-being, and impactful
            partnerships. Our accomplishments showcase a dedication to nurturing
            future leaders in a supportive and innovative environment, proving
            that MTU is truly where bright futures begin.
          </p>
          <section>
            <div>
              <div className="">
                {ranks.map((rank) => (
                  <div
                    key={rank.number}
                    className="items-center justify-between lg:flex xl:w-[1200px]"
                  >
                    <section className="flex items-center font-trial lg:gap-8">
                      <div>
                        <p className="text-[160px] font-bold tracking-[-1.5%] text-[#6C006D] lg:text-[269px] lg:leading-[403.5px]">
                          {rank.number}
                        </p>
                      </div>
                      <div>
                        <Image
                          src="/images/ranking-logo.png"
                          width={144}
                          height={35}
                          alt="Times Higher Education, The Impact Rankings logo"
                        />
                        <article className="rank-text">
                          <p className="uppercase">
                            <span className="rank-text_highlighted">
                              {rank.sdg}{' '}
                            </span>
                            {rank.description}
                          </p>
                          <p>
                            {rank.year}
                            <span className="rank-text_bold">
                              {' '}
                              {rank.position}
                            </span>
                          </p>
                        </article>
                      </div>
                    </section>
                    <article className="font-sans text-[16px] font-normal leading-[27.68px] tracking-[-3%] text-[#6F6F6F] lg:w-[500px] xl:w-[741.24px]">
                      <p className="mb-4 bg-[#6C006D] px-5 py-2 text-white">
                        {rank.coloredText}
                      </p>
                      {rank.plainText}
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </section>
    </div>
  );
}
