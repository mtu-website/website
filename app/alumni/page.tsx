import { Metadata } from 'next';

import Events from '@/components/alumni/events';
import Faq from '@/components/alumni/faq';
import Hero from '@/components/alumni/hero';
import Register from '@/components/alumni/register';
import Socials from '@/components/alumni/socials';
import Stories from '@/components/alumni/stories';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Alumni',
  description: '',
};

export default function Alumni() {
  const themeColor =
    'linear-gradient(180deg, #1E1E1E 11.43%, #101010 64.41%), linear-gradient(180deg, rgba(0, 0, 0, 0.05) 10.84%, rgba(0, 0, 0, 0) 17.19%)';
  const fontColor = '#ADADAD';

  return (
    <main>
      <Header themeColor={themeColor} fontColor={fontColor} />
      <Hero />
      <div
        style={{
          background: `
            linear-gradient(180deg, #1E1E1E 11.43%, #101010 64.41%), 
            linear-gradient(180deg, rgba(0, 0, 0, 0.05) 10.84%, rgba(0, 0, 0, 0) 17.19%)
          `,
        }}
      >
        <Faq />
        <Register />
        <Events />
        <Stories />
        <Socials />
      </div>
      <Footer />
    </main>
  );
}
