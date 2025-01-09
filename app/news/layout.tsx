import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/news/navigation';

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';

  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
