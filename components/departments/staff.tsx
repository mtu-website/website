import Hod from './hod';
import OtherStaff from './other-staff';
export default function Staff() {
  return (
    <section className="px-6 py-12 lg:px-12 lg:py-24">
      <h2 className="text-center font-whyte text-[24px] font-bold uppercase leading-[24px] tracking-[-3%] text-[#1F1F1F] lg:text-[28px] xl:text-3xl xl:leading-9">
        meet our staff
      </h2>
      <Hod />
      <OtherStaff />
    </section>
  );
}
