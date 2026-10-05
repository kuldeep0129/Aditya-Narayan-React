import PageHead from '@/components/PageHead';
import PanchangCard from '@/components/PanchangCard';
import Reveal from '@/components/Reveal';
import { CHOGHADIYA, MUHURAT, MONTHS } from '@/lib/data';
export const metadata = { title: 'दैनिक पंचांग' };
export default function Page() {
  return (
    <>
      <PageHead icon="📿" title="दैनिक पंचांग" sub="आज की तिथि, चौघड़िया और आगामी शुभ मुहूर्त" />
      <section className="tight"><div className="wrap">
        <Reveal><PanchangCard /></Reveal>
        <div className="two">
          <Reveal><div className="glass tbl"><h3>आज की चौघड़िया</h3>
            {CHOGHADIYA.map(([n, t, c], i) => <div key={i} className={'tr ' + c}><b>{n}</b><span>{t}</span></div>)}
          </div></Reveal>
          <Reveal delay={100}><div className="glass tbl"><h3>आगामी शुभ मुहूर्त</h3>
            {MUHURAT.map(([d, n, t]) => { const x = new Date(d + 'T00:00:00'); return <div key={d} className="tr good"><b>{x.getDate()} {MONTHS[x.getMonth()]} · {n}</b><span>{t}</span></div>; })}
          </div></Reveal>
        </div>
        <p className="note">* सभी समय डेमो हेतु हैं। वास्तविक उपयोग के लिए पंचांग API / अपने बैकएंड से डेटा जोड़ें।</p>
      </div></section>
    </>
  );
}
