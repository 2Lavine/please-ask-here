export async function POST(request) {
  return Response.json({
    questionID: 1,
  });
  // const res = await fetch('http://127.0.0.1:8080/api/users', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(await request.json()),
  // });

  // return NextResponse.json(await res.json());
}
export async function GET(request) {
  console.log(request.url, 'request.body');
  return Response.json({
    content: [
      {
        userID: 1,
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SHOW',
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
      {
        userID: 2,
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SHOW',
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
      {
        userID: 3,
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SHOW',
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
      {
        userID: 4,
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SHOW',
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
      {
        userID: 5,
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SHOW',
        userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
        Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      },
      {
        userID: 5,
        followers: 46,
        answersNumber: 47,
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        type: 'SHOW',
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
