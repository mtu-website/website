import Link from 'next/link';

const links = [
  {
    id: '1',
    heading: 'Quick Links',
    directory: [
      { title: 'Staff Directory', href: 'https://directory.mtu.edu.ng' },
      { title: 'Study at MTU', href: '/study-at-mtu' },
      { title: 'All Colleges', href: '/colleges' },
    ],
  },
  {
    id: '2',
    heading: 'Map and Directions',
    directory: [
      {
        title: 'Open in Google Maps',
        href: 'https://maps.app.goo.gl/1ZtJkX9aqMZ2iDRq7',
      },
      { title: 'Open in Apple Maps', href: '/study-at-mtu' },
    ],
  },
  {
    id: '3',
    heading: 'Employment',
    directory: [{ title: 'Jobs at MTU', href: '/jobs-at-mtu' }],
  },
];

export default function Links() {
  return (
    <div className="px-6 lg:px-12">
      <div className="border-t-[1px] border-[#5E5E5E4D] xl:px-12">
        <div className="flex flex-col justify-between py-4 lg:flex-row lg:gap-24 lg:py-12">
          <div className="mb-4 h-auto lg:mb-0 lg:w-[240px] xl:w-[300px]">
            <h3 className="mb-2 font-sans text-xl font-semibold leading-9 tracking-[-4%] text-[#84B000] lg:mb-6">
              For General Inquiries
            </h3>
            <p className="font-sans text-[16px] font-normal leading-9 tracking-[-4%] text-[#5E5E5E]">
              For all general inquiries about Mountain Top University, please
              reach us
              <span className="font-semibold">at </span>
              <Link className="text-[#84B000] underline" href="">
                support@mtu.edu.ng
              </Link>
            </p>
          </div>
          {links.slice(0, 2).map((link) => (
            <div
              key={link.id}
              className="mb-4 h-auto lg:mb-0 lg:w-[240px] xl:w-[300px]"
            >
              <h3 className="mb-2 font-sans text-xl font-semibold leading-9 tracking-[-4%] text-[#84B000] lg:mb-6">
                {link.heading}
              </h3>
              {link.directory.map((item) => (
                <div key={item.title} className="mb-3">
                  <Link className="text-[#84B000] underline" href={item.href}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between py-4 lg:mx-auto lg:flex-row lg:gap-24 lg:py-12">
          <div className="mb-4 h-auto lg:mb-0 lg:w-[240px] xl:w-[300px]">
            <h3 className="mb-2 font-sans text-xl font-semibold leading-9 tracking-[-4%] text-[#84B000] lg:mb-6">
              Mailing Address
            </h3>
            <p className="font-sans text-[16px] font-normal leading-9 tracking-[-4%] text-[#5E5E5E]">
              Mountain Top University MFM Prayer City Nigeria{' '}
              <span className="font-semibold">Ibafo, Ogun State 110115</span>
            </p>
          </div>
          <div className="mb-4 h-auto lg:mb-0 lg:w-[240px] xl:w-[300px]">
            <h3 className="mb-2 font-sans text-xl font-semibold leading-9 tracking-[-4%] text-[#84B000] lg:mb-6">
              Open Hours
            </h3>
            <p className="font-sans text-[16px] font-normal leading-9 tracking-[-4%] text-[#5E5E5E]">
              Mondays to Fridays:{' '}
              <span className="font-semibold">9:00am to 4:00pm</span>
            </p>
            <p className="font-sans text-[16px] font-semibold leading-9 tracking-[-4%] text-[#5E5E5E]">
              Closed on weekends and all public holidays
            </p>
          </div>
          <div
            key={links[2].id}
            className="mb-4 h-auto lg:mb-0 lg:w-[240px] xl:w-[300px]"
          >
            <h3 className="mb-2 font-sans text-xl font-semibold leading-9 tracking-[-4%] text-[#84B000] lg:mb-6">
              {links[2].heading}
            </h3>
            {links[2].directory.map((item) => (
              <div key={item.title} className="mb-3">
                <Link className="text-[#84B000] underline" href={item.href}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
