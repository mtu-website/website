import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#080808]">
      <Image
        src="/images/home/logo-2.svg"
        width={400}
        height={400}
        alt="MTU LOGO"
        className="h-[200px] w-[200px] animate-pulse lg:h-[400px] lg:w-[400px]"
      />
    </div>
  );
}
