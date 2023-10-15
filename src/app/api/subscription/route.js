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
export async function GET(request) {
  return Response.json({
    subsctiption: [
      {
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SHOW',
        questionersID: 1,
        followed: false,
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
      {
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SUBSCRIPTION',
        questionersID: 2,
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
      {
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SUBSCRIPTION',
        questionersID: 3,
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
    ],
  });
  // console.log(request.url, 'request.body');
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('userID');
  // const res = await fetch(`http://127.0.0.1:8080/api/subscription/${id}`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // const product = await res.json();
  // const subsctiption = product.data.content;
  // return Response.json({ subsctiption });
}
export async function DELETE(request) {
  const { questionersID, userID } = await request.json();
  console.log('delete', questionersID, userID);
  const res = await fetch(`http://127.0.0.1:8080/api/subscription/1`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { message } = await res.json();
  if (message === 'success') {
    return Response.json({ message: 'ok' });
  }
}
