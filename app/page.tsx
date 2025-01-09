// import { Modal } from '@/components/home/modal';
import News from '@/components/home/news';
import Research from '@/components/home/research';
import Footer from '../components/footer';
import Header from '../components/header';
import BottomHero from '../components/home/bottom-hero';
import Events from '../components/home/events';
import FAQ from '../components/home/faq';
import Hero from '../components/home/hero';
import Ranking from '../components/home/ranking';
import Statement from '../components/home/statement';
import StudyAtMtu from '../components/home/study';
import TopBanner from '../components/home/topBanner';

export default function Home() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <TopBanner />
      {/* <Modal /> */}
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <StudyAtMtu />
      <Statement />
      <Research />
      <Ranking />
      <Events />
      <News />
      <FAQ />
      <BottomHero />
      <Footer />
    </main>
  );
}
