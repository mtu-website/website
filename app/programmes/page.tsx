import Footer from '@/components/footer';
import Header from '@/components/header';

import Admission from '@/components/programmes/admissions';
import CareerProspect from '@/components/programmes/career-protects';
import CourseOverview from '@/components/programmes/course-overview';
import Curriculum from '@/components/programmes/curriculum';
import Hero from '@/components/programmes/hero';
import HeroBottom from '@/components/programmes/hero-bottom';
import Navbar from '@/components/programmes/navbar';

export default function Programmes() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <Navbar />
      <CourseOverview />
      <Admission />
      <CareerProspect />
      <Curriculum />
      <HeroBottom />
      <Footer />
    </main>
  );
}
