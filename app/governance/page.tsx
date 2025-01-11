import { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';

import Hero from '@/components/governance/hero';
import Introduction from '@/components/governance/introduction';
import Members from '@/components/governance/members';
import Principals from '@/components/governance/principals';

export const metadata: Metadata = {
  title: 'Governance',
  description: '',
};

export default function Governance() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <Introduction />
      <Members />
      <Principals />
      <Footer />
    </main>
  );
}
