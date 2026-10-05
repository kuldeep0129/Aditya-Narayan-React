import { Suspense } from 'react';
import PageHead from '@/components/PageHead';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/data';
export const metadata = { title: 'संपर्क व बुकिंग' };
export default function Page() {
  return (
    <>
      <PageHead icon="📞" title="संपर्क व बुकिंग" sub="फ़ॉर्म भरें – हम 2 घंटे में कॉल करेंगे" />
      <section className="tight"><div className="wrap contact">
        <Reveal><div className="glass info"><h3>सीधा संपर्क</h3>
          <ul><li>📞 <a href={'tel:' + SITE.tel}>{SITE.phone}</a></li><li>💬 <a href={'https://wa.me/' + SITE.wa}>WhatsApp पर संदेश</a></li><li>✉ <a href={'mailto:' + SITE.email}>{SITE.email}</a></li><li>📍 {SITE.city}</li><li>🕘 प्रातः 6 – रात्रि 9 बजे</li></ul>
          <div className="map">🗺 Google Map यहाँ जोड़ें</div></div></Reveal>
        <Reveal delay={100}><Suspense fallback={<div className="glass form">लोड हो रहा है…</div>}><ContactForm /></Suspense></Reveal>
      </div></section>
    </>
  );
}
