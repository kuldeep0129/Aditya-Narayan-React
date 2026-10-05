'use client';
import { useEffect, useState } from 'react';
import { SHLOKS } from '@/lib/data';
export default function Shlok() {
  const [i, setI] = useState(0);
  useEffect(() => setI(new Date().getDate() % SHLOKS.length), []);
  return (
    <div className="shlok">
      <span className="shl-t">आज का श्लोक</span>
      <p className="shl-s">{SHLOKS[i][0]}</p>
      <p className="shl-m">{SHLOKS[i][1]}</p>
    </div>
  );
}
