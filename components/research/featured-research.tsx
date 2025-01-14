import Image from 'next/image';
import Link from 'next/link';
export default function FeaturedResearch() {
  return (
    <section className="flex flex-col gap-6 bg-[#FFF1FF] px-4 py-8 lg:px-12 lg:py-24 xl:flex-row xl:items-center xl:justify-between xl:gap-16">
      <Image
        src="/images/research/1724968359508.jpeg"
        alt="Mountain Top University Featured Research"
        width={2000}
        height={2000}
        className="h-[265px] w-full sm:h-[265px] lg:h-[377px] lg:w-[541px]"
      />
      <article className="">
        <h4 className="mb-9 font-mono text-[16px] font-semibold uppercase leading-[25.6px] tracking-[-3%] text-[#84B000] sm:text-[16px]">
          featured research
        </h4>
        <h1 className="mb-9 font-sans text-2xl font-medium leading-[38.4px] tracking-[-3%] text-[#0F0F0F] sm:text-[32px] sm:leading-[50px] lg:text-4xl lg:leading-[54px]">
          Machine learning insights on the effectiveness of non-pharmaceutical
          interventions against COVID-19 in NigeriaMachine learning insights on
          the effectiveness of non-pharmaceutical interventions against COVID-19
          in Nigeria
        </h1>
        <p className="mb-9 font-sans text-[16px] font-normal leading-7 tracking-[-3%] text-[#2E2E2E] lg:text-xl lg:leading-8">
          The lack of effective pharmacological measures during the early phase
          of the COVID-19 pandemic prompted the implementation of
          non-pharmaceutical interventions (NPIs) as initial mitigation
          strategies. The impact of these NPIs on COVID-19 in Nigeria is not
          well-documented. This study sought to assess the effectiveness of NPIs
          to support future epidemic responses.
        </p>
        <Link href="https://academic.oup.com/inthealth/advance-article/doi/10.1093/inthealth/ihae065/7950357?login=false">
          <span className="inter flex w-fit items-center justify-between text-sm font-semibold text-[#84B000] lg:text-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="2"
              viewBox="0 0 29 2"
              fill="none"
              className="mr-2"
            >
              <path
                d="M1 1H28"
                stroke="#84B000"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Read More
          </span>{' '}
        </Link>
      </article>
    </section>
  );
}
