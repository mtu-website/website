import Hero from '@/components/news/hero';
import RecentNews from '@/components/news/recent-news';

export default async function News() {
  const data = await fetch('https://mtu.edu.ng/api/mtu-news');
  const news = await data.json();

  return (
    <div>
      <Hero />
      <RecentNews news={news} />
    </div>
  );
}
