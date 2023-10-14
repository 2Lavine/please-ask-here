'use client';
import { Avatar } from '@nextui-org/react';
import Link from 'next/link';
import LogInOutButton from './LogInOutButton';

const list = [
  { label: 'Home', link: '/home' },
  { label: 'Ask for me', link: '/home/asks' },
  { label: 'My Activities', link: '/home/activities' },
  { label: 'Subscription', link: '/home/subscription' },
  { label: 'My profile', link: '/home/profile' },
];
export default function UserProfile() {
  // const { data } = useSession();
  const data = JSON.parse(localStorage.getItem('user'));
  // get from local storage if not set in local
  return (
    <div className="flex flex-col items-center justify-center">
      {data && (
        <>
          <Avatar src={data.user.image} className="w-20 h-20 text-large" />
          <div className="my-2">{data.user.email}</div>
          <div className="mb-6 text-Emerald-400">@{data.user.name}</div>
        </>
      )}
      {data &&
        list.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            className="p-4 text-gray-500 hover:bg-gray-300 hover:text-gray-900 w-full text-center"
          >
            {item.label}
          </Link>
        ))}
      <div className="h-4"></div>
      <LogInOutButton />
    </div>
  );
  // }
}
