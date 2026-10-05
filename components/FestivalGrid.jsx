'use client';
import { useState } from 'react';
import { FESTIVALS, MONTHS } from '@/lib/data';
const TABS = [['all', 'सभी'], ['nav', 'नवरात्रि'], ['diw', 'दीपावली'], ['vrat', 'व्रत']];
export default function FestivalGrid({ limit, tabs = false }) {
  const [f, setF] = useState('all');
  const list = FESTIVALS.filter((x) => f === 'all' || x[3] === f).slice(0, limit || 99);
  return (
    <>
      {tabs && (
        <div className="tabs" role="tablist">
          {TABS.map(([k, l]) => <button key={k} role="tab" aria-selected={f === k} className={'tab' + (f === k ? ' on' : '')} onClick={() => setF(k)}>{l}</button>)}
        </div>
      )}
      <div className="fgrid">
        {list.map(([d, t, s]) => {
          const x = new Date(d + 'T00:00:00');
          return (
            <article key={t} className="glass fc">
              <span className="dt">{x.getDate()} {MONTHS[x.getMonth()]}</span>
              <h3>{t}</h3><p>{s}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}
