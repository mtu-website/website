import Image from 'next/image';
export default function Introduction() {
  return (
    <section className="p-6 lg:mb-9 lg:flex lg:justify-center lg:gap-10 xl:gap-20 xl:px-6 xl:py-12">
      <Image
        src="/images/study-at-mtu/intro-image.png"
        alt="Mountain Top University Students in Digital Library"
        width={2000}
        height={2000}
        className="mb-6 h-auto w-[382px] rounded-[3.4px] sm:h-[400px] sm:w-auto lg:mb-0 lg:w-[523.15px] xl:h-[481px]"
      />
      <article className="xl:w-[800px]">
        <h3 className="font-sans text-2xl font-medium tracking-[-3%] lg:mb-6 xl:text-3xl">
          MTU is the place to be
        </h3>
        <div className="font-sans text-[16px] font-normal leading-8 tracking-[-3%] text-[#6F6F6F] xl:leading-9">
          <p className="my-2">
            Mountain Top University is an institution that will challenge you to
            think critically, act boldly, and make a difference in the world.
            Quality education is not merely our goal; it is our foundation.
          </p>
          <p className="my-2">
            At Mountain Top University, we recognize that the challenges within
            the education system cannot be separated from the broader societal
            context.
          </p>
          <p className="my-2">
            This is why we have made it our mission to address these issues
            directly, ensuring that each student is equipped not only with
            academic knowledge but also with the skills and resilience needed to
            thrive in today’s world.
          </p>
          <p className="my-2">
            We aim to develop well-rounded individuals who can contribute
            meaningfully to their communities. Your journey at MTU is not just
            about education, it’s about transforming your potential into
            impactful action.
          </p>
        </div>
      </article>
    </section>
  );
}
