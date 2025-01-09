import Footer from '@/components/footer';
import Header from '@/components/header';
import FilteredSearch from '@/components/postgraduate/filtered-search';
import Hero from '@/components/postgraduate/hero';
import Information from '@/components/postgraduate/information';
import Redirects from '@/components/postgraduate/redirects';

export default function Undergraduate() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <FilteredSearch />
      <Information />
      <Redirects />
      <Footer />
    </main>
  );
}
