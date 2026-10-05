import Link from 'next/link';
import Mandala from './Mandala';
import Counter from './Counter';
import { SITE } from '@/lib/data';
const E = ['🪔', '✨', '🌼', '🪔', '✨'];
export default function Hero() {
  return (
    <header className="hero">
      <Mandala />
      <div aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="fl" style={{ left: i * 8.5 + 2 + '%', animationDuration: 9 + (i % 5) * 3 + 's', animationDelay: i * 1.3 + 's' }}>{E[i % 5]}</span>
        ))}
      </div>
      <div className="wrap">
        <div className="glass hero-card">
          <span className="om">ॐ</span>
          <h1>{SITE.name}</h1>
          <p>वैदिक पूजा, कुंडली, विवाह व गृह-प्रवेश मुहूर्त – शुद्ध मंत्रोच्चार और शास्त्रीय विधि के साथ, आपके घर या मंदिर में।</p>
          <div className="cta">
            <Link className="btn" href="/contact">पूजा बुक करें</Link>
            <Link className="btn ghost" href="/panchang">आज का पंचांग</Link>
          </div>
          <div className="stats"><Counter n={25} label="वर्षों का अनुभव" /><Counter n={5000} label="पूजाएँ संपन्न" /><Counter n={1200} label="संतुष्ट परिवार" /></div>
        </div>
      </div>
    </header>
  );
}
