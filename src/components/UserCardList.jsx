import { UserCard } from '@/components/UserCard';
async function getData() {
  const res = await fetch('http://127.0.0.1:8080/qa/all/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      pageSize: 2,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const responseData = await res.json();
  return responseData.data.content;
}
export default async function UserCardList() {
  const MsgCardargs = {
    followers: 46,
    answersNumber: 47,
    userDescription: `Founder of @ProductHunt. Investor at @WeekendFund. Writing about fun(d) stuff at t.co/tsunRiiECA with @vedikaja_in. Say hi! Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: false,
  };
  const userCardList = await getData();
  return (
    <div className="flex flex-wrap items-center justify-between">
      {userCardList.map((userCard) => (
        <UserCard {...userCard} key={userCard.userDescription} />
      ))}
    </div>
  );
}
