'use client';
import { Avatar } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const list = [
  'Home',
  'Ask for me',
  'My Activities',
  "Follewer's",
  'My profile',
];
export default function UserProfile() {
  const { data, status } = useSession();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href="/login/register"> Sign in </Link>
      </>
    );
  } else {
    const { user } = data;
    return (
      <div className="flex flex-col items-center justify-center">
        <Avatar src={user.image} className="w-20 h-20 text-large" />
        <div className="my-2">{user.email}</div>
        <div className="mb-6 text-Emerald-400">@{user.name}</div>
        {list.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="p-4 text-gray-500 hover:bg-gray-300 hover:text-gray-900 w-full text-center"
          >
            {item}
          </Link>
        ))}
        <div onClick={() => signOut()}>Sign out</div>
      </div>
    );
  }
}
