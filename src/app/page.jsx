import LogInOutButton from '@/components/LogInOutButton';
import { MsgCard } from '@/components/MsgCard';
// import { Button } from '@nextui-org/react';
import Link from 'next/link';
export default function Home() {
  const msgArgs = {
    title: 'PLease ASK',
    imgSrc: 'https://openask.me/assets/donation-5@2x-f6c8ed0a.png',
    description: 'Question has earned',
    amount: '$876.1',
  };
  return (
    <>
      <div className="text-3xl font-bold underline">Hello world</div>
      <Link href="/login"> login </Link>
      {/* <Button>Button</Button> */}
      <MsgCard {...msgArgs} />
      <div>
        <LogInOutButton />
      </div>
    </>
  );
}
