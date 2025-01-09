import Image from 'next/image';

export default function Sports() {
  return (
    <section className="my-12 lg:my-24">
      <h2 className="mb-6 font-sans text-2xl font-medium leading-[41.52px] tracking-[-3%]">
        Sports and Leisure
      </h2>
      <div className="w-fit grid-cols-2 lg:grid lg:gap-16 2xl:gap-16">
        <article className="mb-6 lg:mb-0">
          <div className="font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F] lg:h-[307px] lg:w-[495px] xl:h-[380px] xl:w-[589.02px]">
            <p className="mb-6">
              MTU believes in a balanced approach to student life. Sports and
              leisure are essential to creating a well-rounded student
              experience. With a wide variety of facilities and activities, we
              encourage students to pursue physical fitness, teamwork, and
              healthy competition. Our campus offers a football pitch, a
              basketball court, a volleyball court, and a tennis court for those
              who enjoy training and staying active.
            </p>
            <p>
              Beyond sports, we offer leisure activities for students who prefer
              a more relaxed way to stay active. Our inter-faculty tournaments
              and wellness events create a sense of community and allow students
              to unwind while pursuing their passions.
            </p>
          </div>
        </article>
        <Image
          src="/images/why-mtu/sports_1.png"
          alt="Mountain Top University Basketball Court"
          width={2000}
          height={2000}
          className="hidden lg:block lg:h-[329px] lg:w-[376px] xl:h-[407.64px] xl:min-w-[400px]"
        />
        <Image
          src="/images/why-mtu/sports_2.png"
          alt="Mountain Top University Football Field"
          width={2000}
          height={2000}
          className="h-auto w-auto sm:w-[495px] lg:h-[307px] xl:h-[307.64px] xl:min-w-[589.02px]"
        />
        <Image
          src="/images/why-mtu/sports_3.png"
          alt="Mountain Top University Students playing Soccer"
          width={2000}
          height={2000}
          className="hidden lg:block lg:h-[307px] lg:w-[376px] xl:h-[307.64px] xl:min-w-[400px]"
        />
      </div>
    </section>
  );
}
