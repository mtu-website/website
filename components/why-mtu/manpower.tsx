export default function Manpower() {
  return (
    <div className="my-12 flex lg:my-24 xl:my-0 xl:h-[400px] xl:items-start xl:px-12">
      <div className="my-6 mr-16 hidden w-fit flex-col items-center justify-center xl:flex">
        <div className="flex h-[44px] w-[44px] animate-ping items-center justify-center rounded-[50%] border-2 border-[#6C006D]">
          <div className="h-[32px] w-[32px] rounded-[50%] bg-[#6C006D]"></div>
        </div>
        <div
          className="min-h-[400px] border-l-[2px] border-dashed border-[#6C006D] opacity-30"
          style={{ lineHeight: '1rem' }}
        ></div>
      </div>
      <section className="flex w-full justify-between">
        <article className="w-full">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="font-sans text-[35px] font-semibold capitalize tracking-[-5%] text-[#84B000] lg:text-[56px] lg:leading-[84px] xl:text-[64.56px] xl:leading-[96.84px]">
              experienced manpower
            </h1>
          </div>
          <div className="items-center lg:flex lg:gap-12 xl:gap-24">
            <article>
              <p className="font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F] xl:min-w-[800px]">
                Our members of staff are knowledgeable, dedicated and also
                possess practical experimental knowledge. All of our lecturers
                are exceptional academic professionals in their respective
                fields, willing to shape students into critical thinkers and
                overall success-driven individuals. With their support, students
                acquire practical skill sets, aimed at helping them succeed
                after graduation. Each department is staffed by competent
                individuals who stay on the edge of research and professional
                practice. Our professors regularly contribute to academic
                journals, attend global conferences, and collaborate with
                industry leaders to ensure their teachings are relevant and
                up-to-date. This commitment to continuous learning means that
                students benefit from insights that go beyond textbooks, gaining
                exposure to the latest advancements and best practices.
              </p>
            </article>
          </div>
        </article>
      </section>
    </div>
  );
}
