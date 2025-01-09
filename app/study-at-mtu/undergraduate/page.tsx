import Footer from '@/components/footer';
import Header from '@/components/header';
import FilteredSearch from '@/components/undergraduate/filtered-search';
import Hero from '@/components/undergraduate/hero';
import Information from '@/components/undergraduate/information';
import Redirects from '@/components/undergraduate/redirects';

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
