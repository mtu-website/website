import Image from 'next/image';
import Link from 'next/link';

const colleges = [
  {
    id: '1',
    name: 'College of Basic and Applied Sciences',
    url: '/colleges/college-of-basic-and-applied-sciences',
    imageUrl: '/images/colleges/cbas_image.png',
  },
  {
    id: '2',
    name: 'College of Humanities, Social and Management Sciences',
    url: '/colleges/college-of-humanities-and-management-sciences',
    imageUrl: '/images/colleges/chms_image.png',
  },
  {
    id: '3',
    name: 'College of Allied Health Sciences',
    url: '/colleges/college-of-allied-health-sciences',
    imageUrl: '/images/colleges/cahs_image.png',
  },
];

export default function AllColleges() {
  return (
    <section className="flex flex-col items-center justify-center">
      <article className="px-6 py-12 lg:px-12 lg:py-24">
        <h1 className="my-6 text-center font-whyte text-[28px] font-bold uppercase leading-[33.6px] tracking-[-3%] text-[#84B000] lg:text-[45px] lg:leading-[54px] xl:text-[56px] xl:leading-[67.2px]">
          all colleges
        </h1>
        <p className="text-center font-sans text-[16px] font-medium leading-7 tracking-[-3%] text-[#6F6F6F] lg:w-[808px] lg:text-xl lg:leading-8">
          Discover Mountain Top University&apos;s diverse colleges, offering
          exceptional programs, expert faculty, and opportunities to excel in
          education and research.
        </p>
      </article>
      <div className="mb-9 px-6">
        {colleges.map((college) => (
          <Link
            href={college.url}
            key={college.id}
            className="mb-4 flex h-fit min-w-[280px] items-center justify-between pl-[18px] sm:w-[600px] lg:min-w-[900px] lg:pl-[26.8px] xl:h-[205px] xl:min-w-[1014px] xl:py-[34.51px]"
            style={{
              boxShadow: '0px 2px 5px 0px #00000026',
              borderLeft: '6px solid #6C006D',
            }}
          >
            <p className="w-[200px] font-sans text-[16px] font-medium leading-6 tracking-[-3%] text-[#84B000] sm:w-auto lg:text-xl lg:leading-[30px]">
              {college.name}
            </p>
            <div className="w-[91px] overflow-hidden lg:w-[190px]">
              <Image
                src={college.imageUrl}
                alt={college.name}
                height={2000}
                width={2000}
                className="h-[150px] min-w-[91px] object-cover lg:w-[190px] xl:h-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
