export default function Admission() {
  return (
    <section className="bg-[#FFF1FF] px-6 py-12 lg:px-[120px] lg:py-16">
      <h2 className="w-fit font-whyte text-xl font-medium uppercase leading-8 tracking-[-4%] text-[#1F1F1F] underline underline-offset-2 lg:text-[28px] lg:leading-[44.8px]">
        admission requirements
      </h2>
      <div className="my-6 flex gap-4">
        <button className="rounded-[400px] bg-[#F7E8F7] px-4 py-1 text-sm uppercase text-[#A965AA] lg:text-[16px]">
          utme
        </button>
        <button className="rounded-[400px] border border-[#D8D8D8] px-4 py-1 text-sm capitalize text-[#5E5E5E] lg:text-[16px]">
          direct entry
        </button>
      </div>

      <article className="font-sans text-sm font-normal leading-[32px] tracking-[-4%] text-[#646464] lg:text-[18px] lg:leading-[42px] xl:text-xl xl:leading-[45px]">
        <h3 className="mb-3 font-sans text-[18px] font-semibold leading-7 tracking-[-4%] text-[#84B000] lg:text-2xl lg:leading-9">
          Requirements for admission into 100 Level
        </h3>
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
