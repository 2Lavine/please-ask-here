import { NextResponse } from 'next/server';

export async function POST(request) {
  const res = await fetch('http://127.0.0.1:8080/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(await request.json()),
  });

  return NextResponse.json(await res.json());
}
export async function GET() {
  return NextResponse.json({ msg: 'not Here👁👁👁' });
}
