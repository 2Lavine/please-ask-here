import { UserCard } from '@/components/UserCard';
// import { Spacer } from '@nextui-org/react';
export default function UserCardList() {
  const MsgCardargs = {
    followers: 46,
    answersNumber: 47,
    userDescription: `Founder of @ProductHunt. Investor at @WeekendFund. Writing about fun(d) stuff at t.co/tsunRiiECA with @vedikaja_in. Say hi! Ask me about: StartupBuilding, Fundraising, EarlyStageInvesting`,
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    big: false,
  };
  return (
    <div className="flex flex-wrap items-center justify-between">
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
      <UserCard {...MsgCardargs} />
    </div>
  );
}
