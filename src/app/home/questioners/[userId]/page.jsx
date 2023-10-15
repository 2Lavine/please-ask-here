import QuestionSelect from '@/components/QuestionSelect';
import { UserDetailCard } from '@/components/UserDetailCard';
async function getData(id) {
  const content = [
    {
      userID: 1,
      followers: 46,
      answersNumber: 47,
      userDescription: `Founder of @ProductHunt. Investor at @WeekendFund. Writing about fun(d) stuff at t.co/tsunRiiECA with @vedikaja_in. Say hi! Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
      imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    },
  ];
  return content;
  // const res = await fetch('http://127.0.0.1:8080/qa/all/users', {
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
export default async function Page({ params }) {
  const userId = params.slug;
  const UserDetail = await getData(userId);
  const UserDetailCardargs = {
    ...UserDetail[0],
    type: 'INPUT',
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
