import Footer from '@/components/footer';
import Header from '@/components/header';
import AcademicPaths from '@/components/student-corner/academic-paths';
import Hero from '@/components/student-corner/hero';

export default function StudentCorner() {
  const themeColor = '#1E1E1E';
  const fontColor = '#ADADAD';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <AcademicPaths />
      <Footer />
    </main>
  );
}
