import PageHead from '@/components/PageHead';
import Reveal from '@/components/Reveal';
import { GALLERY } from '@/lib/data';
export const metadata = { title: 'गैलरी' };
export default function Page() {
  return (
    <>
      <PageHead icon="🖼" title="गैलरी" sub="संपन्न हुए अनुष्ठानों की झलक (असली फ़ोटो यहाँ जोड़ें)" />
      <section className="tight"><div className="wrap gal">
        {GALLERY.map(([t, g], i) => (
          <Reveal key={t} delay={(i % 3) * 80}><figure className={'gi ' + g}><span>🕉</span><figcaption className="glass">{t}</figcaption></figure></Reveal>
        ))}
      </div></section>
    </>
  );
}
