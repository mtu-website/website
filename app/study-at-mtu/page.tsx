import Footer from '@/components/footer';
import Header from '@/components/header';
import Aid from '@/components/study-at-mtu/aid';
import Faq from '@/components/study-at-mtu/faq';
import Hero from '@/components/study-at-mtu/hero';
import Introduction from '@/components/study-at-mtu/introduction';
import Modes from '@/components/study-at-mtu/modes';
import Pathways from '@/components/study-at-mtu/pathways';
import Redirects from '@/components/study-at-mtu/redirects';

export default function StudyAtMtu() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <Introduction />
      <Pathways />
      <Modes />
      <Aid />
      <Faq />
      <Redirects />
      <Footer />
    </main>
  );
}
