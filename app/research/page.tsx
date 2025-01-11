import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Introduction from '@/components/research/introduction';
import FeaturedResearch from '@/components/research/featured-research';
import ResearchAreas from '@/components/research/research-areas';
import News from '@/components/research/news';
import Facilities from '@/components/research/facilities';
import Journals from '@/components/research/journals';
import Collaboration from '@/components/research/collaboration';

import Hero from '@/components/research/hero';

export const metadata: Metadata = {
  title: 'Our Research',
  description: '',
};

export default function Research() {
  const themeColor =
    'radial-gradient(95.69% 332.95% at 4.31% 5.63%, rgba(255, 0, 132, 0.5) 0%, rgba(255, 9, 230, 0.5) 100%), radial-gradient(100% 347.93% at 100% 0%, rgba(84, 0, 150, 0.5) 0%, rgba(84, 0, 150, 0.5) 99.95%)';
  const fontColor = '#FFFFFF';

  return (
    <div>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <Introduction />
      <FeaturedResearch />
      <ResearchAreas />
      <News />
      <Facilities />
      <Journals />
      <Collaboration />
      <Footer />
    </div>
  );
}
