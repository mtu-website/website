import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Curriculum() {
  return (
    <section className="px-6 py-12 lg:px-[120px] lg:py-16">
      <h2 className="w-fit font-whyte text-xl font-medium uppercase leading-8 tracking-[-4%] text-[#1F1F1F] underline underline-offset-2 lg:text-[28px] lg:leading-[44.8px]">
        curriculum details
      </h2>

      <article className="font-sans text-sm font-normal leading-[32px] tracking-[-4%] text-[#2E2E2E] lg:text-[18px] lg:leading-[42px] xl:text-xl xl:leading-[45px]">
        <h3 className="mb-3 mt-6 font-sans text-[18px] font-semibold leading-7 tracking-[-4%] text-[#84B000] lg:text-2xl lg:leading-9">
          Our Programme Outline
        </h3>
        <p>
          The curriculum is designed to provide students with the skills and
          knowledge they need to succeed in a variety of careers in the tech
          industry. The programme covers a wide range of topics, including
          programming, data structures, algorithms, operating systems, and
          artificial intelligence. The faculty is available to students through
          forums, email, and phone calls. Students also have access to a variety
          of resources, including a state-of-the-art e-library, virtual computer
          labs, a career center, and a variety of student organisations.
        </p>
      </article>
      <div className="w-full items-center lg:flex">
        <Input
          type="email"
          placeholder="Enter your email to get the curriculum"
          className="my-6 h-[68px] p-6 font-sans text-sm font-medium leading-9 tracking-[-4%] text-[#969696] lg:rounded-br-none lg:rounded-tr-none lg:text-[16px]"
        />
        <Button
          type="submit"
          className="h-[68px] w-full bg-[#6C006D] px-6 font-mono text-sm font-semibold uppercase leading-9 tracking-[-4%] lg:w-fit lg:rounded-bl-none lg:rounded-tl-none lg:text-[18px]"
        >
          get the curriculum
        </Button>
      </div>
    </section>
  );
}
