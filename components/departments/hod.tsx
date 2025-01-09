import Image from 'next/image';
import Link from 'next/link';

const hod = {
  id: '1',
  name: 'Dr. Mebawondu Akindele',
  role: 'Head of Department',
  imgSrc: '/images/HOD.png', // Replace with the actual path
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat velit ut felis vehicula semper.',
};

export default function Hod() {
  return (
    <div className="my-12 gap-12 lg:my-24 lg:flex">
      <div className="relative h-[406px] w-[300px] overflow-hidden lg:min-w-[598px]">
        <Image
          src="/images/departments/hod-image.svg"
          alt=""
          className="h-full w-[598px]"
          quality={100}
          fill
          style={{ objectFit: 'cover' }}
        />
        <p className="absolute left-6 top-6 mx-auto w-fit bg-[#6C006D] px-4 py-[10px] font-mono text-xs font-bold uppercase leading-[21px] tracking-[-2%] text-white mix-blend-hard-light lg:text-sm">
          {hod.role}
        </p>
      </div>
      <article className="my-4 flex-col items-start justify-between lg:flex">
        <div className="mb-4">
          <h3 className="mb-4 font-sans text-2xl font-semibold leading-9 tracking-[-4%] text-[#84B000]">
            {hod.name}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Risus tempus tincidunt ut
            sed. Molestie porttitor pulvinar tristique aenean et est sagittis
            dui. Molestie arcu eleifend tellus nec nunc massa quis id tortor. In
            sem ac quam id dictum. Purus bibendum posuere malesuada sed pretium.{' '}
          </p>
        </div>
        <Link href="/">
          <span className="inter flex w-fit items-center justify-between text-sm font-semibold text-[#480082] lg:text-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="2"
              viewBox="0 0 29 2"
              fill="none"
              className="mr-2"
            >
              <path
                d="M1 1H28"
                stroke="#480082"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Read More
          </span>{' '}
        </Link>
      </article>
    </div>
  );
}
