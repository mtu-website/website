import Image from 'next/image';
import Accommodation from './living';
import Spirituality from './spirituality';
import Sports from './sports';

export default function CampusLife() {
  return (
    <div id="campus-life" className="flex items-start xl:px-12">
      <div className="my-6 mr-16 hidden w-fit flex-col items-center justify-center xl:flex">
        <div className="flex h-[44px] w-[44px] animate-ping items-center justify-center rounded-[50%] border-2 border-[#6C006D]">
          <div className="h-[32px] w-[32px] rounded-[50%] bg-[#6C006D]"></div>
        </div>
        <div
          className="min-h-[400px] border-l-[2px] border-dashed border-[#6C006D] opacity-30"
          style={{ lineHeight: '1rem' }}
        ></div>
      </div>
      <div>
        <section className="flex w-full justify-between">
          <article className="w-full">
            <h1 className="font-sans text-[35px] font-semibold capitalize tracking-[-5%] text-[#84B000] lg:text-[56px] lg:leading-[84px] xl:text-[64.56px] xl:leading-[96.84px]">
              campus life
            </h1>
            <article>
              <p className="my-6 font-sans font-medium leading-[28px] tracking-[-3%] text-[#6F6F6F] lg:text-[16px] xl:min-w-[800px]">
                <span className="font-semibold italic text-[#84B000]">
                  Campus life at MTU
                </span>{' '}
                is more than just classes and lectures. We provide a vibrant,
                dynamic experience where students build friendships, discover
                their passions, and grow into well-rounded individuals. Our
                ecosystem is a perfect blend of academic and co-curricular
                activities that allow growth and personal development. Students
                have a lot of appealing and diverse interests that vary from
                technology and science, music and art, sports, and community
                service; therefore, students can choose something they are
                interested in or explore something different. Engaging events,
                workshops, and guests lectures bring the campus together,
                creating a warm and inclusive community.
              </p>
              <p className="my-6 font-sans font-medium leading-[28px] tracking-[-3%] text-[#6F6F6F] lg:text-[16px] xl:min-w-[800px]">
                <span className="font-semibold italic text-[#84B000]">
                  Our facilities
                </span>{' '}
                are designed with students’ needs in mind. We provide a hybrid
                library that combines traditional resources with advanced
                digital tools, ensuring students have comprehensive access to
                information. Also inclusive are comfortable study areas and
                technologically equipped classrooms allowing students for study,
                work and rest.
              </p>
              <p className="my-6 font-sans font-medium leading-[28px] tracking-[-3%] text-[#6F6F6F] lg:text-[16px] xl:min-w-[800px]">
                <span className="font-semibold italic text-[#84B000]">
                  Safety and wellness
                </span>{' '}
                are our priorities at MTU. We offer round-the-clock security, a
                medical centre, and mental wellness programmes to ensure that
                every student feels secure and supported. Our goal is to create
                a balanced environment where students can focus on academics
                while enjoying a fulfilling campus life. At MTU, every day is a
                chance to learn, connect, and grow.
              </p>
            </article>

            <div className="my-12 items-center gap-24 lg:my-24 lg:flex lg:px-12">
              <Image
                src="/images/why-mtu/student-event.png"
                alt="Mountain Top University Female Students"
                height={2000}
                width={2000}
                className="mx-auto h-[300px] w-[240px] lg:mx-0 lg:h-[465px] lg:w-[290px]"
              />
              <article>
                <h2 className="my-4 font-sans text-[18px] font-medium leading-[31.14px] tracking-[-3%] text-black lg:my-9 lg:text-2xl lg:leading-[41.52px]">
                  Student events
                </h2>
                <p className="mb-4 font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F] lg:mb-6">
                  At MTU, we encourage our students to build quality
                  connections, explore various talents, and create amazing
                  memories.
                </p>
                <p className="mb-4 font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F] lg:mb-6">
                  Our academic conferences and thought-provoking workshops are
                  opportunities to learn, grow, and thrive within a vibrant
                  community. Our students regularly enjoy a dynamic calendar
                  filled with regular guest speakers and industry meet-ups
                  coupled with sport tournaments and talent hunts, making campus
                  life rich and diverse. These events allow the student to grow
                  and transform from their comfort zone, meeting lifelong
                  friends and develop leadership skills.
                </p>
                <p className="mb-4 font-sans text-[16px] font-medium leading-[27.68px] tracking-[-3%] text-[#6F6F6F] lg:mb-6">
                  MTU ensures there’s always something exciting on the horizon.
                  Every event is envisioned to provoke or motivate the students
                  in achieving their goals.
                </p>
              </article>
            </div>
          </article>
        </section>
        {/* underline */}
        <div className="h-[1px] w-full bg-black opacity-25"></div>
        <Accommodation />
        {/* underline */}
        <div className="h-[1px] w-full bg-black opacity-25"></div>
        <Sports />
        {/* underline */}
        <div className="h-[1px] w-full bg-black opacity-25"></div>
        <Spirituality />
      </div>
    </div>
  );
}
