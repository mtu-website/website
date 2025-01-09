import Link from 'next/link';

const links = [
  { id: 'course-overview', href: 'Course overview' },
  { id: 'admission-requirement', href: 'Admission requirement' },
  { id: 'career-prospect', href: 'Career Prospect' },
  { id: 'download-curriculum', href: 'Download curriculum' },
];

export default function Navbar() {
  return (
    <section>
      <nav className="bg-[#84B000] px-4 py-6 lg:px-28">
        <ul className="flex items-center justify-evenly lg:justify-between">
          {links.map(({ id, href }) => (
            <li key={id} className="w-fit">
              <Link
                href={href}
                className="w-fit text-xs leading-[21px] tracking-[-2%] text-[#D9D9D9] hover:text-gray-300 sm:text-sm"
              >
                {href}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
