import { ranks } from '@/lib/data';
import Image from 'next/image';

import Marquee from 'react-fast-marquee';

export default function Ranking() {
  return (
    <Marquee
      autoFill
      pauseOnHover
      speed={15}
      gradientColor="white"
      gradientWidth={400}
    >
      <section className="flex items-center justify-center bg-[#FAFFEA] px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between gap-12">
          <div className="my-auto">
            <p className="font-sans text-4xl font-semibold leading-[43.57px] tracking-[-2%] text-[#0F0F0F]">
              Awards &
            </p>
            <p className="font-sans text-4xl font-semibold leading-[43.57px] tracking-[-2%] text-[#84B000]">
              Recognition
            </p>
          </div>

          <div className="flex w-full items-center justify-evenly px-6 py-8">
            {ranks.map((rank) => (
              <section
                key={rank.number}
                className="mx-6 flex items-center justify-between lg:mx-12"
              >
                <div>
                  <p className="rank-number" style={{ color: `${rank.color}` }}>
                    {rank.number}
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/ranking-logo.png"
                    width={2000}
                    height={20000}
                    alt="Times Higher Education, The Impact Rankings logo"
                    className="h-[35px] w-[144px]"
                  />
                  <article className="rank-text">
                    <p className="uppercase">
                      <span className="rank-text_highlighted">{rank.sdg} </span>
                      {rank.description}
                    </p>
                    <p>
                      {rank.year}
                      <span className="rank-text_bold"> {rank.position}</span>
                    </p>
                  </article>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </Marquee>
  );
}
