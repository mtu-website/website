import { Metadata } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Links from '@/components/helpdesk/links';
import Main from '@/components/helpdesk/main';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: '',
};

export default function HelpDesk() {
  const themeColor = '#FFFFFF';
  const fontColor = '#84B000';
  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Main />
      <Links />
      <Footer />
    </main>
  );
}
