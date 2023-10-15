import MsgCardList from '@/components/MsgCardList';
import QuestionList from '@/components/QuestionList';
import Link from 'next/link';
import HomeSenseis from './HomeSenseis';

export default function Page() {
  return (
    <div className="flex flex-col">
      <MsgCardList />
      <div className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">Top Questions</h1>
        <Link
          href="/home/questions"
          className="text-blue-500 hover:text-blue-700"
        >
          See all
        </Link>
      </div>
      <QuestionList />
      <HomeSenseis />
    </div>
  );
}
