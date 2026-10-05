import Link from 'next/link';
import Shlok from './Shlok';
import { SITE, NAV, SERVICES } from '@/lib/data';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="glass shlok-band"><Shlok /></div>
        <div className="glass fmain">
          <div className="fcol fbrand">
            <div className="logo"><span className="om-s">ॐ</span>{SITE.short}</div>
            <p>शास्त्रीय विधि, शुद्ध मंत्रोच्चार और समय की पाबंदी – 25 वर्षों से परिवारों की सेवा में।</p>
            <div className="social">{['IG', 'YT', 'FB', 'WA'].map((s) => <a key={s} href="#" aria-label={s}>{s}</a>)}</div>
          </div>
          <div className="fcol"><h4>पृष्ठ</h4>{NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}</div>
          <div className="fcol"><h4>पूजा सेवाएँ</h4>{SERVICES.slice(0, 5).map((s) => <Link key={s.title} href={'/contact?service=' + encodeURIComponent(s.title)}>{s.title}</Link>)}</div>
          <div className="fcol">
            <h4>संपर्क</h4>
            <a href={'tel:' + SITE.tel}>📞 {SITE.phone}</a>
            <a href={'mailto:' + SITE.email}>✉ {SITE.email}</a>
            <span>📍 {SITE.city}</span>
            <span>🕘 प्रातः 6 – रात्रि 9 बजे</span>
          </div>
        </div>
        <div className="fbar"><span>© {new Date().getFullYear()} {SITE.name} · डेमो वेबसाइट</span><span>🪔 शुभ हो आपका हर दिन</span></div>
      </div>
    </footer>
  );
}
