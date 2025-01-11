import { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';
import AcademicPaths from '@/components/student-corner/academic-paths';
import Hero from '@/components/student-corner/hero';

export const metadata: Metadata = {
  title: 'Staff Corner',
  description: '',
};

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
