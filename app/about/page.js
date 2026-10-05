import Link from 'next/link';
import PageHead from '@/components/PageHead';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import Reviews from '@/components/Reviews';
export const metadata = { title: 'परिचय' };
const TL = [['1998', 'काशी में वेद-वेदांग का अध्ययन आरंभ'], ['2004', 'शास्त्री (आचार्य) उपाधि प्राप्त'], ['2010', 'ज्योतिष व कुंडली परामर्श सेवा शुरू'], ['2018', 'दिल्ली–NCR में 1000+ पूजाएँ पूर्ण'], ['2024', 'ऑनलाइन पूजा व वीडियो परामर्श आरंभ']];
const VAL = [['🙏', 'शुद्धता', 'मंत्र, उच्चारण और विधि में कोई समझौता नहीं।'], ['⏰', 'समय की पाबंदी', 'मुहूर्त से पहले पहुँचना हमारा नियम है।'], ['🤝', 'सरल भाषा', 'हर विधि का अर्थ यजमान को समझाया जाता है।']];
export default function Page() {
  return (
    <>
      <PageHead icon="🙏" title="परिचय" sub="श्री रामेश्वर शास्त्री – परंपरा, ज्ञान और सेवा" />
      <section className="tight"><div className="wrap">
        <div className="about">
          <Reveal><div className="photo"><span>🕉</span></div></Reveal>
          <Reveal delay={100}><p className="lead">पंडित जी ने काशी में वेद, कर्मकांड और ज्योतिष की शिक्षा पाई। आज तक हजारों परिवारों के संस्कार, विवाह और गृह-प्रवेश संपन्न करवा चुके हैं।</p>
            <div className="stats left"><Counter n={25} label="वर्ष अनुभव" /><Counter n={5000} label="पूजाएँ" /><Counter n={1200} label="परिवार" /></div></Reveal>
        </div>
        <h2 className="sec-t" style={{ marginTop: 70 }}>यात्रा</h2>
        <div className="tl">{TL.map(([y, t]) => <Reveal key={y}><div className="glass tli"><b>{y}</b><span>{t}</span></div></Reveal>)}</div>
        <h2 className="sec-t" style={{ marginTop: 70 }}>हमारे मूल्य</h2>
        <div className="sgrid">{VAL.map(([i, t, d]) => <Reveal key={t}><div className="glass sv"><span className="ic">{i}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
        <h2 className="sec-t" style={{ marginTop: 70 }}>यजमानों के अनुभव</h2>
        <Reviews />
        <div className="center"><Link className="btn" href="/contact">पूजा बुक करें</Link></div>
      </div></section>
    </>
  );
}
