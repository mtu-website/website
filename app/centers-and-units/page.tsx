import { Metadata } from 'next';

import Hero from '@/components/centers-and-units/hero';
import TabsSection from '@/components/centers-and-units/tabs-section';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Centres and Units',
  description: 'MTU Centres and Units',
};

export default function CentresAndUnits() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';

  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <TabsSection />
      <Footer />
    </main>
  );
}
