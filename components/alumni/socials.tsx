import Link from 'next/link';

import UilFacebookF from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilYoutube from '@iconscout/react-unicons/icons/uil-youtube';

const socialLinks = [
  {
    id: '1',
    platform: 'instagram',
    link: '/instagram.com',
    icon: <UilInstagram color="white" />,
    handle: '@mtualumni',
  },
  {
    id: '2',
    platform: 'facebook',
    link: '/facebook.com',
    icon: <UilFacebookF color="white" />,
    handle: '@mtualumni',
  },
  {
    id: '3',
    platform: 'youtube',
    link: '/youtube.com',
    icon: <UilYoutube color="white" />,
    handle: '@mtualumni',
  },
];

export default function Socials() {
  return (
    <section className="mt-12">
      <div className="mx-auto flex flex-col items-center justify-center bg-[#6C006D80] py-12 lg:p-24">
        <h3 className="font-sans text-sm font-normal uppercase leading-[24.22px] tracking-[-3%] text-white">
          stay in touch
        </h3>
        <h2 className="mb-9 font-sans text-2xl font-semibold leading-[69.2px] tracking-[-3%] text-white xl:text-[40px]">
          We are available on
        </h2>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {socialLinks.map((link) => (
            <div key={link.id}>
              <Link
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mb-2 flex w-[66.3px] items-center justify-center rounded-[50%] border-[0.5px] border-white bg-[#FF00FF] p-1"
              >
                {link.icon}
              </Link>
              <p className="text-[#D9D9D9]">{link.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
