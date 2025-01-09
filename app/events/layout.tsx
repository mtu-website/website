import Navigation from '@/components/events/navigation';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function EventsLayout({
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
