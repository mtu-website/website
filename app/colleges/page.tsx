import AllColleges from '@/components/college/all-colleges';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MTU || Our Colleges',
  description: 'Explore blah blah blah',
};

import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Page() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <AllColleges />
      <Footer />
    </main>
  );
}
