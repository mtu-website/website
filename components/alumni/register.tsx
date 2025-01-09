import Image from 'next/image';
import RegistrationForm from './form';

export default function Register() {
  return (
    <section className="flex items-center justify-between px-8 lg:gap-12 lg:px-16 lg:py-24 xl:gap-64 xl:px-24 xl:py-36">
      <article className="w-fit">
        <h3 className="mb-4 font-sans font-medium tracking-[-4%] text-white lg:text-xl lg:leading-[24.2px] xl:text-2xl xl:leading-[29.05px]">
          Register as an Alumni
        </h3>
        <p className="mb-6 font-sans text-sm font-normal leading-8 tracking-[-4%] text-[#6F6F6F]">
          Stay connected and amplify the MTU legacy! Sign up as an alumnus today
          to join a thriving network of changemakers, access exclusive benefits,
          and shape the future for the next generation. It’s your time to give
          back, grow, and inspire.
        </p>
        <RegistrationForm />
      </article>
      <Image
        src="/images/alumni/registration-image.png"
        alt="Mountain Top University Alumni - Daniel Ikemefuna"
        className="hidden lg:block lg:h-[522px] lg:w-[414px] xl:h-[779px] xl:w-[609px]"
        width={2000}
        height={2000}
      />
    </section>
  );
}
