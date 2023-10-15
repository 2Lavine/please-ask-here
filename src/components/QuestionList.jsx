import { QuestionCard } from '@/components/QuestionCard';
async function getData() {
  const content = [
    {
      questionID: 1,
      userName: 'User Name',
      answerTime: 'Answer Time',
      questionTime: '1:25',
      questionDes:
        'How awesome is Jason Calacanis at investing and podcasting?',
      imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
      big: false,
      isDetail: false,
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
      isDetail: false,
    },
  ];
  return content;
  // const res = await fetch('http://127.0.0.1:8080/qa/all/question-list', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     pageSize: 2,
  //   },
  // });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // const responseData = await res.json();
  // return responseData.data.content;
}
export default async function QuestionList() {
  const questionList = await getData();
  console.log(questionList, typeof questionList, '=======3232=========');

  return (
    <div className="flex items-center justify-between space-x-8">
      {questionList.map((question) => (
        <QuestionCard {...question} key={question.questionID} />
      ))}
    </div>
  );
}
