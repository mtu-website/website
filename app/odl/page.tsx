import { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';

import Hero from '@/components/odl/hero';
import Introduction from '@/components/odl/introduction';
import Services from '@/components/odl/services';

import Courses from '@/components/odl/courses';
import WelcomeNote from '@/components/odl/welcome-note';

export const metadata: Metadata = {
  title: 'Open Distance Learning',
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
