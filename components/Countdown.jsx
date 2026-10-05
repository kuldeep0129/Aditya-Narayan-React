'use client';
import { useEffect, useState } from 'react';
import { FESTIVALS } from '@/lib/data';
export default function Countdown() {
  const [now, setNow] = useState(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const nx = now ? FESTIVALS.find((f) => new Date(f[0] + 'T23:59:59') > now) || FESTIVALS[0] : FESTIVALS[0];
  const t = now ? Math.max(0, new Date(nx[0] + 'T00:00:00') - now) : 0;
  const v = [[Math.floor(t / 864e5), 'दिन'], [Math.floor(t / 36e5) % 24, 'घंटे'], [Math.floor(t / 6e4) % 60, 'मिनट'], [Math.floor(t / 1e3) % 60, 'सेकंड']];
  return (
    <div className="next">
      <div>अगला पर्व: <b>{nx[1]}</b></div>
      <div className="cd">{v.map(([n, l]) => <div key={l}><b>{n}</b><small>{l}</small></div>)}</div>
    </div>
  );
}
