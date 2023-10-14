import QuestionSelect from '@/components/QuestionSelect';
import { UserDetailCard } from '@/components/UserDetailCard';
export default function Page() {
  const QuestionCardargs = {
    userName: 'User Name',
    answerTime: 'Answer Time',
    questionTime: '1:25',
    questionDes: 'How awesome is Jason Calacanis at investing and podcasting?',
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: true,
    isDetail: true,
  };

  const QuestionList = [QuestionCardargs, QuestionCardargs, QuestionCardargs];
  const UserDetailCardargs = {
    followers: 46,
    answersNumber: 47,
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: false,
    type: 'ASK',
    userDescription: `Entrepreneur, Investor, Father to 3 daughters, cyclist, surfer, poker player, and life hacker. Pre-seed up to $500K. pitch me: t.co/pat53we2xs.All proceeds to Charity. 
    Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
  };
  return (
    <div className="w-9/12 mx-auto">
      <div className="flex items-center p-4 mb-4">
        <div className="mr-4">
          <p className="text-black font-semibold underline ">
            Martin Tobias (Pre-Seed VC)
          </p>
        </div>
        <div>/</div>
        <div className=" pl-4 underline">
          <div className=" font-semibold">Asks</div>
        </div>
      </div>
      <UserDetailCard {...UserDetailCardargs} />
      {/* <h1 className="text-xl font-bold my-8">All Q&A</h1> */}
      <div className="h-8"></div>
      <QuestionSelect />
    </div>
  );
}
