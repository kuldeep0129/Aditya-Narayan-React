'use client';
import { useEffect, useState } from 'react';
import { PANCHANG, MONTHS, WEEKDAYS } from '@/lib/data';
export default function PanchangCard() {
  const [d, setD] = useState(null);
  useEffect(() => setD(new Date()), []);
  return (
    <div className="glass panch">
      <div className="date-big">
        <div className="d">{d ? d.getDate() : '--'}</div>
        <div className="dm">{d ? MONTHS[d.getMonth()] + ' ' + d.getFullYear() : ''}</div>
        <div className="dw">{d ? WEEKDAYS[d.getDay()] : ''}</div>
        <div className="dv">विक्रम संवत 2083</div>
      </div>
      <div className="grid5">
        {PANCHANG.map(([k, v, c]) => (
          <div key={k} className={'pi ' + (c || '')}><small>{k}</small><strong>{v}</strong></div>
        ))}
      </div>
    </div>
  );
}
