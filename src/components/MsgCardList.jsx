import { MsgCard } from '@/components/MsgCard';
export default function MsgCardList() {
  const MsgCardargs = {
    title: 'PLease ASK',
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    description: 'Question has earned',
    amount: '$876.1',
  };
  
  return (
    <div className="flex items-center justify-between">
      <MsgCard {...MsgCardargs} />
      <MsgCard {...MsgCardargs} />
      <MsgCard {...MsgCardargs} />
    </div>
  );
}
