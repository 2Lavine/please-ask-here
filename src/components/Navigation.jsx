// 'use client';
import Link from 'next/link';
import UserProfile from '@/components/UserProfile';

const nav = () => {

  return (
    // <div className="h-screen w-1/6 ">
    <div className="flex flex-col my-auto w-64 p-7 rounded-3xl bg-red-50 items-center">
      {/* center tips */}
      <Link href={'./head'}>
        <div className="flex flex-col items-center">
          Ask your favorite creators{' '}
        </div>
        <div className="flex flex-col items-center">
          get their voice replies
        </div>
      </Link>
      <UserProfile />
    </div>
    // </div>
  );
};
export default nav;
