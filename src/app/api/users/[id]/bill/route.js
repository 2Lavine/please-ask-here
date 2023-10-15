import { NextResponse } from 'next/server';

export async function POST(request) {
  let body = await request.json();
  return NextResponse.json({ body, code: 200 });
  //   body = { ...body };
  // const res = await fetch('http://127.0.0.1:8080/api/user/addMoney', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(await request.json()),
  // });

  // return NextResponse.json(await res.json());
}
export async function GET() {
  return NextResponse.json({ msg: 'not Here👁👁👁' });
}
