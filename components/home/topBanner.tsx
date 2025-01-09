import Marquee from 'react-fast-marquee';

export default function TopBanner() {
  return (
    <Marquee
      autoFill
      pauseOnHover
      gradientColor="white"
      gradientWidth={400}
      speed={12}
      className="bg-[#150015] px-6 py-3"
    >
      <div className="px-6 font-neue">
        <h1 className="text-sm font-normal leading-5 text-white">
          Happy New Year from everyone at MTU!{' '}
          <span className="text-sm font-light">
            <em></em>
          </span>
        </h1>
      </div>
    </Marquee>
  );
}
