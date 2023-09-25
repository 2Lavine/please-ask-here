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
        <Link href="/login"> Sign in </Link>
      </>
    );
  } else {
    console.log(data, status, 'hello');
    const { user } = data;
    // console.log(data);
    return (
      <>
        <Avatar src={user.image} className="w-20 h-20 text-large" />
        <div>{user.email}</div>
        <div>{user.name}</div>
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
      </>
    );
  }
}
