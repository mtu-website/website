import { PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const modes = [
  {
    id: 1,
    title: 'Full Time',
    href: '/study-at-mtu/undergraduate',
  },
  {
    id: 2,
    title: 'Part Time',
    href: '/study-at-mtu/undergraduate',
  },
  {
    id: 3,
    title: 'Open Distance Learning',
    href: '/odl',
  },
];

export default function Modes() {
  return (
    <section className="p-6 xl:px-6 xl:py-12">
      <div className="m-auto flex-row-reverse items-center justify-between lg:flex lg:max-w-[1200px] lg:gap-9 xl:max-w-[1400px]">
        <article className="mb-6 w-auto lg:w-[600px] xl:w-[50%]">
          <h2 className="mb-6 font-trial text-4xl font-bold leading-[43.2px] tracking-[-1.5px] text-[#84B000] lg:text-[64.56px] lg:leading-[77.47px]">
            Study Modes at MTU
          </h2>
          <p className="font-sans text-[16px] font-medium leading-[34.6px] tracking-[-3%] text-[#6F6F6F]">
            From full-time on-campus learning to distance education, your goals
            remain our top priority. Whatever path you choose, you’re choosing
            excellence, integrity, and a future built on knowledge.
          </p>
        </article>
        <div className="mb-9 xl:w-[50%]">
          {modes.map((mode) => (
            <Link
              href={mode.href}
              key={mode.id}
              className="mb-4 flex justify-between px-[26.8px] py-[34.51px] lg:min-w-[500px] xl:min-w-[624.55px]"
              style={{
                boxShadow: '0px 2px 5px 0px #00000026',
                borderLeft: '4.2px solid #540096',
              }}
            >
              <p>{mode.title}</p>

              <PlusIcon className="h-auto w-[15.4px] text-black" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
