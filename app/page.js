import Link from 'next/link';
import Hero from '@/components/Hero';
import SecHead from '@/components/SecHead';
import Reveal from '@/components/Reveal';
import PanchangCard from '@/components/PanchangCard';
import Countdown from '@/components/Countdown';
import FestivalGrid from '@/components/FestivalGrid';
import ServiceGrid from '@/components/ServiceGrid';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <section><div className="wrap">
        <SecHead t="आज का पंचांग" s="दैनिक तिथि, नक्षत्र, योग व शुभ-अशुभ समय (डेमो डेटा)" />
        <Reveal><PanchangCard /></Reveal>
        <div className="center"><Link className="btn ghost" href="/panchang">पूरा पंचांग व चौघड़िया</Link></div>
      </div></section>
      <section><div className="wrap">
        <SecHead t="व्रत व त्योहार" s="आने वाले पर्वों की झलक" />
        <Reveal><Countdown /></Reveal>
        <FestivalGrid limit={6} />
        <div className="center"><Link className="btn ghost" href="/festivals">सभी त्योहार देखें</Link></div>
      </div></section>
      <section><div className="wrap">
        <SecHead t="पूजा सेवाएँ" s="हर संस्कार शास्त्र-सम्मत विधि से" />
        <ServiceGrid limit={6} />
      </div></section>
      <section><div className="wrap about">
        <Reveal><div className="photo"><span>🕉</span></div></Reveal>
        <Reveal delay={120}>
          <h2 className="sec-t left">परिचय</h2>
          <p className="lead">काशी से शास्त्री की उपाधि प्राप्त, 25 वर्षों से वैदिक अनुष्ठान व ज्योतिष सेवा। हर यजमान के लिए समय पर पहुँचना और शुद्ध उच्चारण हमारी पहचान है।</p>
          <Reviews />
          <Link className="btn ghost" href="/about">पूरा परिचय पढ़ें</Link>
        </Reveal>
      </div></section>
      <section><div className="wrap"><Reveal>
        <div className="glass ctaband"><h2>अपनी पूजा आज ही बुक करें</h2><p>तिथि बताइए, शुभ मुहूर्त हम निकाल देंगे।</p><Link className="btn" href="/contact">संपर्क करें</Link></div>
      </Reveal></div></section>
    </>
  );
}
