import { NextResponse } from 'next/server';

export async function POST(request) {
  let body = await request.json();
  body = { ...body, type: 'email2' };
  console.log(body, typeof body, 'body');
  const res = await fetch('http://127.0.0.1:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return NextResponse.json(await res.json());
}
export async function GET() {
  return NextResponse.json({ msg: 'not Here👁👁👁' });
}
