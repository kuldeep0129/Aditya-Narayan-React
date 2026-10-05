'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE } from '@/lib/data';
const active = (p, h) => (h === '/' ? p === '/' : p.startsWith(h));
export function Navbar() {
  const p = usePathname();
  return (
    <header className="nav glass">
      <Link href="/" className="logo"><span className="om-s">ॐ</span>{SITE.short}</Link>
      <nav className="nav-links" aria-label="मुख्य मेनू">
        {NAV.map((n) => <Link key={n.href} href={n.href} className={active(p, n.href) ? 'on' : ''}>{n.label}</Link>)}
      </nav>
      <a className="btn sm" href={'tel:' + SITE.tel}>📞 <span className="hide-s">कॉल करें</span></a>
    </header>
  );
}
export function BottomBar() {
  const p = usePathname();
  return (
    <nav className="bbar glass" aria-label="मोबाइल मेनू">
      {NAV.filter((n) => n.mob).map((n) => (
        <Link key={n.href} href={n.href} className={active(p, n.href) ? 'on' : ''}>
          <span className="bi">{n.icon}</span><span className="bl">{n.label}</span>
        </Link>
      ))}
    </nav>
  );
}
