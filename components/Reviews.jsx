'use client';
import { useEffect, useState } from 'react';
import { REVIEWS } from '@/lib/data';
export default function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % REVIEWS.length), 5000); return () => clearInterval(t); }, []);
  return (
    <div className="glass rev" aria-live="polite">
      <p key={i} className="fade">“{REVIEWS[i][0]}”</p>
      <strong key={'a' + i} className="fade">– {REVIEWS[i][1]}</strong>
      <div className="dots">{REVIEWS.map((_, k) => <button key={k} aria-label={'समीक्षा ' + (k + 1)} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}</div>
    </div>
  );
}
