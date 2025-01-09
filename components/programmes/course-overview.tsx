export default function CourseOverview() {
  return (
    <section className="px-6 py-12 lg:px-[120px] lg:py-16">
      <h2 className="w-fit font-whyte text-xl font-medium uppercase leading-8 tracking-[-4%] text-[#1F1F1F] underline underline-offset-2 lg:text-[28px] lg:leading-[44.8px]">
        course overview
      </h2>
      <div className="items-start justify-between lg:flex">
        <div className="my-6">
          <h3 className="font-sans text-[18px] font-semibold uppercase leading-9 tracking-[-4%] text-[#84B000] lg:text-2xl">
            duration of study
          </h3>
          <p className="my-2 font-sans text-sm font-medium leading-[16.94px] tracking-[-4%] text-[#080808] lg:text-[16px] lg:leading-[27.66px]">
            8 Semesters(4 years)
          </p>
        </div>
        <div className="my-6">
          <h3 className="font-sans text-[18px] font-semibold uppercase leading-9 tracking-[-4%] text-[#84B000] lg:text-2xl">
            mode of study
          </h3>
          <ul
            style={{ listStyleType: 'disc' }}
            className="my-2 pl-6 font-sans text-sm font-medium leading-[16.94px] tracking-[-4%] text-[#080808] lg:text-[16px] lg:leading-[27.66px]"
          >
            <li>Full-time</li>
            <li className="my-1">Part-time</li>
            <li>Distance Learning</li>
          </ul>
        </div>
        <div className="my-6">
          <h3 className="font-sans text-[18px] font-semibold uppercase leading-9 tracking-[-4%] text-[#84B000] lg:text-2xl">
            college
          </h3>
          <p className="my-2 font-sans text-sm font-medium leading-[16.94px] tracking-[-4%] text-[#080808] lg:text-[16px] lg:leading-[27.66px]">
            Basic and Applied Sciences
          </p>
        </div>
      </div>
      <div className="my-6 flex items-center lg:my-12">
        {/* <div className="h-3 w-3 rounded-[50%] bg-[#545454]"></div> */}
        <div className="h-[1px] w-full bg-[#5E5E5E4D] underline"></div>
        {/* <div className="h-3 w-3 rounded-[50%] bg-[#545454]"></div> */}
      </div>
      <article className="font-sans text-sm font-normal leading-[32px] tracking-[-4%] text-[#646464] lg:text-[18px] lg:leading-[42px] xl:text-xl xl:leading-[45px]">
        <p>
          Skilled computing professionals are in demand. Completing this
          computer science course will give you the knowledge needed to work at
          the forefront of this exciting sector.
        </p>
        <p>As part of this course, you&apos;ll</p>
        <ul className="pl-6">
          <li className="list-disc">
            Study fast developing areas including Software Engineering, concepts
            in artificial intelligence, networked communications and cloud-based
            systems
          </li>
          <li className="list-disc">
            Learn the principles of computer science and how to apply them to
            problems across different industries
          </li>
          <li className="list-disc">
            Work with a variety of tools including Microsoft Azure, Amazon Web
            Services (AWS), Python, Java, OpenStack, Eclipse, Visual Paradigm,
            Android Studio
          </li>
          <li className="list-disc">
            Enhance your teamworking and project management abilities using the
            agile skills and techniques that are widespread in many industries,
            while honing your expertise in emerging technologies
          </li>
        </ul>
      </article>
    </section>
  );
}
