import PageHead from '@/components/PageHead';
import Countdown from '@/components/Countdown';
import FestivalGrid from '@/components/FestivalGrid';
export const metadata = { title: 'व्रत व त्योहार' };
export default function Page() {
  return (
    <>
      <PageHead icon="🪔" title="व्रत व त्योहार" sub="नवरात्रि से दीपावली तक – तिथि, महत्व और पूजा विधि" />
      <section className="tight"><div className="wrap"><Countdown /><FestivalGrid tabs /></div></section>
    </>
  );
}
