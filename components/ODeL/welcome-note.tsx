import Image from 'next/image';

export default function WelcomeNote() {
  return (
    <section className="bg-[#FFF1FF] bg-cover px-6 py-12 lg:w-full lg:px-12 lg:py-24">
      <div className="flex flex-col justify-between gap-4 lg:gap-16 xl:flex-row">
        <article className="lg:w-[592px] xl:w-[1000px]">
          <h4 className="font-sans text-[18px] font-semibold leading-8 tracking-[-2%] text-[#0F0F0F] lg:text-2xl lg:leading-9">
            From the office of the Director
          </h4>
          <p className="mt-12 font-sans text-[16px] font-normal leading-9 tracking-[-4%] text-[#2E2E2E]">
            Welcome to the Open Distance and e-Learning (ODeL) Center at
            Mountain Top University! Here, we are dedicated to transformative
            education that transcends boundaries. The ODeL Center embodies this
            vision by providing flexible, accessible, and technology-driven
            learning opportunities designed for the modern learner. Whether you
            are a working professional aiming to advance your career, a student
            in search of quality education from anywhere, or a lifelong learner
            eager to acquire new skills, our programs equip you with the tools
            to thrive in today’s dynamic world. Our mission is to empower you
            with the knowledge and skills necessary for academic, professional,
            and personal excellence. We invite you to explore our diverse
            programs and resources, and we look forward to being part of your
            educational journey. Welcome to the Mountain Top University ODeL
            family, where your aspirations converge with limitless
            possibilities.
          </p>
          <p className="my-1 font-sans text-sm font-semibold leading-8 tracking-[-4%] text-[#941196] sm:text-[16px]">
            Dr. Chinwe Peace Igiri
          </p>
          <p className="font-sans text-sm font-medium italic leading-[21px] tracking-[-4%] text-[#4E4E4E] lg:text-[16px]">
            Acting Director, Open Distance and e-Learning (ODeL)
          </p>
        </article>
        {/* <Image
          src="/images/odl/director.jpg"
          alt="MTU ODL Director"
          width={632} // Example width
          height={485} // Example height
          className="mt-3 h-[256px] w-[270px] sm:h-[485px] sm:w-[632px] lg:mt-0"
        /> */}
        <div className="relative h-[256px] w-full lg:h-[485px] lg:w-[632px]">
          <Image
            src="/images/odl/director.jpg"
            alt="MTU ODL Director"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
