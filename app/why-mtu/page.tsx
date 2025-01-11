import { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';
import CampusLife from '@/components/why-mtu/campus-life';
import Facilities from '@/components/why-mtu/facilities';
import Hero from '@/components/why-mtu/hero';
import Information from '@/components/why-mtu/info';
import Manpower from '@/components/why-mtu/manpower';
import Ranking from '@/components/why-mtu/ranking';
import Scholarships from '@/components/why-mtu/scholarships';
import Stories from '@/components/why-mtu/stories';
import Testimonials from '@/components/why-mtu/testimonials';
import VirtualTour from '@/components/why-mtu/virtual-tour';

export const metadata: Metadata = {
  title: 'Why MTU',
  description: '',
};

export default function WhyMtu() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <div className="mx-auto px-4 lg:py-6 xl:px-6 xl:py-24">
        <Information />
        <Facilities />
        <Ranking />
        <Scholarships />
        <Manpower />
        <CampusLife />
        <Stories />
      </div>
      <Testimonials />
      <VirtualTour />
      <Footer />
    </main>
  );
}
