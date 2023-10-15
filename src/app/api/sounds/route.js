import { NextResponse } from 'next/server';

export async function POST(request) {
  // const body = await request.json();
  // console.log(body, 'body');
  return NextResponse.json({ msg: 'hello world', code: 200 });
}
export async function GET() {
  return NextResponse.json({ msg: 'not Here👁👁👁' });
}
