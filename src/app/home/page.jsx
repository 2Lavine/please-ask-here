import CategoryTabs from '@/components/CategoryTabs';
import MsgCardList from '@/components/MsgCardList';
import QuestionList from '@/components/QuestionList';
import UserCardList from '@/components/UserCardList';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="flex flex-col">
      <MsgCardList />
      <div className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">Top Questions</h1>
        <Link href="#" className="text-blue-500 hover:text-blue-700">
          See all
        </Link>
      </div>
      <QuestionList />
      <div className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">Sensei Category</h1>
      </div>
      <CategoryTabs />
      <div className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">Recommended</h1>
        <Link href="#" className="text-blue-500 hover:text-blue-700">
          See all
        </Link>
      </div>
      <UserCardList />
    </div>
  );
}
