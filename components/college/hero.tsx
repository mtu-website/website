import { College } from '@/lib/types';
import Image from 'next/image';

const data = [
  {
    id: '1',
    amount: '800+',
    item: 'students',
  },
  {
    id: '2',
    amount: '9',
    item: 'departments',
  },
  {
    id: '3',
    amount: '70',
    item: 'staff',
  },
];
export default function Hero({ college }: { college: College }) {
  return (
    <section className="bg-[url('/images/colleges/hero-background.svg')] bg-cover">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* <article className="px-6 py-3 sm:px-12 sm:py-12 flex flex-col justify-between gap-11"> */}
        <article className="grid px-6 py-3 sm:p-12">
          <div className="lg:py-18 py-12">
            {/* <Navigation college={college} /> */}
            <h4 className="mb-6 font-sans text-[11.9px] font-medium uppercase leading-[17.85px] tracking-[-5%] text-[#6F6F6F] lg:text-[16px] lg:leading-[25.5px]">
              our colleges
            </h4>
            <h1 className="mb-6 font-whyte text-4xl font-bold uppercase leading-[54px] tracking-[-5%] text-[#84B000] sm:leading-[69.56px] xl:text-[54.56px] xl:leading-[81.84px]">
              {college.name}
            </h1>
            <p className="font-sans text-[16px] font-medium leading-[30px] tracking-[-3%] text-[#5E5E5E] lg:leading-8 xl:text-xl">
              {college.heroText}
            </p>
          </div>
          <div className="flex w-fit items-center justify-between gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="rounded-[10px] bg-white p-[10px]"
                style={{ border: '2px solid #84B0000D' }}
              >
                <h2 className="text-center font-sans text-[17.82px] font-bold italic leading-[30.84px] tracking-[-3%] text-[#6C006D] lg:text-[28.61px] lg:leading-[49.5px]">
                  {item.amount}
                </h2>
                <p className="font-sans text-[7.92px] font-normal uppercase leading-[13.71px] tracking-[-3%] text-[#84B000] lg:text-[12.72px] lg:leading-[22px]">
                  {item.item}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="overflow-hidden"></div>
        <Image
          src={college.imageUrl}
          alt={college.name}
          width={2000}
          height={2000}
          className="h-[200px] w-full object-cover object-left lg:block lg:h-[786px] lg:w-[422px] xl:w-[531px]"
        />
      </div>
    </section>
  );
}
