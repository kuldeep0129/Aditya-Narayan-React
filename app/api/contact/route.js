import { NextResponse } from 'next/server';
// TODO: yahan apne .NET API / SQL Server / email service se connect karein
export async function POST(req) {
  const b = await req.json().catch(() => null);
  if (!b || !b.name?.trim() || !/^[6-9]\d{9}$/.test(b.phone || '')) return NextResponse.json({ ok: false }, { status: 400 });
  console.log('NEW BOOKING', b);
  return NextResponse.json({ ok: true });
}
