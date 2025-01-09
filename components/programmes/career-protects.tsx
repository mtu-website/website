import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const careers = [
  {
    id: '1',
    job: 'Cloud architect & developer',
  },
  {
    id: '2',
    job: 'Systems analyst & engineer',
  },
  {
    id: '3',
    job: 'Industrial controls designer ',
  },
  {
    id: '4',
    job: 'Software Engineer',
  },
  {
    id: '5',
    job: 'Game Developer',
  },
  {
    id: '6',
    job: 'Mobile App Developer',
  },
  {
    id: '7',
    job: 'IT Consultant',
  },
  {
    id: '8',
    job: 'Database Administrator',
  },
  {
    id: '9',
    job: 'System Analyst',
  },
  {
    id: '10',
    job: 'Data Scientist',
  },
];

export default function CareerProspect() {
  return (
    <section className="bg-[#84B000] px-6 py-12 lg:px-[120px] lg:py-16">
      <h2 className="w-fit font-whyte text-xl font-medium uppercase leading-8 tracking-[-4%] text-white underline underline-offset-2 lg:text-[28px] lg:leading-[44.8px]">
        career prospects
      </h2>
      <article className="font-sans text-sm font-normal leading-[32px] tracking-[-4%] text-[#FFFFFF99] lg:text-[18px] lg:leading-[42px] xl:text-xl xl:leading-[45px]">
        <h3 className="mb-3 mt-6 font-sans text-[18px] font-semibold leading-7 tracking-[-4%] text-white lg:text-2xl lg:leading-9">
          Potential roles for BSc. Computer Science degree holders
        </h3>
        <p>
          The growing demand for computing skills means graduates with STEM
          (science, technology, engineering and mathematics) degrees are
          becoming increasingly sought after in industry. The field of Computer
          Science is constantly evolving, so new and exciting career
          opportunities are always emerging. Whether you’re interested in a
          hands-on technical role or undertaking pioneering research, this
          computer science degree will open career opportunities across Industry
          4.0 and beyond. Career options include:
        </p>
      </article>
      <div>
        {careers.map((item) => (
          <div
            key={item.id}
            className="flex w-full items-center justify-between border-b-[1px] border-[#FFFFFF4D] px-4 py-6 text-white"
          >
            <p className="text-[16px] leading-6 tracking-[-2%] lg:text-xl">
              {item.job}
            </p>
            <ArrowTopRightIcon width={14} height={14} />
          </div>
        ))}
      </div>
    </section>
  );
}
