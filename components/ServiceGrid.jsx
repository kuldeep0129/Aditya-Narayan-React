import Link from 'next/link';
import Reveal from './Reveal';
import { SERVICES } from '@/lib/data';
export default function ServiceGrid({ limit, detail = false }) {
  return (
    <div className="sgrid">
      {SERVICES.slice(0, limit || 99).map((s, i) => (
        <Reveal key={s.title} delay={(i % 3) * 90}>
          <article className="glass sv">
            <span className="ic">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {detail && (
              <>
                <div className="chip">⏱ {s.time}</div>
                <ul className="tick">{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
                <Link className="btn sm" href={'/contact?service=' + encodeURIComponent(s.title)}>बुक करें</Link>
              </>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
