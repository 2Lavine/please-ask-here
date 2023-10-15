import { QuestionCard } from '@/components/QuestionCard';
import { UserDetailCard } from '@/components/UserDetailCard';
import Link from 'next/link';
async function getData(id) {
  const questioner = {
    questionersID: 1,
    followers: 46,
    answersNumber: 47,
    userDescription: `Founder of @ProductHunt. Investor at @WeekendFund. Writing about fun(d) stuff at t.co/tsunRiiECA with @vedikaja_in. Say hi! Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
  };
  const questions = [
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
  ];
  const certainQuestions = {
    questionID: 3,
    userName: 'User Name',
    answerTime: 'Answer Time',
    questionTime: '1:25',
    questionDes: 'How awesome is Jason Calacanis at investing and podcasting?',
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: false,
    isDetail: true,
  };
  return { content: { questioner, questions, certainQuestions } };
  // const res = await fetch('http://127.0.0.1:8080/qa/all?questionID:1', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   cache: 'no-store'
  // });
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // const responseData = await res.json();
  // return responseData.data.content;
}
export default async function Page({ params }) {
  const questionID = params.slug;
  const data = await getData(questionID);
  const questionList = data.content.questions;
  const questioner = data.content.questioner;
  const certainQuestions = data.content.certainQuestions;

  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center p-4 mb-4">
        <div className="mr-4">
          <Link
            href={`/home/questioners/${questioner.questionersID}`}
            className="text-black font-semibold underline "
          >
            Martin Tobias (Pre-Seed VC)
          </Link>
        </div>
        <div>/</div>
        <div className="pl-4 underline">
          <div className=" font-semibold">Asks</div>
        </div>
      </div>
      <QuestionCard {...certainQuestions} />

      <UserDetailCard {...questioner} />
      <h1 className="text-xl font-bold my-8">Recommend Q&A</h1>
      {questionList.map((item) => (
        <QuestionCard {...item} key={item.questionID} />
      ))}
    </div>
  );
}
