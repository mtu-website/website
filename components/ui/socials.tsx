import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Socials() {
  return (
    <div className="flex items-center justify-self-end">
      <p className="mr-4 font-sans text-sm font-medium uppercase leading-6 tracking-[2%] text-[#6C006D] lg:text-[16px]">
        share on:
      </p>
      <Link
        href="https://instagram.com/"
        target="_blank"
        className="border-[1.3px] border-[#6C006D] p-4"
      >
        <InstagramLogoIcon className="h-[30px] w-[30px] text-[#6C006D]" />
      </Link>
      <Link
        href="https://linkedin.com/"
        target="_blank"
        className="border-[1.3px] border-[#6C006D] p-4"
      >
        <LinkedInLogoIcon className="h-[30px] w-[30px] text-[#6C006D]" />
      </Link>
      <Link
        href="https://x.com/"
        target="_blank"
        className="border-[1.3px] border-[#6C006D] p-4"
      >
        <TwitterLogoIcon className="h-[30px] w-[30px] text-[#6C006D]" />
      </Link>
    </div>
  );
}
