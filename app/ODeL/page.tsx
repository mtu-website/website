import { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';

import Hero from '@/components/ODeL/hero';
import Introduction from '@/components/ODeL/introduction';
import Services from '@/components/ODeL/services';

import Courses from '@/components/ODeL/courses';
import WelcomeNote from '@/components/ODeL/welcome-note';

export const metadata: Metadata = {
  title: 'Open Distance and e-Learning',
  description: '',
};

export default function Odl() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <Introduction />
      <Services />
      <Courses />
      <WelcomeNote />
      <Footer />
    </main>
  );
}
