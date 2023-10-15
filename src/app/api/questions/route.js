export async function POST(request) {
  return Response.json({
    questionID: 1,
    code: 200,
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
        questionID: 1,
        userName: 'User Name',
        answerTime: 'Answer Time',
        questionTime: '1:25',
        questionDes:
          'How awesome is Jason Calacanis at investing and podcasting?',
        imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
        big: false,
        isDetail: true,
        paid: false,
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
