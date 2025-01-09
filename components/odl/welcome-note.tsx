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
            Welcome to the Open and Distance e-Learning (ODL) Centre at Mountain
            Top University, licensed by the National Universities Commission to
            offer the B.Sc. in Computer Science. Our program provides
            flexibility, allowing you to study from any location while managing
            other responsibilities, with no UTME requirement for admission—just
            five relevant O&apos;Level credit passes, including English,
            Mathematics, and Physics. We utilize technology for blended
            learning, providing access to course materials through our Learning
            Management System, weekly activities, and real-time live sessions
            with tutors. A mandatory residency period on campus in Prayer City
            is required for hands-on practical experiences and examinations at
            the end of each semester. We look forward to welcoming you to our
            vibrant learning community at the ODL Centre. MTU, Empowered to
            Excel!
          </p>
          <p className="my-1 font-sans text-sm font-semibold leading-8 tracking-[-4%] text-[#941196] sm:text-[16px]">
            Dr Sanusi F.A
          </p>
          <p className="font-sans text-sm font-medium italic leading-[21px] tracking-[-4%] text-[#4E4E4E] lg:text-[16px]">
            Deputy Director, Open and Distance Learning Centre
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
