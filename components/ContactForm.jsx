'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SERVICES } from '@/lib/data';
export default function ContactForm() {
  const sp = useSearchParams();
  const [st, setSt] = useState(null);
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const b = Object.fromEntries(new FormData(f));
    if (!b.name.trim() || !/^[6-9]\d{9}$/.test(b.phone)) return setSt({ ok: false, m: 'कृपया नाम और सही 10 अंकों का मोबाइल नंबर भरें।' });
    setBusy(true);
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b) });
      if (!r.ok) throw 0;
      setSt({ ok: true, m: `धन्यवाद ${b.name} जी! ${b.service} के लिए अनुरोध मिल गया, पंडित जी जल्द कॉल करेंगे।` });
      f.reset();
    } catch { setSt({ ok: false, m: 'कुछ गड़बड़ हुई, कृपया फिर प्रयास करें या सीधे कॉल करें।' }); }
    setBusy(false);
  }
  return (
    <form className="glass form" onSubmit={submit} noValidate>
      <div className="row2">
        <div><label htmlFor="name">आपका नाम</label><input id="name" name="name" required /></div>
        <div><label htmlFor="phone">मोबाइल नंबर</label><input id="phone" name="phone" inputMode="numeric" maxLength={10} required /></div>
      </div>
      <div className="row2">
        <div><label htmlFor="service">पूजा / सेवा</label>
          <select id="service" name="service" defaultValue={sp.get('service') || SERVICES[0].title}>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}</select></div>
        <div><label htmlFor="date">पसंदीदा तिथि</label><input id="date" name="date" type="date" /></div>
      </div>
      <label htmlFor="message">संदेश</label>
      <textarea id="message" name="message" rows={4} />
      <button className="btn full" disabled={busy}>{busy ? 'भेजा जा रहा है…' : 'बुकिंग अनुरोध भेजें'}</button>
      {st && <div role="status" className={'ok ' + (st.ok ? 'good' : 'bad')}>{st.m}</div>}
    </form>
  );
}
