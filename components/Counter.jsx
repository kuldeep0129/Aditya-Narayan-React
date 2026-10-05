'use client';
import { useEffect, useRef, useState } from 'react';
export default function Counter({ n, label }) {
  const [v, setV] = useState(0);
  const r = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let s = null;
      const f = (t) => { s = s ?? t; const p = Math.min((t - s) / 1600, 1); setV(Math.floor(n * p)); if (p < 1) requestAnimationFrame(f); };
      requestAnimationFrame(f);
    });
    io.observe(r.current);
    return () => io.disconnect();
  }, [n]);
  return <div ref={r}><b>{v.toLocaleString('en-IN')}+</b><span>{label}</span></div>;
}
