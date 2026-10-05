import PageHead from '@/components/PageHead';
import ServiceGrid from '@/components/ServiceGrid';
import Reveal from '@/components/Reveal';
import { FAQ } from '@/lib/data';
export const metadata = { title: 'पूजा सेवाएँ' };
export default function Page() {
  return (
    <>
      <PageHead icon="🔱" title="पूजा सेवाएँ" sub="संस्कार, अनुष्ठान और ज्योतिष परामर्श – पूर्ण विधि के साथ" />
      <section className="tight"><div className="wrap">
        <ServiceGrid detail />
        <h2 className="sec-t" style={{ marginTop: 70 }}>अक्सर पूछे जाने वाले प्रश्न</h2>
        <div className="faq">{FAQ.map(([q, a]) => <Reveal key={q}><details className="glass"><summary>{q}</summary><p>{a}</p></details></Reveal>)}</div>
      </div></section>
    </>
  );
}
