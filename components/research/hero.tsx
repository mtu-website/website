import Navigation from './navigation';

export default function Hero() {
  return (
    <section
      // className="px-6 py-9 lg:pb-52 lg:pt-24 xl:px-36"
      className="bg-[url('/images/research/hero-background.png')] px-4 py-6 lg:h-fit lg:px-12 lg:py-24"
      // style={{
      //   background: `radial-gradient(95.69% 332.95% at 4.31% 5.63%, rgba(255, 0, 132, 0.5) 0%, rgba(255, 9, 230, 0.5) 100%), radial-gradient(100% 347.93% at 100% 0%, rgba(84, 0, 150, 0.5) 0%, rgba(84, 0, 150, 0.5) 99.95%)`,
      // }}
    >
      <Navigation />
      <div>
        <h1 className="mb-24 mt-16 font-sans text-[45px] font-semibold leading-[54.46px] tracking-[-4%] text-white lg:text-[100px] lg:leading-[107px]">
          Research at{' '}
          <span className="font-light italic">Mountain Top University</span>
        </h1>
        <div className="flex flex-col items-center lg:flex-row lg:gap-20">
          <p className="mb-9 w-auto font-sans text-[16px] font-medium leading-[28px] tracking-[-2%] text-white lg:mb-0 lg:w-[588px] xl:w-[688px] 2xl:w-[888px]">
            Our research shapes the future. We push the boundaries of discovery
            with bold ideas, cutting-edge facilities, and collaborative
            solutions to global challenges. Your journey into groundbreaking
            exploration starts here.
          </p>
          {/* <Link
            href="/"
            className="max-w-[371px] rounded-[1px] px-9 py-[10px] text-center font-sans text-sm font-semibold leading-8 tracking-[-2%] text-white lg:text-[16px]"
            style={{
              background: `
      radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.5) 0%, rgba(232, 232, 232, 0.5) 100%),
      radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)
    `,
            }}
          >
            Lorem ipsum dolor sit amet.
          </Link> */}
        </div>
      </div>
    </section>
  );
}
