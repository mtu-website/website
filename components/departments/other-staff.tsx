import Image from 'next/image';
import Link from 'next/link';

const staff = [
  {
    id: '2',
    name: 'Dr. Sanusi F.A',
    role: 'Senior Lecturer',
    imgSrc: '/images/departments/lecturer1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    name: 'Mr. Balogun Jeremiah',
    role: 'Senior Lecturer',
    imgSrc: '/images/departments/lecturer2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '4',
    name: 'Dr. Onifade A.',
    role: 'Senior Lecturer',
    imgSrc: '/images/departments/lecturer3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    id: '5',
    name: 'Mr. Ekundayo A.',
    role: 'Senior Lecturer',
    imgSrc: '/images/departments/lecturer4.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
];

export default function OtherStaff() {
  return (
    <div className="justify-between sm:grid sm:grid-cols-2 xl:flex">
      {staff.map((item) => (
        <div key={item.id} className="mb-6 w-[294px] lg:mb-0">
          <div className="relative h-[359px]">
            <Image
              src={item.imgSrc}
              alt={item.name}
              className="h-[406px] w-[598px]"
              quality={100}
              fill
              style={{ objectFit: 'contain' }}
            />
            <p className="absolute left-6 top-6 bg-[#6C006D] px-4 py-[10px] font-mono text-sm font-bold uppercase leading-[21px] tracking-[-2%] text-white mix-blend-hard-light">
              {item.role}
            </p>
          </div>
          <article className="mt-6 w-full">
            <h3 className="font-sans text-2xl font-semibold leading-9 tracking-[-4%] text-[#84B000]">
              {item.name}
            </h3>
            <p className="my-4">{item.description}</p>

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
      ))}
    </div>
  );
}
