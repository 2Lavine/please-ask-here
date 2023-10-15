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
export async function GET(request, { params }) {
  // const slug = params.slug; // 'a', 'b', or 'c'
  // not use for this situation
  console.log(request.url, 'request.url');
  return Response.json({
    content: [
      {
        questionID: 1,
        userName: 'User Name',
        answerTime: 'Answer Time',
        questionTime: '1:25',
        questionDes:
          'How awesome is Jason Calacanis at investing and podcasting?',
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        isDetail: true,
      },
      {
        questionID: 2,
        userName: 'User Name',
        answerTime: 'Answer Time',
        questionTime: '1:25',
        questionDes:
          'How awesome is Jason Calacanis at investing and podcasting?',
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        isDetail: true,
      },
    ],
  });
  // return Response.json({ body: request.url, msg: 'hello' });
}
